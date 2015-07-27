module Manifesto {
    export class ServiceProfile {
        public static AUTOCOMPLETE = new ServiceProfile("http://iiif.io/api/autocomplete/1/");
        public static LOGIN = new ServiceProfile("http://iiif.io/api/image/2/auth/login");
        public static LOGOUT = new ServiceProfile("http://iiif.io/api/image/2/auth/logout");
        public static OTHERMANIFESTATIONS = new ServiceProfile("http://iiif.io/api/otherManifestations.json");
        public static SEARCHWITHIN = new ServiceProfile("http://iiif.io/api/search/1/");
        public static TOKEN = new ServiceProfile("http://iiif.io/api/image/2/auth/token");

        constructor(public value?: string) {
        }

        toString() {
            return this.value;
        }

        // todo: use getters when ES3 target is no longer required.

        autoComplete(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.AUTOCOMPLETE.toString());
        }

        login(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.LOGIN.toString());
        }

        logout(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.LOGOUT.toString());
        }

        otherManifestations(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.OTHERMANIFESTATIONS.toString());
        }

        searchWithin(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.SEARCHWITHIN.toString());
        }

        token(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.TOKEN.toString());
        }
    }
}