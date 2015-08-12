module Manifesto {
    export class ManifestType extends StringValue{
        public static EMPTY = new ManifestType("");
        public static FOLIO = new ManifestType("folio");
        public static MONOGRAPH = new ManifestType("monograph");

        // todo: use getters when ES3 target is no longer required.

        empty(): ManifestType {
            return new ManifestType(ManifestType.EMPTY.toString());
        }

        folio(): ManifestType {
            return new ManifestType(ManifestType.FOLIO.toString());
        }

        monograph(): ManifestType {
            return new ManifestType(ManifestType.MONOGRAPH.toString());
        }
    }
}