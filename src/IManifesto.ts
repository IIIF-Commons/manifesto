interface IManifesto {
    load: (manifestUri: string, callback: (manifest: string) => void) => void;
    parse: (manifest: string) => Manifesto.Manifest;
    CanvasType: any;
    ElementType: any;
    RenderingFormat: any;
    ServiceProfile: any;
    ViewingDirection: any;
    ViewingHint: any;
}