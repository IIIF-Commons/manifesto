interface IManifesto {
    load: (manifestUri: string, callback: (manifest: string) => void) => void;
    parse: (manifest: string) => Manifesto.Manifest;
    //CanvasType: Manifesto.CanvasType;
    //ElementType: Manifesto.ElementType;
    //RenderingFormat: Manifesto.RenderingFormat;
    //ServiceProfile: Manifesto.ServiceProfile;
    //ViewingDirection: Manifesto.ViewingDirection;
    //ViewingHint: Manifesto.ViewingHint;
}