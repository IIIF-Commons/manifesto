README.md is a mess, need to start from manifesto's and re-do!

# manifesto

[![Build Status](https://github.com/IIIF-Commons/manifesto/actions/workflows/build-test.yml/badge.svg?branch=main)](https://github.com/IIIF-Commons/manifesto/actions/workflows/build-test.yml)

Forked from [IIIF-Commons/manifesto](https://github.com/IIIF-Commons/manifesto).

Goal of implementing the [Draft API](https://github.com/IIIF/3d/blob/main/temp-draft-4.md) under development by the [IIIF 3D Technical Study Group](https://github.com/IIIF/3d/).

> [!NOTE]
> 3D extensions to the manifesto.js library are under development in a fork [IIIF-Commons/manifesto-3d](https://github.com/IIIF-Commons/manifesto-3d).
> This development is being performed in parallel with development of 3D extensions to the IIIF APIs documented in [IIIF/3d](https://github.com/IIIF/3d).


## Getting Started

### Documentation

[Manifesto-3D.js](https://iiif-commons.github.io/manifesto-3d/)

### Loading through package manager

    npm install manifesto-3d.js --save

### Demonstration Projects
[Example manifests](https://github.com/IIIF/3d/tree/main/manifests) conforming to the [Draft API](https://github.com/IIIF/3d/blob/main/temp-draft-4.md) .

[Prototype Viewers](https://github.com/IIIF/3d/issues/28) rendering the example manifests.
- [Three-JS based viewer](https://codesandbox.io/p/github/JulieWinchester/iiif-threejs-demo)
- [X3D/X3DOM based viewer](https://codesandbox.io/p/github/vincentmarchetti/iiif-x3dom-demo/main)
- [Smithsonian Voyager](https://codesandbox.io/p/sandbox/voyager-annotations-demo-forked-l83l6w)

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

#### To package.json version 4.3.0-draft3dapi.0.3.0

1. Added isSpecificResource and isAnnotationBody properties to the SpecificResource and AnnotationBody classes, in response to developer suggestion. (Slack, Apr 24 2024)

#### To package.json version 4.3.0-draft3dapi.0.4.0

1. Implemented Perspective Camera properties in the Camera class.

#### To package.json version 4.3.0-draft3dapi.0.5.0

1. Implement lookAt property of Camera class and of Light class.
