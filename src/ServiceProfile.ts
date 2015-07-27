module Manifesto {
    export class ServiceProfile {
        public static autoComplete = () => { return ServiceProfile.autoComplete() };
        public static login = () => { return ServiceProfile.login() };
        public static logout = () => { return ServiceProfile.logout() };
        public static otherManifestations = () => { return ServiceProfile.otherManifestations() };
        public static searchWithin = () => { return ServiceProfile.searchWithin() };
        public static token = () => { return ServiceProfile.token() };

        constructor(public value?: string) {
        }

        toString() {
            return this.value;
        }

        // todo: use getters when ES3 target is no longer required.

        autoComplete(): ServiceProfile {
            return new ServiceProfile("http://iiif.io/api/autocomplete/1/");
        }

        login(): ServiceProfile {
            return new ServiceProfile("http://iiif.io/api/image/2/auth/login");
        }

        logout(): ServiceProfile {
            return new ServiceProfile("http://iiif.io/api/image/2/auth/logout");
        }

        otherManifestations(): ServiceProfile {
            return new ServiceProfile("http://iiif.io/api/otherManifestations.json");
        }

        searchWithin(): ServiceProfile {
            return new ServiceProfile("http://iiif.io/api/search/1/");
        }

        token(): ServiceProfile {
            return new ServiceProfile("http://iiif.io/api/image/2/auth/token");
        }
    }
}