module Manifesto {
    export interface IJSONLDResource {
        //new(jsonld: any);
        context: string;
        id: string;
        __jsonld: any;
        getProperty(name: string): any;
    }
}