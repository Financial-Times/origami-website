---
title: Create A New Origami Component - Part 8 Component Lifecycle
description: A step-by-step tutorial which teaches you how to build and deploy a new Origami component.
cta: Learn how to create an Origami component
collection_listing_display: false

---

# {{page.title}}

In part eight we will learn how to publish our component to the Origami registry 🎉, and discuss the lifecycle of a published component.


## @todo: put this stashed content somewhere

### bower.json and package.json

[Bower](https://bower.io/) is a package manager used to install Origami component dependencies. The `bower.json` file lists the components dependencies, and points to the main Sass and JavaScript files of the component. One benefit of using Bower is it ensures a flat dependency tree, so two versions of the same component are not install at once.

Although Origami components use Bower to install dependencies, developer dependencies may be installed using the [NPM](https://www.npmjs.com/) package manager, as seen in `package.json`. Rules for package management are defined in the [package management section of the specification](https://origami.ft.com/spec/v1/components/#package-management).

Although Origami components are authored using Bower, components are published to NPM so projects which use Origami may choose to use NPM over Bower ([but we still recommended Bower for now](https://origami.ft.com/docs/tutorials/npm/)). We'll discuss how components are published to NPM later.

@todo add a table of contents
@todo check the intro and outro of each part flows
@todo setout expectations of prior knowledge and check they are correct
@todo add percy test note
