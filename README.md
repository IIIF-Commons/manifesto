# manifesto

Client and server utility library to support draft 3D extensions to to the IIIF Presentation API client and server utility library.

Forked from [IIIF-Commons/manifesto](https://github.com/IIIF-Commons/manifesto).

Goal of implementing the [Draft API](https://github.com/IIIF/3d/blob/main/temp-draft-4.md) under development by the [IIIF 3D Technical Study Group](https://github.com/IIIF/3d/).


### Documentation

[Manifesto.js](https://vincentmarchetti.github.io/manifesto/)

### Loading through package manager

This included in package.json

    "dependencies": {
    "manifesto.js": "IIIF-Commons/manifesto#draft3dapi",
    },
    
will install manifesto modules into node_modules.

### ChangeLog

From start point of the version distributed  from  [JulieWinchester/manifesto](https://github.com/JulieWinchester/manifesto/tree/3dtsg-dev-dist)

#### To package.json version 4.3.0-draft3dapi.0.1.0  
distributed from [vincentmarchetti/manifesto#3dtsg-main]() there were these changes:

1. This test is no longer useful for the Target of an Annotation:

        if ( typeof(target) === "string" ){
            // handle case where target is a Scene
        }
    
    Draft manifest [ 3_lights/direction_light_transform ]( https://github.com/IIIF/3d/blob/main/manifests/3_lights/direction_light_transform_rotate.json ) uses two ways of encoding the value of a target property for an Annotation: with a json string value of the IRI, or with an object with `id` property of the IRI for the  Scene. To avoid exponential expansion of if-else code when combined with target property which can also  be `SpecificResource` resources, the parsing code was changed so tha the value returned from `getTarget()` is always an object.
    
    Since the Target property will always be an object referencing a `Scene`, or a `SpecificResource` whose `source` property is a `Scene`, the code for handling either would be
    
        if (target.isSpecificResource){
            // handle a SpecificResource, with  selector property
            // and whose source property is the Scene
        }
        else{
            // handle a Scene directly
        }
        
2. Annotation.getBody3D() is deprecated.

    The `Annotation.getBody()` from the Presentation 3 code has been extended to support the resources that can be included in a 3d Annotation body property. An important difference is that the `getBody()` function  returns an array of objects, while the `getBody3D()` returns a single object. The deprecated function `getBody3D()` should be replaced with `getBody()[0]`

#### To package.json version 4.3.0-draft3dapi.0.2.0

1. Fixed a bug that occurred in determining the 'source' property of a SpecificResource resource that is the "target" property of an Annotation. This bug escaped detection previously because in the 3D case this 'source' property has always been a Scene resource, and the value is not needed for visualization. 

