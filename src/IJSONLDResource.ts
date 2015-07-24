module Manifesto {
    export interface IJSONLDResource {
        context: string;
        id: string;
        jsonld: any;
        label: string;
        getLabel(): string;
    }
}