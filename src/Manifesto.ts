module.exports = <IManifesto>{

    CanvasType: new Manifesto.CanvasType(),
    ElementType: new Manifesto.ElementType(),
    ManifestType: new Manifesto.ManifestType(),
    RenderingFormat: new Manifesto.RenderingFormat(),
    ServiceProfile: new Manifesto.ServiceProfile(),
    ViewingDirection: new Manifesto.ViewingDirection(),
    ViewingHint: new Manifesto.ViewingHint(),

    load: function (manifestUri: string, cb: (manifest: any) => void): void {
        Manifesto.Utils.load(manifestUri, cb);
    },

    create: function(manifest: string, options?: Manifesto.IManifestoOptions): Manifesto.IManifest {
        return Manifesto.Deserialiser.parse(manifest, options);
    }
};