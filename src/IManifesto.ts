interface IManifesto {
    manifestCallback: any;
    manifest: Manifest;
    load: (manifestUri: string, callback: (manifest: Manifest) => void, useJSONP?: boolean) => void;
    parseManifest: (manifest: any, callback: (manifest: Manifest) => void) => void;
}