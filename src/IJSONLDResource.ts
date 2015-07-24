module Manifesto {
    export interface IJSONLDResource {
        context: string;
        id: string;
        jsonld: any;
        getLabel(): string;
    }
}