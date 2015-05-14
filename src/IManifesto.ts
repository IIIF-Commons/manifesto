interface IManifesto {
    manifest: Manifest;
    load: (manifestUri: string, callback: (manifest: Manifest) => void, useJSONP?: boolean) => void;
    parse: (manifest: any, callback: (manifest: Manifest) => void) => void;
}