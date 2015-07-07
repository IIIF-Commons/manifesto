
module Manifesto {
    export class Rendering implements IRendering {
        format: string;
        id: string;
        jsonld: any;
        manifest: IManifest;
    }
}