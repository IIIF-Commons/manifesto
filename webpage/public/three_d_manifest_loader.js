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
	var body = anno.getBody()[0];
	if (Array.isArray(body)) body=body[0];
	
	var outerElement = undefined;
	if (target.IsSpecificResource && target.getSelector().IsPointSelector )
	{
		
		var sel = target.getSelector();
		
		var loc = target.getSelector().getLocation();
		
		outerElement = document.createElement('transform');
		// dev note : following expression uses javascript template literal
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting
		var positionString = `${loc.x} ${loc.y} ${loc.z}`
		
		outerElement.setAttribute("translation", positionString)
		outerElement.appendChild(inlineElement);
	}
	else
		outerElement = inlineElement;

    annotation_container.appendChild(outerElement);
    inlineElement.setAttribute('url', body.id);
}

function LoadManifest(manifest_url, annotation_container, label_container)
{
    
    manifesto.loadManifest(manifest_url).then( (manifest_json) => 
	{
    	const manifest = manifesto.parseManifest(manifest_json);
    	var label = manifest.getLabel().getValue("en");
    	console.log("loaded manifest " + label);
    	
    	for (var anno of AnnotationsFromManifest(manifest))
    	{
    		AddAnnotationToScenegraph(anno, annotation_container);
    	}
    	//FitView();
    	
    	console.debug(annotation_container.innerHTML);
    	
    	label_container.innerText=label;
	}).catch( (error) => { console.warn("manifesto error: " + error)});
}
