---
title: Migrate from Bower to npm
description: An advanced tutorial which explains how to migrate from installing Origami components via Bower, to installing them via npm.
cta: Learn how to migrate to npm

# Redirect from legacy URLs
redirect_from:
  - /docs/tutorials/npm/
---

# {{page.title}}

Origami components may be installed using Bower or npm package managers, however npm is considered experimental. Before migrating to npm you may want to wait until new versions of components are released which drop bower support, in favour of npm only. [Origami components will be migrated to npm fully by Q3 2021](/blog/2021/01/18/deprecating-bower-and-origami-via-npm/).

## Current Benefits

- Tooling such as Dependabot/Renovate/Greenkeeper/Snyk will work for the Origami dependencies you have.
- Other tooling which by default only work with npm dependencies will now work without requiring any changes. I.E. Webpack.

## Current Drawbacks

- The Origami Team have not finalised how Origami components on npm should work, it is considered not stable and future major releases will change the interface of our npm packages.
- Need to use extra tooling to ensure multiple versions of Origami are not included in the dependency tree.
- Documentation for Origami assumes the Bower interface and not the npm interface. I.E. The package-names don't start with `@financial-times`.

_Note: These [drawbacks will be addressed with component updates by Q3 2021](/blog/2021/01/18/deprecating-bower-and-origami-via-npm/)._

## Migrating a project which uses Origami components from bower to npmjs

### TLDR
- package-names now begin with @financial-times.
- JavaScript imports now require @financial-times at the start
- Sass imports stay the same, they don't require @financial-times at the start
- Sass needs to have an "includePaths" which contains "node_modules/@financial-times" and not "bower_components"


### Replace bower.json

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

If you have anything left in your bower.json.dependencies, you should see if they exist on <a href="https://www.npmjs.com/" class="o-typography-link--external">npmjs</a> and use that version instead. Migrating a project becomes much simpler when there are no bower.json dependencies at all.

Run `npm install`, if it fails and says something similar to "code ETARGET No matching version found for @financial-times/example", it means that you would also need to update to the latest version of that component. This is because we have not published all the historical versions of Origami components onto <a href="https://www.npmjs.com/" class="o-typography-link--external">npmjs</a>.

Once you can run `npm install` and it completes a full installation, you can move on to updating the code in your project to use the <a href="https://www.npmjs.com/" class="o-typography-link--external">npmjs</a> version of Origami.

### Update JavaScript imports

Origami components on <a href="https://www.npmjs.com/" class="o-typography-link--external">npmjs</a> have their JavaScript code namespaced onto `@financial-times`. This means that in your code you will need to update all `require`/`import` calls to include this namespace.

E.G.
`import Layout from "o-layout";` would become `import Layout from "@financial-times/o-layout";`

If you are doing any `require`/`import` calls to files within the `src` folder, they would also need to be updated to use the `dist` folder instead.
E.G.
`import Layout from "o-layout/src/js/layout";` would become `import Layout from "@financial-times/o-layout/dist/js/layout";`

### Update Sass imports

If using Sass from Origami, you do not need to change the `@import` or `@include` however you will need to update the Sass-compiler's `includePaths` option to list `node_modules` and `node_modules/@financial-times`, instead of `bower_components`.

This can usually be done via the `.sassrc` file, like below:
```json
{
	"includePaths": [
        "node_modules",
        "node_modules/@financial-times"
    ]
}
```

### Avoid multiple versions of Origami in the dependency tree

There is a tool called [is-origami-flat](https://www.npmjs.com/package/is-origami-flat) which can be used to report about any Origami packages which are included with more than one version. E.G. Detecting that `@financial-times/o-table@6` and `@financial-times/o-table@7` are both in the dependency tree.

Below we will set up [is-origami-flat](https://www.npmjs.com/package/is-origami-flat) to fail a project which has multiple versions of Origami dependencies.

Here is how to use it with an npm/yarn/pnpm project:


1. Run the package `is-origami-flat` before `npm pack`/`npm publish`/`npm install` by adding a `prepare` script to the `package.json`.

``` json
{
    "prepare": "npx is-origami-flat"
}
```

## Troubleshooting

### npm errors with ETARGET error
This is due to the version of the package not being on npm, you will need to upgrade to the latest version of the package in order to use it via npm.

### Sass cannot build
In order for Sass to find the mixins etc for Origami, you will need to add `node_modules` and `node_modules/@financial-times` to the Sass 'includePaths'.
