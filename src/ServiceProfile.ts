module Manifesto {
    export class ServiceProfile {
        public static autoComplete = new ServiceProfile("http://iiif.io/api/autocomplete/1/");
        public static login = new ServiceProfile("http://iiif.io/api/image/2/auth/login");
        public static logout = new ServiceProfile("http://iiif.io/api/image/2/auth/logout");
        public static otherManifestations = new ServiceProfile("http://iiif.io/api/otherManifestations.json");
        public static searchWithin = () => { return ServiceProfile.searchWithin() };
        public static token = new ServiceProfile("http://iiif.io/api/image/2/auth/token");

        constructor(public value?: string) {
        }

        toString() {
            return this.value;
        }

        // todo: use getters when ES3 target no longer required.
        searchWithin(): ServiceProfile {
            return new ServiceProfile("http://iiif.io/api/search/1/");
        }
    }
}