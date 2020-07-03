---
title: Create A New Origami Component - Part 8 Component Lifecycle
description: A step-by-step tutorial which teaches you how to build and deploy a new Origami component.
cta: Learn how to create an Origami component
collection_listing_display: false

---

# {{page.title}}

In part eight we will learn how to publish our component to the Origami registry 🎉, and discuss the lifecycle of a published component.

## Push To Github

The first step of publishing our component to the Origami Registry is to commit our work and push to a new Github repository under the [Financial-Times](https://github.com/Financial-Times/) organisation (or other [supported Github organisation](https://origami.ft.com/spec/v1/components/#source-control)). There is a [new Github repository tutorial](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-new-repository) which might be helpful if you have never created a remote Github repository before. Note Origami repositories are usually public and open-source unless there is a reason not to be (for example [o-fonts-assets](https://github.com/Financial-Times/o-fonts-assets/) is private due to our font license).

When your new component is pushed to Github [update access in the Github settings of your repository](https://docs.github.com/en/github/getting-started-with-github/access-permissions-on-github). Grant these teams the following permissions:
- `@origami-read-only`: **read** - required, for a team of helpful Origami bots
- `@origami-collaborators`: **write** - so engineers from other teams may contribute
- `@origami-core`: **admin** - so Origami team members can help to the fullest

Origami components uses a tool called Dependabot to automatically update developer dependencies. The Dependabot Github user `dependabot-preview` must be allowed to push to the default branch if there are Github branch protections enabled. See the Github tutorial on [how to allow Github users to push to protected branches](https://docs.github.com/en/github/administering-a-repository/enabling-branch-restrictions).

<figure>
	<img alt="" src="/assets/images/tutorial-new-component/hello-world-demo-19-github.png" />
	<figcaption class="o-typography-caption">
        The "dependabot-preview" bot user has access to push to the default, protected branch.
	</figcaption>
</figure>

## Github Actions

You may have noticed that the `obt init` command created a directory `.github`. It contains configuration for Github including `CODEOWNERS` which will automatically assign a Github team to review new pull requests, `ISSUE_TEMPLATE.md` which is used to direct contributors when opening new Github issues, and a nested directory `workflows` which contains configuration for Github Actions.

Origami components use Github Actions for a number of helpful functions including:
- synchronise [component labels](https://github.com/Financial-Times/origami-labels#labels) ([learn about Github labels](https://docs.github.com/en/github/managing-your-work-on-github/about-labels))
- run component tests when new commits are made to a pull request
- automatically add a [semver](https://semver.org/) git tag to release a component when a pull request with a [release label](https://github.com/Financial-Times/origami-labels#continuous-delivery-labels) is merged

To see these Github Actions in practise let's release our component

## @todo: put this stashed content somewhere

### bower.json and package.json

[Bower](https://bower.io/) is a package manager used to install Origami component dependencies. The `bower.json` file lists the components dependencies, and points to the main Sass and JavaScript files of the component. One benefit of using Bower is it ensures a flat dependency tree, so two versions of the same component are not install at once.

Although Origami components use Bower to install dependencies, developer dependencies may be installed using the [NPM](https://www.npmjs.com/) package manager, as seen in `package.json`. Rules for package management are defined in the [package management section of the specification](https://origami.ft.com/spec/v1/components/#package-management).

Although Origami components are authored using Bower, components are published to NPM so projects which use Origami may choose to use NPM over Bower ([but we still recommended Bower for now](https://origami.ft.com/docs/tutorials/npm/)). We'll discuss how components are published to NPM later.

@todo add a table of contents
@todo check the intro and outro of each part flows
@todo setout expectations of prior knowledge and check they are correct
@todo add percy test note
