namespace Manifesto {
    export interface IJSONLDResource {
        context: string;
        id: string;
        __jsonld: any;
        getProperty(name: string): any;
    }
}