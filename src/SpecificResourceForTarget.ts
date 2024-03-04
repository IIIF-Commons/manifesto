import {
  SpecificResource,
  PointSelector
} from "./internal";


/**
    This (subclass/implementation) of SpecificResource
    satisfies requirements to the target of a 3D annotation
    
    It will have a PointSelector as a selector property
    and a string (the URI of a Scene ) as its source
*/
export class SpecificResourceForTarget extends SpecificResource  {

  /*
  options: IManifestoOptions;
  
  isSpecificResource : boolean = true;

  constructor(jsonld: any, options?: IManifestoOptions) {
    super(jsonld);
    this.options = <IManifestoOptions>options;
  }
  */
  
  getSource() : string 
  {
  	const raw =  this.getProperty("source");
  	if (raw)
  	{
  	    var item = ([].concat(raw))[0];
  	    if (item)
  	    {
  	        if (typeof(item) === "string")  return item;
  	        else
  	        {
  	            const id = item["id"];
  	            if (typeof(id) === "string") return id;
  	        } 
  	    }
  	}
  	throw new Error("cannot resolve Source " + JSON.stringify(raw));
  }
  
  /**
  Developer note: Not allowing the getSelector to be undefined
  */
  getSelector() : PointSelector
  {
  	const raw =  this.getProperty("selector");  
  	if (raw){
        var item = ([].concat(raw))[0];
    
        if (item)
        {
            if (item["type"] === "PointSelector") return new PointSelector(item);
        }
            
  	}  	
    throw new Error("unable to resolve SpecificResource selector " + JSON.stringify(this.__jsonld));  	
  }  
}


  
