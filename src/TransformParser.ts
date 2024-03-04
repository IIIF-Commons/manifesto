import {
    Transform,
    TranslateTransform,
    RotateTransform,
    ScaleTransform
} from "./internal";


export  class TransformParser {
    static BuildFromJson( jsonld: any ): Transform {
        if (jsonld.type === "TranslateTransform")
            return new TranslateTransform(jsonld);
        else if (jsonld.type === "RotateTransform")
            return new RotateTransform(jsonld);
        else if (jsonld.type === "ScaleTransform")
            return new ScaleTransform(jsonld);
        else
            throw new Error("Unknown transform type " + jsonld.type);
    }
}
