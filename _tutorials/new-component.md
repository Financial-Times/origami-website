---
title: Create A New Origami Component
description: A step-by-step tutorial which teaches you how to build and deploy a new Origami component.
cta: Learn how to create an Origami component

---

# {{page.title}}

Usually the Origami team will own an Origami component which is used by multiple teams or groups, but anybody can create and share an Origami component.

In this tutorial we'll build and deploy an Origami component, which will be visible in the [Origami Registry](https://registry.origami.ft.com/components).

Before you get started, it's a good idea to discuss your new component with the Origami team first. The team will be able to make sure there's not an existing component or [component proposal](https://github.com/Financial-Times/origami#propose-a-new-component) that fulfils the same purpose, and will be available to answer any questions.

## The Origami Specification

All Origami components **must** meet the requirements defined in the [Origami Component Specification](https://origami.ft.com/spec/v1/components/). The specification covers folder structure, code standards, documentation and more. We'll refer to this document throughout this tutorial.

## Build Tools

Origami components are developed using the [Origami Build Tools](https://github.com/Financial-Times/origami-build-tools) (`obt`) command line interface. To work on our component, install Origami Build Tools (`obt`) on your machine:

```
npm install -g origami-build-tools
```

_This requires Node and npm, see the [Origami Build Tools readme](https://github.com/Financial-Times/origami-build-tools#installation) for more information._

## Boilerplate

To help us get started we can use the [Origami Build Tools `init` command](https://github.com/Financial-Times/origami-build-tools#init). The `init` command will ask a number of questions to determine what kind of component we're building. It will create a basic component for us to build on, optionally including boilerplate Sass and JavaScript. The generated component will also include an [origami.json manifest](https://origami.ft.com/spec/v1/manifest/) file at the root of our component directory, that is responsible for describing various aspects of our new component.

Before we run `obt init`, let's discuss some of those questions.

### Component Name

The first thing we are asked is to decide a component name. Usually Origami components start with `o-`, and only contain lowercase letters or hyphens. See the [component naming convention](https://origami.ft.com/spec/v1/components/#naming-conventions) for more details.

### Component Category

Origami components are categorised, and different rules of the specification may apply to different categories. Examples of categories include `utilities`, `components`, and `layouts`. See the full list and description in the [component category specification](https://origami.ft.com/spec/v1/manifest/#origamicategory). For this example we will use the most common `components` category.

### Supported Brands

Component brands facilitate [component customisation](https://origami.ft.com/spec/v1/sass/#customisation). Brands change the appearance of component elements globally, e.g. change the appearance of all “primary” buttons, including where they are used by other components. Brands include `master` (think, ft.com pink), `internal` for internal tools and products, and `whitelabel` for a striped-back un-opinionated style. Origami components may support one or more brands. We'll discuss brands more later, for now select the `master` and `internal` brand when prompted by `obt init`.

### Support Status

All Origami components have a support status. For example a `maintained` component means that "[the component is] not actively developed but reproducible bugs will be fixed promptly and work done where necessary to maintain compatibility with platforms and other projects"; an `experimental` component means "the [component] is not ready for production use". For a full list a support statuses and their meaning see the [support status section of the specification](https://origami.ft.com/spec/v1/manifest/#supportstatus). It is sometimes a good idea to release a new component as `experimental` for a trial period to gather feedback from users, so select `experimental` for now.

As well as a support status, the `obt init` command will ask for a support email address and slack channel. This will help identify your team as owners of the component. When the component is published a message will display in the component registry letting potential users know that support is not guaranteed by the Origami team, and that they should contact your team before using the component.

### JavaScript And Sass

When prompted, select that you would like the component to include JavaScript and Sass for the purposes of this tutorial. We will use the code it generates as a base to discuss building an Origami component. You may delete the Sass or JavaScript later, if the component you are working on does not need it.

### Other Questions

This tutorial won't expand on other questions asked by the `obt init` command, like what the component description and keywords are. Please feel free to contact the Origami team if you have any questions during this step.

### Output

After running the `obt init` command and answering the prompts you should see a directory which contains component boilerplate (commonly shared component code we can build on top of).

<figure>
	<img alt="" src="/assets/images/tutorial-new-component/example-init-output.png" />
	<figcaption class="o-typography-caption">
        Example output from the `obt init` command at the time of writing. It shows the questions asked and example responses, as discussed previously.
	</figcaption>
</figure>

The structure of our component now looks something like this. In the next section we will discuss what is in each directory.

```
o-example
├── .github
│   ├── CODEOWNERS
│   ├── ISSUE_TEMPLATE.md
│   └── workflows
│       ├── add-new-issues-and-pull-requests-to-origami-project-board.yml
│       ├── automatic-tag-and-release.yml
│       ├── release-origami-component.yml
│       ├── sync-repo-labels.yml
│       └── test-origami-component.yml
├── .gitignore
├── README.md
├── bower.json
├── package.json
├── demos
│   └── src
│       ├── demo.js
│       ├── demo.mustache
│       ├── demo.scss
│       └── pa11y.mustache
├── main.js
├── main.scss
├── origami.json
├── src
│   ├── js
│   │   └── o-example.js
│   └── scss
│       ├── _brand.scss
│       └── _variables.scss
└── test
    ├── js
    │   ├── helpers
    │   │   └── fixtures.js
    │   └── o-example.test.js
    └── scss
        ├── _main.test.scss
        └── index.test.scss
```

## Structure

Now we have the code for a basic Origami component we can discuss the purpose of some key files and directories.

### .github

All Origami components reside in a Git repository and are stored remotely in one of our [github.com](https://github.com/) organisations, for example the [Financial-Times](https://github.com/Financial-Times/) organisation. There are more details about [source control in the origami specification](https://origami.ft.com/spec/v1/components/#source-control).

At the time of writing, the `.github` directory itself is not part of the [file structure specification](https://origami.ft.com/spec/v1/components/#files-and-folder-structure). If we deleted `.github` the component would still be an Origami component. But this directory gives us some nice features:
- `ISSUE_TEMPLATE.md`: The contents of this file are used to provide a [template when opening a new Github issue](https://help.github.com/en/github/building-a-strong-community/about-issue-and-pull-request-templates). It helps users report bugs or provide feedback by prompting for useful information.
- `CODEOWNERS`: defines individuals or teams to automatically assign to new Github issues or pull requests ([see the Github code owners documentation](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/about-code-owners)).
- `workflows/*`: the workflows directory configures a number of [Github Actions](https://github.com/features/actions) which will automate component testing and release, set useful Github labels, and more. We'll look at some of these later.

### bower.json and package.json

[Bower](https://bower.io/) is a package manager used to install Origami component dependencies. The `bower.json` file lists the components dependencies, and points to the main Sass and JavaScript files of the component. One benefit of using Bower is it ensures a flat dependency tree, so two versions of the same component are not install at once.

Although Origami components use Bower to install dependencies, developer dependencies may be installed using the [NPM](https://www.npmjs.com/) package manager, as seen in `package.json`. Rules for package management are defined in the [package management section of the specification](https://origami.ft.com/spec/v1/components/#package-management).

Although Origami components are authored using Bower, components are published to NPM so projects which use Origami may choose to use NPM over Bower ([but we still recommended Bower for now](https://origami.ft.com/docs/tutorials/npm/)). We'll discuss how components are published to NPM later.

### src



### demos

The demos directory holds code for the component previews which are displayed in [the origami registry](https://registry.origami.ft.com/). Component demos are also used to preview and develop a component locally. The templates for demos are written in [mustache](https://mustache.github.io/), and demos may include their own Sass and JavaScript. Note that demo code is only used for the component previews, and not by projects which depend on the component. There is a [demo section in the specification](https://origami.ft.com/spec/v1/components/#demos) with more details, but we will discuss demos in more detail later.
