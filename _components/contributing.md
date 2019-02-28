---
title: Contributing
description: Guidelines on how Origami users can help us improve our components and services.
cta: Learn how you can help

# Navigation config
nav_display: true
nav_label: Contributing
nav_order: 30
---

# {{ page.title }}

Since Origami is largely open source, we welcome contributions from all of our users. There are a number of ways that you can contribute, and we provide tooling and processes to help you do that.

## Creating new components

The <a href="https://registry.origami.ft.com/components/"   >Origami registry</a> houses components that the Origami team maintains, as well as components that other teams are responsible for.

### Make a proposal
For the Origami team to oversee a component's maintenance, a proposal needs to be made.  
You can find information about that process in the <a href="https://github.com/Financial-Times/origami-proposals/blob/master/.github/CONTRIBUTING.md"   >origami-proposals</a> project board, where all proposals are logged.

After the team have reviewed and accepted the proposal, according to the project guidelines, we will take responsibility for this component and help build and maintain it.

### Build an independent component
If would like to create a component that you don't expect the team to maintain, such as an experimental or product-specific component, there are minimum requirements that need to be adhered to. These requirements allow any component to be picked up by the registry and ensure consistency across all components' behaviour.

You can use the <a href="https://www.npmjs.com/package/origami-build-tools"   >Origami Build Tools</a> for this, as it will provide a boilerplate with those requirements.

```
npm i -g origami-build-tools
```
The alias for this library is `obt`.

Choose a sufficiently descriptive name for your component, and prefix it with `-o`.

Once you've done that, run:

```
obt init o-new-component
```
<aside>The reasoning behind the folder structure and requirements is explained in detail in our <a href="/spec/v1/components" class="o-typography-link">Specification</a></aside>

`obt init` will generate a new folder structure that meet the aforementioned requirements with the component name you've chosen, and will generate <abbr title="JavaScript">JS</abbr> and <abbr title="Syntactically Awesome Stylesheets">SASS</abbr> files with code bases that imitate other components.


## Updating existing components

If there is a new feature, a bug fix or anything else missing from a component that you might need, you can:

- open an issue on the components' repository
- make the change the component yourself and open a PR

### Opening an issue

Issues are important for Origami, as they provide a place for us to track discussions about changes to components. They allow us to reference past discussions and inform future decisions, and help to stop us from talking about the same thing multiple times.

If there is a change you would like to see, we appreciate a detailed description of the problem and your reasoning. Our components have issue templates that help us get to the root of the problem, but feel free to be liberal in your explanations and examples when opening a new issue.

### Working on a component

If you've chosen to make changes to the component, you'll need the [Origami Build Tools](#build-an-independent-component). In addition to building the scaffolding for a component, these command-line tools enable us to install dependencies, build demos locally, test our work and more.

We provide details on what commands to use for `obt` in its <a href="https://github.com/Financial-Times/origami-build-tools#readme"   >documentation</a>

When everything is right, open a <abbr title="Pull request">PR</abbr> with your changes to the component.

We appreciate details about your changes and screenshots to illustrate them, where relevant. Make sure to request a review from `Financial-Times/origami-core`, which will notify all members of the Origami team, and we'll take a look at it!
