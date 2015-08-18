module Manifesto {
    export class ManifestType extends StringValue{
        public static EMPTY = new ManifestType("");
        public static MANUSCRIPT = new ManifestType("manuscript");
        public static MONOGRAPH = new ManifestType("monograph");

        // todo: use getters when ES3 target is no longer required.

        empty(): ManifestType {
            return new ManifestType(ManifestType.EMPTY.toString());
        }

        manuscript(): ManifestType {
            return new ManifestType(ManifestType.MANUSCRIPT.toString());
        }

        monograph(): ManifestType {
            return new ManifestType(ManifestType.MONOGRAPH.toString());
        }
    }
}