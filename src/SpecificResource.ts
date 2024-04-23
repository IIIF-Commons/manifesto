import {
  IManifestoOptions,
  ManifestResource,
  AnnotationBody,
  AnnotationBodyParser,
  Transform,
  TransformParser,
  PointSelector
} from "./internal";


/**
    Developer note: This implementation does not strictly adhere
    to the description of SpecificResource in the Web Annotation Model
    document https://www.w3.org/TR/annotation-model/
    section 4 : https://www.w3.org/TR/annotation-model/#specific-resources
    
    In particular, this class is abstract and the 3D subclasses 
    will have distinct function signatures
*/
export class SpecificResource extends ManifestResource  {

  
  isSpecificResource : boolean;

  constructor(jsonld: any, options?: IManifestoOptions) {
    super(jsonld, options);
    this.isSpecificResource = true;    
  };
  
  getSource() : object | AnnotationBody 
  {
  	var raw =  this.getPropertyAsObject("source");
  	if (raw.isIRI) return raw;
  	
  	/*
  	    this logic gets a little convoluted, because we have to preserve
  	    the cases where the raw json is an array for the sources of a
  	    SpecificResource applied to an annotation body, while for a target
  	    of an Annotation we just want a single object
  	*/
  	// case of a source of a SpecificResource which is an Annotation target
  	if (raw){
  	    var containerTypes = ["Scene", "Canvas"];
  	    let singleItem = ([].concat(raw))[0];
  	    if (containerTypes.includes(singleItem["type"]))
  	        return singleItem;
  	}
  	if (raw)
  	{
  	    var item = ([].concat(raw))[0];
  	    if (item)
  	    {
  	        return AnnotationBodyParser.BuildFromJson(item, this.options );
  	    }
  	}
  	throw new Error("cannot resolve Source " + JSON.stringify(raw));
  }
  
  getSelector() : PointSelector | null
  {
  	const raw =  this.getProperty("selector");  
  	if (raw){
        var item = ([].concat(raw))[0];
    
        if (item)
        {
            if (item["type"] === "PointSelector") return new PointSelector(item);
        }
        throw new Error("unable to resolve SpecificResource selector " + JSON.stringify(this.__jsonld));   
  	}  	
    return null; 	
  };
  get Selector() : PointSelector | null {return this.getSelector();}

  getTransform() : Transform[]
  {
    var retVal: Transform[] = [];
    var transformItems = this.getProperty("transform");
    for (var i = 0; i < transformItems.length; ++i)
    {
        var transformItem = transformItems[i];
        retVal.push( TransformParser.BuildFromJson(transformItem));
    }
    return retVal;
  };
  
  get Transform() : Transform[] { return this.getTransform();}

}

