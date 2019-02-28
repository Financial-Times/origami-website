---
title: Migrate From Bower To NPM
description: An advanced tutorial which explains how to migrate from installing Origami components via Bower, to installing them via npm.
cta: Learn how to migrate to npm
---

# {{page.title}}

## TLDR
- package-names now begin with @financial-times.
- JavaScript imports now require @financial-times at the start
- Sass imports stay the same, they don't require @financial-times at the start
- Sass needs to have an "includePaths" which contains "node_modules/@financial-times" and not "bower_components"

## Migrating a project which uses Origami components from bower to npmjs


Copy all Origami dependencies from bower.json.dependencies and place in package.json.dependencies and then prepend their names with @financial-times.

E.G.
*bower.json*
```json
{
  "name": "origami-registry-ui",
  "dependencies": {
    "o-autoinit": "^1.3.3",
    "o-buttons": "^5.11.1",
    "o-colors": "^4.2.4",
    "o-grid": "^4.3.8",
    "o-header-services": "^2.2.0",
    "o-fonts": "^3.0.4",
    "o-footer-services": "^2.0.1",
    "o-forms": "^5.3.0",
    "o-message": "^2.2.2",
    "o-syntax-highlight": "^1.2.0",
    "o-tabs": "^4.1.0",
    "o-typography": "^5.6.0",
    "o-normalise": "^1.6.2",
    "o-overlay": "^2.4.1",
    "o-table": "^7.0.1",
    "o-visual-effects": "^2.0.3",
    "o-loading": "^2.2.2"
  }
}
```
Becomes a *package.json* that looks like this
```json
{
  "name": "origami-registry-ui",
  "dependencies": {
    "@financial-times/o-autoinit": "^1.3.3",
    "@financial-times/o-buttons": "^5.11.1",
    "@financial-times/o-colors": "^4.2.4",
    "@financial-times/o-grid": "^4.3.8",
    "@financial-times/o-header-services": "^2.2.0",
    "@financial-times/o-fonts": "^3.0.4",
    "@financial-times/o-footer-services": "^2.0.1",
    "@financial-times/o-forms": "^5.3.0",
    "@financial-times/o-message": "^2.2.2",
    "@financial-times/o-syntax-highlight": "^1.2.0",
    "@financial-times/o-tabs": "^4.1.0",
    "@financial-times/o-typography": "^5.6.0",
    "@financial-times/o-normalise": "^1.6.2",
    "@financial-times/o-overlay": "^2.4.1",
    "@financial-times/o-table": "^7.0.1",
    "@financial-times/o-visual-effects": "^2.0.3",
    "@financial-times/o-loading": "^2.2.2"
  }
}
```

If you have anything left in your bower.json.dependencies, you should see if they exist on [npmjs](https://www.npmjs.com/) and use that version instead. Migrating a project becomes much simpler when there are no bower.json dependencies at all.

Run `npm install`, if it fails and says something similar to "code ETARGET No matching version found for @financial-times/example", it means that you would also need to update to the latest version of that component. This is because we have not published all the historical versions of Origami components onto [npmjs](https://www.npmjs.com/).

Once you can run `npm install` and it completes a full installation, you can move on to updating the code in your project to use the [npmjs](https://www.npmjs.com/) version of Origami.

Origami components on [npmjs](https://www.npmjs.com/) have their JavaScript code namespaced onto `@financial-times`. This means that in your code you will need to update all `require`/`import` calls to include this namespace.

E.G.
`const Layout = require("o-layout");` would become `import Layout from "@financial-times/o-layout";`

If you are doing any `require`/`import` calls to files within the `src` folder, they would also need to be updated to use the `dist` folder instead.
E.G.
`const Layout = require("o-layout/src/js/layout");` would become `import Layout from "@financial-times/o-layout/dist/js/layout";`

If using Sass from Origami, you do not need to change the `@import` or `@include` however you will need to update the Sass-compiler's IncludePath to have `node_modules/@financial-times` and not `bower_components`.

## Troubleshooting

### NPM errors with ETARGET error
This is due to the version of the package not being on npm, you will need to upgrade to the latest version of the package in order to use it via npm.

### Sass cannot build
In order for Sass to find the mixins etc for Origami, you will need to add 'node_modules/@financial-times' to the Sass 'includePaths'.
