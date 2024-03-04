import {
  SpecificResource,
  AnnotationBody,
  Transform,
  TranslateTransform
} from "./internal";


/**
    This (subclass/implementation) of SpecificResource
    satisfies requirements of the body of a 3D annotation
    
    
*/
export class SpecificResourceForBody extends SpecificResource  {

  
  getSource() : AnnotationBody 
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
  
  getTransform() : Transform[]
  {
    return [ new TranslateTransform() ];
  }

  getSelector() : undefined
  {
    return undefined;
  }

}


  
