declare class Canvas {
}
interface IManifesto {
    manifestCallback: any;
    manifest: Manifest;
    load: (manifestUri: string, callback: (manifest: Manifest) => void, useJSONP?: boolean) => void;
    parseManifest: (manifest: any, callback: (manifest: Manifest) => void) => void;
}
declare class Manifest {
}
declare class Sequence {
}
declare class Service {
}
declare class Structure {
}
