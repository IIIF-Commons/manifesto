namespace Manifesto {
    export class ServiceProfile extends StringValue {
        public static AUTOCOMPLETE = new ServiceProfile("http://iiif.io/api/search/0/autocomplete");
        public static STANFORDIIIFIMAGECOMPLIANCE0 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/compliance.html#level0");
        public static STANFORDIIIFIMAGECOMPLIANCE1 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/compliance.html#level1");
        public static STANFORDIIIFIMAGECOMPLIANCE2 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/compliance.html#level2");
        public static STANFORDIIIFIMAGECONFORMANCE0 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/conformance.html#level0");
        public static STANFORDIIIFIMAGECONFORMANCE1 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/conformance.html#level1");
        public static STANFORDIIIFIMAGECONFORMANCE2 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/conformance.html#level2");
        public static STANFORDIIIF1IMAGECOMPLIANCE0 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0");
        public static STANFORDIIIF1IMAGECOMPLIANCE1 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level1");
        public static STANFORDIIIF1IMAGECOMPLIANCE2 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2");
        public static STANFORDIIIF1IMAGECONFORMANCE0 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level0");
        public static STANFORDIIIF1IMAGECONFORMANCE1 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level1");
        public static STANFORDIIIF1IMAGECONFORMANCE2 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level2");
        public static IIIF1IMAGELEVEL0 = new ServiceProfile("http://iiif.io/api/image/1/level0.json");
        public static IIIF1IMAGELEVEL0PROFILE = new ServiceProfile("http://iiif.io/api/image/1/profiles/level0.json");
        public static IIIF1IMAGELEVEL1 = new ServiceProfile("http://iiif.io/api/image/1/level1.json");
        public static IIIF1IMAGELEVEL1PROFILE = new ServiceProfile("http://iiif.io/api/image/1/profiles/level1.json");
        public static IIIF1IMAGELEVEL2 = new ServiceProfile("http://iiif.io/api/image/1/level2.json");
        public static IIIF1IMAGELEVEL2PROFILE = new ServiceProfile("http://iiif.io/api/image/1/profiles/level2.json");
        public static IIIF2IMAGELEVEL0 = new ServiceProfile("http://iiif.io/api/image/2/level0.json");
        public static IIIF2IMAGELEVEL0PROFILE = new ServiceProfile("http://iiif.io/api/image/2/profiles/level0.json");
        public static IIIF2IMAGELEVEL1 = new ServiceProfile("http://iiif.io/api/image/2/level1.json");
        public static IIIF2IMAGELEVEL1PROFILE = new ServiceProfile("http://iiif.io/api/image/2/profiles/level1.json");
        public static IIIF2IMAGELEVEL2 = new ServiceProfile("http://iiif.io/api/image/2/level2.json");
        public static IIIF2IMAGELEVEL2PROFILE = new ServiceProfile("http://iiif.io/api/image/2/profiles/level2.json");
        public static IXIF = new ServiceProfile("http://wellcomelibrary.org/ld/ixif/0/alpha.json");
        public static LOGIN = new ServiceProfile("http://iiif.io/api/auth/0/login");
        public static CLICKTHROUGH = new ServiceProfile("http://iiif.io/api/auth/0/login/clickthrough");
        public static RESTRICTED = new ServiceProfile("http://iiif.io/api/auth/0/login/restricted");
        public static LOGOUT = new ServiceProfile("http://iiif.io/api/auth/0/logout");
        public static OTHERMANIFESTATIONS = new ServiceProfile("http://iiif.io/api/otherManifestations.json");
        public static SEARCHWITHIN = new ServiceProfile("http://iiif.io/api/search/0/search");
        public static TOKEN = new ServiceProfile("http://iiif.io/api/auth/0/token");
        public static TRACKINGEXTENSIONS = new ServiceProfile("http://universalviewer.io/tracking-extensions-profile");
        public static UIEXTENSIONS = new ServiceProfile("http://universalviewer.io/ui-extensions-profile");
        public static PRINTEXTENSIONS = new ServiceProfile("http://universalviewer.io/print-extensions-profile");
        public static SHAREEXTENSIONS = new ServiceProfile("http://universalviewer.io/share-extensions-profile");

        // todo: use getters when ES3 target is no longer required.

        autoComplete(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.AUTOCOMPLETE.toString());
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

        clickThrough(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.CLICKTHROUGH.toString());
        }

        restricted(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.RESTRICTED.toString());
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

        stanfordIIIFImageCompliance1(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE1.toString());
        }

        stanfordIIIFImageCompliance2(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE2.toString());
        }

        stanfordIIIFImageConformance1(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.STANFORDIIIFIMAGECONFORMANCE1.toString());
        }

        stanfordIIIFImageConformance2(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.STANFORDIIIFIMAGECONFORMANCE2.toString());
        }

        stanfordIIIF1ImageCompliance1(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE1.toString());
        }

        stanfordIIIF1ImageCompliance2(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE2.toString());
        }

        stanfordIIIF1ImageConformance1(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE1.toString());
        }

        stanfordIIIF1ImageConformance2(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE2.toString());
        }

        token(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.TOKEN.toString());
        }

        trackingExtensions(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.TRACKINGEXTENSIONS.toString());
        }

        uiExtensions(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.UIEXTENSIONS.toString());
        }

        printExtensions(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.PRINTEXTENSIONS.toString());
        }

        shareExtensions(): ServiceProfile {
            return new ServiceProfile(ServiceProfile.SHAREEXTENSIONS.toString());
        }
    }
}