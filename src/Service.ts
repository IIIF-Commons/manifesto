
module Manifesto {
    export class Service extends JSONLDResource implements IService {
        constructor(resource: any){
            super(resource);
        }

        getProfile(): ServiceProfile{
            return new ServiceProfile(this.__jsonld.profile);
        }
    }
}