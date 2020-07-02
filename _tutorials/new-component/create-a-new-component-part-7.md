---
title: Create A New Origami Component - Part 7 Documentation
description: A step-by-step tutorial which teaches you how to build and deploy a new Origami component.
cta: Learn how to create an Origami component
collection_listing_display: false

---

# {{page.title}}

In part seven we will add documentation to our component. With good documentation we can save people time and frustration by making our component as easy to use as possible. Thorough documentation will also help future contributors to our new component.

## Tone & language

## How Components Are Documented
- @todo remember to mention the ways we have already documented our component, for example with demos and descriptions

## SassDoc

## JSDoc

## Readme
- @todo remember to include migration.md




## @todo: put this stashed content somewhere

### bower.json and package.json

[Bower](https://bower.io/) is a package manager used to install Origami component dependencies. The `bower.json` file lists the components dependencies, and points to the main Sass and JavaScript files of the component. One benefit of using Bower is it ensures a flat dependency tree, so two versions of the same component are not install at once.

Although Origami components use Bower to install dependencies, developer dependencies may be installed using the [NPM](https://www.npmjs.com/) package manager, as seen in `package.json`. Rules for package management are defined in the [package management section of the specification](https://origami.ft.com/spec/v1/components/#package-management).

Although Origami components are authored using Bower, components are published to NPM so projects which use Origami may choose to use NPM over Bower ([but we still recommended Bower for now](https://origami.ft.com/docs/tutorials/npm/)). We'll discuss how components are published to NPM later.
