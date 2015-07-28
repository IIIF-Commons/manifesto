interface IManifesto {
    load: (manifestUri: string, callback: (manifest: string) => void) => void;
    create: (manifest: string, options?: Manifesto.IManifestoOptions) => Manifesto.Manifest;
    CanvasType: Manifesto.CanvasType;
    ElementType: Manifesto.ElementType;
    RenderingFormat: Manifesto.RenderingFormat;
    ServiceProfile: Manifesto.ServiceProfile;
    ViewingDirection: Manifesto.ViewingDirection;
    ViewingHint: Manifesto.ViewingHint;
}