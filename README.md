# manifesto

[![Build Status](https://travis-ci.org/IIIF-Commons/manifesto.svg?branch=master)](https://travis-ci.org/IIIF-Commons/manifesto)

IIIF Presentation API client and server utility library.

    npm install manifesto.js --save

## Getting Started

### Documentation

https://iiif-commons.github.io/manifesto/

### Developer Setup

    git clone https://github.com/iiif-commons/manifesto.git
    npm install
    npm build
    npm test

### Publishing Package

    git checkout master
    npm version patch
    git add .
    git commit -m "Release v1.2.3"
    git tag v1.2.3
    git push origin master v1.2.3

### 3D extensions to manifesto
3D extensions to the manifesto.js library are under development in a fork [IIIF-Commons/manifesto-3d](https://github.com/IIIF-Commons/manifesto-3d).
This development is being performed in parallel with development of 3D extensions to the IIIF APIs documented in [IIIF/3d](https://github.com/IIIF/3d).