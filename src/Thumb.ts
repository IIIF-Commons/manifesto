import { ViewingHint } from "@iiif/vocabulary/dist-commonjs";
import { Canvas } from "./internal";

// todo: deprecate
// this is used by Sequence.getThumbs
export class Thumb {
  public data: any;
  public index: number;
  public uri: string;
  public label: string;
  public width: number;
  public height: number;
  public visible: boolean;
  public viewingHint: ViewingHint | null;

  constructor(width: number, canvas: Canvas) {
    this.data = canvas;
    this.index = canvas.index;
    this.width = width;

    const heightRatio: number = canvas.getHeight() / canvas.getWidth();

    if (heightRatio) {
      this.height = Math.floor(this.width * heightRatio);
    } else {
      this.height = width;
    }

    this.uri = canvas.getCanonicalImageUri(width);
    this.label = <string>canvas.getLabel().getValue(); // todo: pass locale?
    this.viewingHint = canvas.getViewingHint();
  }
}
