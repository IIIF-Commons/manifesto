import {
  SpecificResource,
  AnnotationBody,
  Transform,
  TransformParser
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
  	        return new AnnotationBody(item);
  	    }
  	}
  	throw new Error("cannot resolve Source " + JSON.stringify(raw));
  }
  
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
  }

  getSelector() : undefined
  {
    return undefined;
  }

}


  
