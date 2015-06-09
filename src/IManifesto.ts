interface IManifesto {
    load: (manifestUri: string, callback: (manifest: string) => void) => void;
    parse: (manifest: string) => Manifesto.Manifest;
}