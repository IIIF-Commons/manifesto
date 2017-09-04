namespace Manifesto {
    export class TreeNodeType extends StringValue {
        public static COLLECTION = new TreeNodeType("collection");
        public static MANIFEST = new TreeNodeType("manifest");
        public static RANGE = new TreeNodeType("range");

        // todo: use getters when ES3 target is no longer required.

        public collection(): TreeNodeType {
            return new TreeNodeType(TreeNodeType.COLLECTION.toString());
        }

        public manifest(): TreeNodeType {
            return new TreeNodeType(TreeNodeType.MANIFEST.toString());
        }

        public range(): TreeNodeType {
            return new TreeNodeType(TreeNodeType.RANGE.toString());
        }
    }
}