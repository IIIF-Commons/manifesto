import {
  IManifestoOptions,
  JSONLDResource,
  PointSelector
} from "./internal";


export class SpecificResource extends JSONLDResource  {

  options: IManifestoOptions;
  
  isSpecificResource : boolean = true;

  constructor(jsonld: any, options?: IManifestoOptions) {
    super(jsonld);
    this.options = <IManifestoOptions>options;
  }
  
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
  
  getSelector() : PointSelector 
  {
  	const raw =  this.getProperty("selector");  
  	if (raw){
        var item = ([].concat(raw))[0];
    
        if (item)
        {
            if (item["type"] === "PointSelector") return new PointSelector(item);
            else
            {
                throw new Error("unable to resolve SpecificResource selector " + JSON.stringify(item));
            }
        }
  	}
  	throw new Error("unable to resolve SpecificResource raw selector " + JSON.stringify(raw));
  	
  }
  
}