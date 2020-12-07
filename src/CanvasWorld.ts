import { ViewingDirection } from "@iiif/vocabulary/dist-commonjs";
import normalizeUrl from "normalize-url";
import { Canvas } from ".";

type CanvasDimensions = {
  canvas: Canvas;
  height: number;
  width: number;
  x: number;
  y: number;
};

export default class CanvasWorld {
  public canvases: Canvas[];
  public viewingDirection: ViewingDirection;
  public layers: any[]; // todo: type
  private _canvasDimensions: CanvasDimensions[];

  /**
   * @param {Array} canvases - Array of Manifesto:Canvas objects to create a
   * world from.
   */
  constructor(
    canvases: Canvas[],
    layers,
    viewingDirection = ViewingDirection.LEFT_TO_RIGHT
  ) {
    this.canvases = canvases.map(c => new Canvas(c));
    this.layers = layers;
    this.viewingDirection = viewingDirection;
    this._canvasDimensions = [];
  }

  get canvasIds() {
    return this.canvases.map(canvas => canvas.id);
  }

  get canvasDimensions() {
    if (this._canvasDimensions) {
      return this._canvasDimensions;
    }

    const [dirX, dirY] = this.canvasDirection;
    const scale =
      dirY === 0
        ? Math.min(...this.canvases.map(c => c.getHeight()))
        : Math.min(...this.canvases.map(c => c.getWidth()));
    let incX = 0;
    let incY = 0;

    const canvasDims = this.canvases.reduce((acc, canvas) => {
      let canvasHeight = 0;
      let canvasWidth = 0;

      if (!isNaN(canvas.aspectRatio)) {
        if (dirY === 0) {
          // constant height
          canvasHeight = scale;
          canvasWidth = Math.floor(scale * canvas.aspectRatio);
        } else {
          // constant width
          canvasWidth = scale;
          canvasHeight = Math.floor(scale * (1 / canvas.aspectRatio));
        }
      }

      acc.push({
        canvas,
        height: canvasHeight,
        width: canvasWidth,
        x: incX,
        y: incY
      });

      incX += dirX * canvasWidth;
      incY += dirY * canvasHeight;
      return acc;
    }, [] as CanvasDimensions[]);

    const worldHeight = dirY === 0 ? scale : Math.abs(incY);
    const worldWidth = dirX === 0 ? scale : Math.abs(incX);

    this._canvasDimensions = canvasDims.reduce((acc, dims) => {
      acc.push({
        ...dims,
        x: dirX === -1 ? dims.x + worldWidth - dims.width : dims.x,
        y: dirY === -1 ? dims.y + worldHeight - dims.height : dims.y
      });

      return acc;
    }, [] as CanvasDimensions[]);

    return this._canvasDimensions;
  }

  /**
   * contentResourceToWorldCoordinates - calculates the contentResource coordinates
   * respective to the world.
   */
  contentResourceToWorldCoordinates(contentResource) {
    const canvasIndex = this.canvases.findIndex(c =>
      c.imageResources.find(r => r.id === contentResource.id)
    );
    const canvas = this.canvases[canvasIndex];
    if (!canvas) return [];

    const [x, y, w, h] = this.canvasToWorldCoordinates(canvas.id);

    const fragmentOffset = canvas.onFragment(contentResource.id);
    if (fragmentOffset) {
      return [
        x + fragmentOffset[0],
        y + fragmentOffset[1],
        fragmentOffset[2],
        fragmentOffset[3]
      ];
    }
    return [x, y, w, h];
  }

  /** */
  canvasToWorldCoordinates(canvasId) {
    const canvasDimensions = this.canvasDimensions.find(
      c => c.canvas.id === canvasId
    );

    return [
      canvasDimensions!.x,
      canvasDimensions!.y,
      canvasDimensions!.width,
      canvasDimensions!.height
    ];
  }

  /** */
  get canvasDirection() {
    switch (this.viewingDirection) {
      case ViewingDirection.LEFT_TO_RIGHT:
        return [1, 0];
      case ViewingDirection.RIGHT_TO_LEFT:
        return [-1, 0];
      case ViewingDirection.TOP_TO_BOTTOM:
        return [0, 1];
      case ViewingDirection.BOTTOM_TO_TOP:
        return [0, -1];
      default:
        return [1, 0];
    }
  }

  /** Get the IIIF content resource for an image */
  contentResource(infoResponseId) {
    const canvas = this.canvases.find(c =>
      c.imageServiceIds.some(
        id =>
          normalizeUrl(id, { stripAuthentication: false }) ===
          normalizeUrl(infoResponseId, { stripAuthentication: false })
      )
    );
    if (!canvas) return undefined;
    return canvas.imageResources.find(
      r =>
        normalizeUrl(r.getServices()[0].id, { stripAuthentication: false }) ===
        normalizeUrl(infoResponseId, { stripAuthentication: false })
    );
  }

  /** @private */
  getLayerMetadata(contentResource) {
    if (!this.layers) return undefined;
    const canvas = this.canvases.find(c =>
      c.imageResources.find(r => r.id === contentResource.id)
    );

    if (!canvas) return undefined;

    const resourceIndex = canvas.imageResources.findIndex(
      r => r.id === contentResource.id
    );

    const layer = this.layers[canvas.id];
    const imageResourceLayer = layer && layer[contentResource.id];

    return {
      index: resourceIndex,
      opacity: 1,
      total: canvas.imageResources.length,
      visibility: true,
      ...imageResourceLayer
    };
  }

  /** */
  layerOpacityOfImageResource(contentResource) {
    const layer = this.getLayerMetadata(contentResource);
    if (!layer) return 1;
    if (!layer.visibility) return 0;

    return layer.opacity;
  }

  /** */
  layerIndexOfImageResource(contentResource) {
    const layer = this.getLayerMetadata(contentResource);
    if (!layer) return undefined;

    return layer.total - layer.index - 1;
  }

  /**
   * offsetByCanvas - calculates the offset for a given canvas target. Currently
   * assumes a horizontal only layout.
   */
  offsetByCanvas(canvasTarget) {
    const coordinates = this.canvasToWorldCoordinates(canvasTarget);
    return {
      x: coordinates[0],
      y: coordinates[1]
    };
  }

  /**
   * worldBounds - calculates the "World" bounds. World in this case is canvases
   * lined up horizontally starting from left to right.
   */
  worldBounds() {
    const worldWidth = Math.max(
      ...this.canvasDimensions.map(c => c.x + c.width)
    );
    const worldHeight = Math.max(
      ...this.canvasDimensions.map(c => c.y + c.height)
    );

    return [0, 0, worldWidth, worldHeight];
  }

  /** */
  canvasAtPoint(point) {
    const canvasDimensions = this.canvasDimensions.find(
      c =>
        c.x <= point.x &&
        point.x <= c.x + c.width &&
        c.y <= point.y &&
        point.y <= c.y + c.height
    );

    return canvasDimensions && canvasDimensions.canvas;
  }
}
