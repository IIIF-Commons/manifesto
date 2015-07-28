module Manifesto {
    export interface IJSONLDResource {
        context: string;
        id: string;
        __jsonld: any;
        getLabel(): string;
        getProperty(name: string): any;
    }
}