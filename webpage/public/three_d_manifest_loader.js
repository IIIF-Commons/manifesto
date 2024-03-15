// AnnotationsFromManifest is a generator function
// as such, the return value from this function
// can be used in a for( var .. of AnnotationsFromManifest) construction
// where the yielded variable of instances of Annotation (manifesto library class)
//
// manifest is a Manifest instance such as defined in the manifesto library
function* AnnotationsFromManifest( manifest )
{
	for (const seq of manifest.getSequences())
	{
		const scene = seq.getScenes()[0];
		for (const anno of scene.getContent() ) yield anno;
	}
}

// AddAnnotationToScenegraph
// creates the X3D nodes appropriate to place the body of the annotation
// (as an X3D Inline node ) into the DOM tree, as a parent of a DOM element
// with the id value given (as a string) in the container argument
// If the annotation target resource is a SpecificResource with PointSelector,
// then the Inline node will be enclodes in an X3D Transform node
function AddAnnotationToScenegraph(anno, annotation_container)
{
	var inlineElement = document.createElement('inline');
	var target = anno.getTarget();
	var body = anno.getBody3D();
	
	var wrappedElement = inlineElement;
	
	if (body.isSpecificResource)
	{
	    var source = body.getSource();
	    if (source.isModel)
	        inlineElement.setAttribute('url', source.id);
	    else
	        throw new Error("trying to inline a non-model " + source);
	    
	    var transforms = body.getTransform();
	    for (var i = 0; i < transforms.length;++i){
	        var transform = transforms[i];
	        var transformNode=document.createElement('transform');
	        if (transform.isTranslateTransform ){
	            var tdata = transform.getTranslation();
	            var translationString = `${tdata.x} ${tdata.y} ${tdata.z}`;
	            transformNode.setAttribute("translation", translationString);
	        }
	        else if (transform.isScaleTransform ){
	            var sdata = transform.getScale();
	            var scaleString = `${sdata.x} ${sdata.y} ${sdata.z}`;
	            transformNode.setAttribute("scale", scaleString);
	        }
	        else if (transform.isRotateTransform ){
	            // this procedure for determining the rotationAxis
	            // is intended to only work when only component is non-zero
	            var attributes=["x","y","z"];
	            var nonZeroFound = false;
	            var rotationComponents = [0.0,0.0,0.0,0.0];
	            var rotData = transform.getRotation();
	            
	            for (var k = 0; k < 3; ++k){
	                var c = rotData[attributes[k]];
	                if (c != 0.0){
	                    if (nonZeroFound){
	                        throw new Error("rotation is non zero along multiple axes");
	                    }
	                    else{
	                        nonZeroFound = true;
	                    }
	                    rotationComponents[i] = 1.0;
	                    rotationComponents[3] = c * 1.745329e-2; // convert to radians for X3D
	                }	                
	            }
	            rotationString = rotationComponents.join(' ');
	            transformNode.setAttribute("rotation", rotationString);
	        }
	        transformNode.appendChild(wrappedElement);
	        wrappedElement = transformNode;
	    }
	}
	else{
	    if (! body.isModel )
	        throw new Error("trying to inline a non-model " + body);
	    inlineElement.setAttribute('url', body.id);
	}
	
	if (target.isSpecificResource && target.getSelector().isPointSelector )
	{
		
		var sel = target.getSelector();
		
		var loc = target.getSelector().getLocation();
		
		var outerElement = document.createElement('transform');
		// dev note : following expression uses javascript template literal
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting
		var positionString = `${loc.x} ${loc.y} ${loc.z}`
		
		outerElement.setAttribute("translation", positionString)
		outerElement.appendChild(wrappedElement);
		wrappedElement = outerElement
	}
	

    annotation_container.appendChild(wrappedElement);
    
}

function LoadManifest(manifest_url, annotation_container, label_container)
{
    
    manifesto.loadManifest(manifest_url).then( (manifest_json) => 
	{
    	const manifest = manifesto.parseManifest(manifest_json);
    	var label = manifest.getLabel().getValue("en");
    	console.log("loaded manifest " + label);
    	
    	
    	var scene = manifest.getSequences()[0].getScenes()[0];
    	var bgColor = scene.getBackgroundColor();
    	if (bgColor){
    	    var rgb = [
    	        Math.max(0.0,Math.min(1.0, bgColor.red/255)),
    	        Math.max(0.0,Math.min(1.0, bgColor.green/255)),
    	        Math.max(0.0,Math.min(1.0, bgColor.blue/255)),
    	    ].join(" ");
    	    console.log("rgb color value " + rgb);
    	    var x3d_background = document.getElementById("x3d-background");
    	    if (x3d_background)
    	        x3d_background.setAttribute("skyColor",rgb);
    	}
    	for (var anno of AnnotationsFromManifest(manifest))
    	{
    		AddAnnotationToScenegraph(anno, annotation_container);
    	}
    	//FitView();
    	
    	console.debug(annotation_container.innerHTML);
    	
    	label_container.innerText=label;
	}).catch( (error) => { console.warn("manifesto error: " + error)});
}

function SetAxesVisibility( isVisible )
{   
    var choice = (isVisible)?0:-1;
    var axes_switch_node = document.getElementById("triad-switch-node");
    if (axes_switch_node){
        console.log("setting switch choice to " + choice);
        axes_switch_node.setAttribute('whichChoice', choice);
    }    
}