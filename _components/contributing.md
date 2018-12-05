---
title: Contributing

# Navigation config
nav_display: true
nav_label: Contributing
nav_order: 30
---

# {{ page.title }}

Since Origami is entirely open source, we welcome contributions from all of our users. There are a number of ways that you can contribute, and we providing tooling and processes to help you do that.

## Creating new components

The Origami registry houses components that the Origami team maintains, as well as components that other teams are responsible for.

### Make a proposal
For the Origami team to oversee a components' maintenance, a proposal needs to be made. You can find information about that process in the [origami-proposals](#todo).
After the team has reviewed the proposal, and if it has been accepted, the team will take responsibility for this component and build it for you.

### Build an independent component
If would like to create a component that you don't expect the team to maintain, such as an experimental or product-specific component, you need to be aware of the minimum requirements. These requirements allow any component to be picked up by the registry, and you can the [Origami Build Tools](#TODO) provide a boilerplate with those requirements.

```
npm i -g origami-build-tools
```
The alias for this library is `obt`.

Choose a sufficiently descriptive name for your component, and prefix it with the product you are aiming to build it for (e.g. g for 'graphics'). `o-` prefixes are generally reserved for Origami-maintained components.

Once you've done that, run:

`obt init my-new-component`

`obt` will generate a new folder structure that meet the aforementioned requirements, and generate <abbr title="JavaScript">JS</abbr> and <abbr title="Syntactically Awesome Stylesheets">SASS</abbr> files with code bases that imitate other components' styles.

## Updating existing components

If there is a new feature, a bug fix or anything else missing from a component that you might need, you can:

- open an issue on the components' repository
- make the change the component yourself and make a PR

### Opening an issue

It is important to us to be able to track the discussions we have over changes that we do or do not make to our work, so that we can always reference our past selves for decisions our current selves are going to make.

If there is a change you would like to see, we appreciate a detailed description of the problem and your reasoning. Our components have issue templates that help us get to the root of the problem, so feel free to be liberal in your explanations and examples when opening a new issue.

### Working on a component

If you've chosen to work on the component, you'll need the [Origami Build Tools](#build-an-independent-component). In addition to building the scaffolding for a component, these command-line tools enable us to install dependencies, build demos locally and test our work, among a few other tasks. All Origami components use this tool. As long as you have [installed the tools](#build-an-independent-component) you can develop them with following steps:

In your chosen component's root directory, you'll need to install its dependencies:
```
obt install
```

If you'd like to have the demos of the component rebuild themselves as you change your work, run:

```
obt demo --runServer --watch
```

Generally, the demos will be available on `localhost:8999/demos/local`.  
Visit that URL to see them, and start working on your changes!

When you are happy with the work you've done, check that you've used the correct syntax by running:

```
obt verify
```

And last but not least, make sure the tests are still passing:

```
obt test
```

When everything is right, open a PR with your changes on the components' repository.

We appreciate details about your changes and screenshots to illustrate them, where relevant. Make sure to request a review from `origami-core`, which will notify all members of the Origami team, and we'll take a look at it!
