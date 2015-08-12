module Manifesto {
    export class ServiceProfile extends StringValue {
        public static AUTOCOMPLETE = new ServiceProfile("http://iiif.io/api/autocomplete/1/");
        public static CLICKTHROUGH = new ServiceProfile("http://wellcomelibrary.org/ld/iiif-ext/0/accept-terms-click-through");
        public static IIIFIMAGELEVEL1 = new ServiceProfile("http://iiif.io/api/image/2/level1.json");
        public static IIIFIMAGELEVEL2 = new ServiceProfile("http://iiif.io/api/image/2/level2.json");
        public static IXIF = new ServiceProfile("http://wellcomelibrary.org/ld/ixif/0/alpha.json");
        public static LOGIN = new ServiceProfile("http://iiif.io/api/image/2/auth/login");
        public static LOGOUT = new ServiceProfile("http://iiif.io/api/image/2/auth/logout");
        public static OTHERMANIFESTATIONS = new ServiceProfile("http://iiif.io/api/otherManifestations.json");
        public static SEARCHWITHIN = new ServiceProfile("http://iiif.io/api/search/1/");
        public static TOKEN = new ServiceProfile("http://iiif.io/api/image/2/auth/token");

        // todo: use getters when ES3 target is no longer required.

        autoComplete(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.AUTOCOMPLETE.toString());
        }

        clickThrough(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.CLICKTHROUGH.toString());
        }

        iiifImageLevel1(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.IIIFIMAGELEVEL1.toString());
        }

        iiifImageLevel2(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.IIIFIMAGELEVEL2.toString());
        }

        ixif(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.IXIF.toString());
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