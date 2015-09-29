module Manifesto {
    export class ServiceProfile extends StringValue {
        public static AUTOCOMPLETE = new ServiceProfile("http://iiif.io/api/search/0/autocomplete");
        public static CLICKTHROUGH = new ServiceProfile("http://wellcomelibrary.org/ld/iiif-ext/0/accept-terms-click-through");
        public static STANFORDIIIFIMAGELEVEL1 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/compliance.html#level1");
        public static STANFORDIIIFIMAGELEVEL2 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/compliance.html#level2");
        public static STANFORDIIIF1IMAGELEVEL1 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level1");
        public static STANFORDIIIF1IMAGELEVEL2 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2");
        public static IIIF1IMAGELEVEL1 = new ServiceProfile("http://iiif.io/api/image/1/level1.json");
        public static IIIF1IMAGELEVEL2 = new ServiceProfile("http://iiif.io/api/image/1/level2.json");
        public static IIIF2IMAGELEVEL1 = new ServiceProfile("http://iiif.io/api/image/2/level1.json");
        public static IIIF2IMAGELEVEL2 = new ServiceProfile("http://iiif.io/api/image/2/level2.json");
        public static IXIF = new ServiceProfile("http://wellcomelibrary.org/ld/ixif/0/alpha.json");
        public static LOGIN = new ServiceProfile("http://iiif.io/api/auth/0/login");
        public static LOGOUT = new ServiceProfile("http://iiif.io/api/auth/0/logout");
        public static OTHERMANIFESTATIONS = new ServiceProfile("http://iiif.io/api/otherManifestations.json");
        public static SEARCHWITHIN = new ServiceProfile("http://iiif.io/api/search/0/search");
        public static TOKEN = new ServiceProfile("http://iiif.io/api/auth/0/token");

        // todo: use getters when ES3 target is no longer required.

        autoComplete(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.AUTOCOMPLETE.toString());
        }

        clickThrough(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.CLICKTHROUGH.toString());
        }

        iiif1ImageLevel1(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.IIIF1IMAGELEVEL1.toString());
        }

        iiif1ImageLevel2(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.IIIF1IMAGELEVEL2.toString());
        }

        iiif2ImageLevel1(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.IIIF2IMAGELEVEL1.toString());
        }

        iiif2ImageLevel2(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.IIIF2IMAGELEVEL2.toString());
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

        stanfordIIIFImageLevel1(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.STANFORDIIIFIMAGELEVEL1.toString());
        }

        stanfordIIIFImageLevel2(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.STANFORDIIIFIMAGELEVEL2.toString());
        }

        stanfordIIIF1ImageLevel1(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.STANFORDIIIF1IMAGELEVEL1.toString());
        }

        stanfordIIIF1ImageLevel2(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.STANFORDIIIF1IMAGELEVEL2.toString());
        }

        token(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.TOKEN.toString());
        }
    }
}