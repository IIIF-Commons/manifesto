# manifesto

[![Build Status](https://github.com/IIIF-Commons/manifesto/actions/workflows/build-test.yml/badge.svg?branch=main)](https://github.com/IIIF-Commons/manifesto/actions/workflows/build-test.yml)

IIIF Presentation API client and server utility library.

    npm install manifesto.js --save

> [!NOTE]
> 3D extensions to the manifesto.js library are under development in a fork [IIIF-Commons/manifesto-3d](https://github.com/IIIF-Commons/manifesto-3d).
> This development is being performed in parallel with development of 3D extensions to the IIIF APIs documented in [IIIF/3d](https://github.com/IIIF/3d).


## Getting Started

### Documentation

https://iiif-commons.github.io/manifesto/

### Developer Setup

    git clone https://github.com/iiif-commons/manifesto.git
    npm install
    npm build
    npm test

### Publishing Package

First make sure the main branch represents the state you want to publish (e.g. merge the dev branch into it when ready).

Then run these commands:

    git checkout main
    npm version patch
    npm run docs
    git add .
    git commit -m "Release v1.2.3"
    git tag v1.2.3
    git push origin main v1.2.3

When complete, don't forget to merge the main branch back into the dev branch to prepare the next development cycle.
