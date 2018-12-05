---
title: Contributing

# Navigation config
nav_display: true
nav_label: Contributing
nav_order: 30
---

# {{ page.title }}

Since Origami is entirely open source, we welcome contributions from all of our users. There are a number of ways that you can contribute, and we providing tooling and processes to help you in through that process.

## Updating existing components

If there is a new feature, a bug fix or anything else missing from a component that you might need, you can:

- open an issue on the components' repository
- make the change the component yourself and make a PR

If you've chosen to work on the component, we maintain [Origami-Build-Tools](#TODO). These command-line tools enable us to install dependencies, build demos locally and test our work, among a few other tasks. All origami components use this tool, and you can develop them with following steps:

```
npm i -g origami-build-tools
```
The alias for this library is `obt`.

In any component's root directory, you'll need to install its dependencies:
```
obt install
```

If you'd like to have the demos of the component rebuild themselves as you change your work, run:

```
obt demo --runServer --watch
```

Generally, the demos will be available on `localhost:8999/demos/local`. Visit that URL to see them, and start working on your changes!

When you are happy with the work you've done, check that you've used the correct syntax by running:

```
obt verify
```

And last but not least, make sure the tests are still passing:

```
obt test
```

When everything is right, open a PR with your changes on the components' repository. We appreciate details about your changes and screenshots to illustrate them, if relevant. Make sure to request a review from `origami-core`, and we'll review it!

<!--
## Creating new components

For the Origami team to oversee a components' maintenance, a new component needs to pass the following criteria:
- More than one product needs to d -->
