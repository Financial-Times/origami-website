---
title: Origami via npm
description: A guide on how to use Origami via npm.
cta: Learn how to Origami via npm
---

# {{page.title}}


If migrating from Bower to npm, [please refer to our migration guide](https://origami.ft.com/docs/tutorials/bower-to-npm/).

## Benefits

- Tooling such as Dependabot/Renovate/Greenkeeper/Snyk will work for the Origami dependencies you have.

- Other tooling which by default only work with npm dependencies will now work without requiring any changes. I.E. Webpack.

## Drawbacks

- The Origami Team have not finalised how Origami components on npm should work, it is considered not stable and future major releases are likely to change the interface of our npm packages.

- Need to use extra tooling to ensure multiple versions of Origami are not included in the dependency tree.

- Documentation for Origami assumes the Bower interface and not the npm interface. I.E. The package-names don't start with `@financial-times`.


## How to avoid multiple versions of Origami in the dependency tree

There is a tool called [is-origami-flat](https://www.npmjs.com/package/is-origami-flat) which can be used to report about any Origami packages which are included with more than one version. E.G. Detecting that `@financial-times/o-table@6` and `@financial-times/o-table@7` are both in the dependency tree.

Below we will set up [is-origami-flat](https://www.npmjs.com/package/is-origami-flat) to fail a project which has multiple versions of Origami dependencies.

Here is how to use it with an npm/yarn/pnpm project:


1. Run the package `is-origami-flat` before `npm pack`/`npm publish`/`npm install` by adding a `prepare` script to the `package.json`.

``` json
{
    "prepare": "npx is-origami-flat"
}
```


## How to get Origami Sass to work

Currently Origami components on npm have the exact same Sass as their Bower counterparts. To get the Sass compiler to work we will need to configure the `includePaths` of the compiler to look in `node_modules` and `node_modules/@financial-times`.

This can usually be done via the `.sassrc` file, like below:
```json
{
	"includePaths": [
        "node_modules",
        "node_modules/@financial-times"
    ]
}
```
