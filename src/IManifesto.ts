
interface IManifesto {
    manifest: Manifest;
    load: (manifestUri: string, callback: (manifest: Manifest) => void) => void;
    parse: (manifest: any, callback: (manifest: Manifest) => void) => void;
}