
interface IManifesto {
    manifest: IManifest;
    load: (manifestUri: string, callback: (manifest: IManifest) => void) => void;
    parse: (manifest: any, callback: (manifest: IManifest) => void) => void;
}