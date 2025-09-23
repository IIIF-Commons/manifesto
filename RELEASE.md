# Release

To create a new release on NPM you need to create a [release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release) on Github and the [release.yml](.github/workflows/release.yml) action will then deploy a release on NPM. 

This requires NPM_TOKEN to be setup as a repository secret. This will update the package at:

https://www.npmjs.com/package/@iiif/3d-manifesto-dev

To update the version number in NPM you will also need to update the version number in [package.json](package.json).