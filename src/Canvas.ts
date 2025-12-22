import {
  ExternalResourceType,
  ViewingHint,
} from "@iiif/vocabulary/dist-commonjs";
import {
  Annotation,
  AnnotationBody,
  AnnotationList,
  AnnotationPage,
  IExternalImageResourceData,
  IManifestoOptions,
  Range,
  Resource,
  Service,
  Size,
  Utils,
} from "./internal";
// @ts-ignore
import flatten from "lodash/flatten";
// @ts-ignore
import flattenDeep from "lodash/flattenDeep";

export class Canvas extends Resource {
  public ranges: Range[];

  constructor(jsonld?: any, options?: IManifestoOptions) {
    super(jsonld, options);
  }

  // http://iiif.io/api/image/2.1/#canonical-uri-syntax
  getCanonicalImageUri(w?: number): string {
    let id: string | null = null;
    const region: string = "full";
    const rotation: number = 0;
    let quality: string = "default";
    let width: number | undefined = w;

    // if an info.json has been loaded
    if (
      this.externalResource &&
      this.externalResource.data &&
      this.externalResource.data["@id"]
    ) {
      id = this.externalResource.data["@id"];

      if (!width) {
        width = (<IExternalImageResourceData>this.externalResource.data).width;
      }

      if (this.externalResource.data["@context"]) {
        if (
          this.externalResource.data["@context"].indexOf("/1.0/context.json") >
            -1 ||
          this.externalResource.data["@context"].indexOf("/1.1/context.json") >
            -1 ||
          this.externalResource.data["@context"].indexOf("/1/context.json") > -1
        ) {
          quality = "native";
        }
      }
    } else {
      // info.json hasn't been loaded yet

      let images: Annotation[];

      // presentation 2.0
      images = this.getImages();

      if (images && images.length) {
        const firstImage: Annotation = images[0];
        const resource: Resource = firstImage.getResource();
        const services: Service[] = resource.getServices();

        if (!width) {
          width = resource.getWidth();
        }
        const service = services
          ? services.find((service) => {
              return (
                Utils.isImageProfile(service.getProfile()) ||
                Utils.isImageServiceType(service.getIIIFResourceType())
              );
            })
          : null;

        if (service) {
          id = service.id;
          quality = Utils.getImageQuality(service.getProfile());
        } else if (width === resource.getWidth()) {
          // if the passed width is the same as the resource width
          // i.e. not looking for a thumbnail
          // return the full size image.
          // used for download options when loading static images.
          return resource.id;
        }
      }

      // presentation 3.0
      images = this.getContent();

      if (images && images.length) {
        const firstImage: Annotation = images[0];
        // Developer note: Since Canvas in Presentation 3 doesn't use
        // SpecificResource resources in the body, force a cast
        const body: AnnotationBody[] = firstImage.getBody() as AnnotationBody[];
        const anno: AnnotationBody = body[0];
        const services: Service[] = anno.getServices();

        if (!width) {
          width = anno.getWidth();
        }
        const service = services
          ? services.find((service) => {
              return Utils.isImageServiceType(service.getIIIFResourceType());
            })
          : null;

        if (service) {
          id = service.id;
          quality = Utils.getImageQuality(service.getProfile());
        } else if (width === anno.getWidth()) {
          // if the passed width is the same as the resource width
          // i.e. not looking for a thumbnail
          // return the full size image.
          // used for download options when loading static images.
          return anno.id;
        }
      }

      // todo: should this be moved to getThumbUri?
      if (!id) {
        const thumbnail: any = this.getProperty("thumbnail");

        if (thumbnail) {
          if (typeof thumbnail === "string") {
            return thumbnail;
          } else {
            if (thumbnail["@id"]) {
              return thumbnail["@id"];
            } else if (thumbnail.length) {
              return thumbnail[0].id;
            }
          }
        }
      }
    }

    const size = width + ",";

    // trim off trailing '/'
    if (id && id.endsWith("/")) {
      id = id.substr(0, id.length - 1);
    }

    const uri: string = [id, region, size, rotation, quality + ".jpg"].join(
      "/"
    );

    return uri;
  }

  getMaxDimensions(): Size | null {
    let maxDimensions: Size | null = null;
    let profile: any;

    if (
      this.externalResource &&
      this.externalResource.data &&
      this.externalResource.data.profile
    ) {
      profile = this.externalResource.data.profile;

      if (Array.isArray(profile)) {
        profile = profile.filter((p) => p["maxWidth"] ?? p["maxwidth"])[0];

        if (profile) {
          maxDimensions = new Size(
            profile.maxWidth,
            profile.maxHeight ? profile.maxHeight : profile.maxWidth
          );
        }
      }
    }

    return maxDimensions;
  }

  // Presentation API 3.0
  getContent(): Annotation[] {
    const content: Annotation[] = [];

    const items = this.__jsonld.items || this.__jsonld.content;

    if (!items) return content;

    // should be contained in an AnnotationPage
    let annotationPage: AnnotationPage | null = null;

    if (items.length) {
      annotationPage = new AnnotationPage(items[0], this.options);
    }

    if (!annotationPage) {
      return content;
    }

    const annotations: Annotation[] = annotationPage.getAnnotations();

    for (let i = 0; i < annotations.length; i++) {
      const a = annotations[i];
      content.push(a);
    }

    return content;
  }

  getAnnotations(): AnnotationPage[] {
    const annotationPages: AnnotationPage[] = [];
    const pages = this.__jsonld.annotations;

    if (!pages || !Array.isArray(pages)) {
      return annotationPages;
    }

    for (let i = 0; i < pages.length; i++) {
      const annotationPage = new AnnotationPage(pages[i], this.options);
      annotationPages.push(annotationPage);
    }

    return annotationPages;
  }

  getDuration(): number | null {
    return this.getProperty("duration");
  }

  // presentation 2.0
  getImages(): Annotation[] {
    const images: Annotation[] = [];

    if (!this.__jsonld.images) return images;

    for (let i = 0; i < this.__jsonld.images.length; i++) {
      const a = this.__jsonld.images[i];
      const annotation = new Annotation(a, this.options);
      images.push(annotation);
    }

    return images;
  }

  getIndex(): number {
    return this.getProperty("index");
  }

  // Annotations not rendered as part of the Canvas
  // Have non-painting motivations and are listed in Canvas annotations property, not items property
  getNonContentAnnotations(): Annotation[] {
    const annotationPages = (this.__jsonld.annotations || [])
      .filter(
        (annotationPage) =>
          annotationPage && annotationPage.type === "AnnotationPage"
      )
      .map(
        (annotationPage) => new AnnotationPage(annotationPage, this.options)
      ) as AnnotationPage[];
    if (!annotationPages.length) return [];

    const annotationsNested = annotationPages.map((page) =>
      page.getItems()
    ) as Annotation[][];
    const annotationsFlat = flattenDeep(annotationsNested) as Annotation[];

    return annotationsFlat.map(
      (annotation) => new Annotation(annotation, this.options)
    );
  }

  getOtherContent(): Promise<AnnotationList[]> {
    const otherContent = Array.isArray(this.getProperty("otherContent"))
      ? this.getProperty("otherContent")
      : [this.getProperty("otherContent")];

    const canonicalComparison = (typeA, typeB): boolean => {
      if (typeof typeA !== "string" || typeof typeB !== "string") {
        return false;
      }
      return typeA.toLowerCase() === typeA.toLowerCase();
    };

    const otherPromises: Promise<AnnotationList>[] = otherContent
      .filter(
        (otherContent) =>
          otherContent &&
          canonicalComparison(otherContent["@type"], "sc:AnnotationList")
      )
      .map(
        (annotationList, i) =>
          new AnnotationList(
            annotationList["label"] || `Annotation list ${i}`,
            annotationList,
            this.options
          )
      )
      .map((annotationList) => annotationList.load());

    return Promise.all(otherPromises);
  }

  // Prefer thumbnail service to image service if supplied and if
  // the thumbnail service can provide a satisfactory size +/- x pixels.
  // this is used to get thumb URIs *before* the info.json has been requested
  // and populate thumbnails in a viewer.
  // the publisher may also provide pre-computed fixed-size thumbs for better performance.
  //getThumbUri(width: number): string {
  //
  //    var uri;
  //    var images: IAnnotation[] = this.getImages();
  //
  //    if (images && images.length) {
  //        var firstImage = images[0];
  //        var resource: IResource = firstImage.getResource();
  //        var services: IService[] = resource.getServices();
  //
  //        for (let i = 0; i < services.length; i++) {
  //            var service: IService = services[i];
  //            var id = service.id;
  //
  //            if (!_endsWith(id, '/')) {
  //                id += '/';
  //            }
  //
  //            uri = id + 'full/' + width + ',/0/' + Utils.getImageQuality(service.getProfile()) + '.jpg';
  //        }
  //    }
  //
  //    return uri;
  //}

  //getType(): CanvasType {
  //    return new CanvasType(this.getProperty('@type').toLowerCase());
  //}

  getWidth(): number {
    return this.getProperty("width");
  }

  getHeight(): number {
    return this.getProperty("height");
  }

  getViewingHint(): ViewingHint | null {
    let viewingHint: any = this.getProperty("viewingHint");

    if (Array.isArray(viewingHint)) {
      viewingHint = viewingHint[0];
    }

    if (viewingHint) {
      return viewingHint;
    }

    return null;
  }

  get imageResources() {
    const resources = flattenDeep([
      this.getImages().map((i) => i.getResource()),
      this.getContent().map((i) => i.getBody()),
    ]);

    return flatten(
      resources.map((resource) => {
        switch (resource.getProperty("type").toLowerCase()) {
          case ExternalResourceType.CHOICE:
          case ExternalResourceType.OA_CHOICE:
            return new Canvas(
              {
                images: flatten([
                  resource.getProperty("default"),
                  resource.getProperty("item"),
                ]).map((r) => ({ resource: r })),
              },
              this.options
            )
              .getImages()
              .map((i) => i.getResource());
          default:
            return resource;
        }
      })
    );
  }

  get resourceAnnotations() {
    return flattenDeep([this.getImages(), this.getContent()]);
  }

  /**
   * Returns a given resource Annotation, based on a contained resource or body
   * id
   */
  resourceAnnotation(id) {
    return this.resourceAnnotations.find(
      (anno) =>
        anno.getResource().id === id ||
        flatten(new Array(anno.getBody())).some((body) => body.id === id)
    );
  }

  /**
   * Returns the fragment placement values if a resourceAnnotation is placed on
   * a canvas somewhere besides the full extent
   */
  onFragment(id) {
    const resourceAnnotation = this.resourceAnnotation(id);
    if (!resourceAnnotation) return undefined;
    // IIIF v2
    const on = resourceAnnotation.getProperty("on");
    // IIIF v3
    const target = resourceAnnotation.getProperty("target");
    if (!on || !target) {
      return undefined;
    }
    const fragmentMatch = (on || target).match(/xywh=(.*)$/);
    if (!fragmentMatch) return undefined;
    return fragmentMatch[1].split(",").map((str) => parseInt(str, 10));
  }

  get iiifImageResources() {
    return this.imageResources.filter(
      (r) => r && r.getServices()[0] && r.getServices()[0].id
    );
  }

  get imageServiceIds() {
    return this.iiifImageResources.map((r) => r.getServices()[0].id);
  }

  get aspectRatio() {
    return this.getWidth() / this.getHeight();
  }
}
