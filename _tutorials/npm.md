---
title: Origami via npm
description: A guide on how to use Origami via npm.
cta: Learn how to Origami via npm
---

# {{page.title}}


If migrating from Bower to npm, [please refer to our migration guide](/docs/tutorials/bower-to-npm/).

## How to avoid multiple versions of Origami in the dependency tree

Use npm v7 and Origami specification version 2.0 components.

## How to get Origami Sass to work

To get the Sass compiler to work we will need to configure the `includePaths` of the compiler to look in `node_modules`.

This can usually be done via the `.sassrc` file, like below:
```json
{
	"includePaths": [
        "node_modules"
    ]
}
```
