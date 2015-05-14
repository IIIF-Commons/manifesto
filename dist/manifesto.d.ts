declare class Canvas {
}
interface IManifesto {
    manifest: Manifest;
    load: (manifestUri: string, callback: (manifest: Manifest) => void) => void;
    parse: (manifest: any, callback: (manifest: Manifest) => void) => void;
}
declare class Manifest {
}
declare var http: any;
declare class Sequence {
}
declare class Service {
}
declare class Structure {
}
