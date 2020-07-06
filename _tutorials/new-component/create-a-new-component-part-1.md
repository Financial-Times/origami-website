---
title: Create A New Origami Component
description: A step-by-step tutorial which teaches you how to build and deploy a new Origami component.
cta: Learn how to create an Origami component

---

# {{page.title}}

Usually the Origami team will own an Origami component which is used by multiple teams or groups, but anybody can create and share an Origami component.

In this tutorial we'll build an Origami component. Our example component will display a "hello world" message, be themed, and include a button which will count the number of times it was clicked. We'll also discuss how to document and publish an Origami component so it is visible in the [Origami Registry](https://registry.origami.ft.com/components).

Before you get started, it's a good idea to discuss your new component with the Origami team first. The team will be able to make sure there's not an existing component or [component proposal](https://github.com/Financial-Times/origami#propose-a-new-component) that fulfils the same purpose, and will be available to answer any questions.

In this tutorial we'll build an Origami component. Our example component will display a "hello world" message, be themed, and include a button which will count the number of times it was clicked. We'll also discuss how to document and publish an Origami component so it is visible in the [Origami Registry](https://registry.origami.ft.com/components).

Before you get started, it's a good idea to discuss your new component with the Origami team first. The team will be able to make sure there's not an existing component or [component proposal](https://github.com/Financial-Times/origami#propose-a-new-component) that fulfils the same purpose, and will be available to answer any questions.

## The Origami Specification

All Origami components **must** meet the requirements defined in the [Origami Component Specification](https://origami.ft.com/spec/v1/components/). The specification covers folder structure, code standards, documentation and more. We'll refer to this document throughout this tutorial.

<aside>
If this tutorial contradicts or misses anything required in the <a href="https://origami.ft.com/spec/v1/components/">Origami Component Specification</a>, the specification is correct and this tutorial is wrong. If you find a case like that please let the Origami team know so we can ensure this tutorial is always up to date.
</aside>

## Build Tools

Origami components are developed using the [Origami Build Tools](https://github.com/Financial-Times/origami-build-tools) (`obt`) command line interface. To work on our component, install Origami Build Tools (`obt`) on your machine:

<pre><code class="o-syntax-highlight--bash">npm install -g origami-build-tools</code></pre>

_This requires Node and npm, see the [Origami Build Tools readme](https://github.com/Financial-Times/origami-build-tools#installation) for more information._

## Boilerplate

To help us get started we can use the [Origami Build Tools `init` command](https://github.com/Financial-Times/origami-build-tools#init). The `init` command will ask a number of questions to determine what kind of component we're building. It will create a basic component for us to build on, optionally including boilerplate Sass and JavaScript. The generated component will also include an [origami.json manifest](https://origami.ft.com/spec/v1/manifest/) file at the root of our component directory, that is responsible for describing various aspects of our new component.

Before we run `obt init`, let's discuss some of those questions.

### Component Name

The first thing we are asked is to decide a component name. Usually Origami components start with `o-`, and only contain lowercase letters or hyphens. See the [component naming convention](https://origami.ft.com/spec/v1/components/#naming-conventions) for more details.

For this tutorial we will name our component `o-example`.

### Component Category

Origami components are categorised, and different rules of the specification may apply to different categories. Examples of categories include `utilities`, `components`, and `layouts`. See the full list and description in the [component category specification](https://origami.ft.com/spec/v1/manifest/#origamicategory). For this tutorial we will use the most common `components` category.

### Supported Brands

Component brands facilitate [component customisation](https://origami.ft.com/spec/v1/sass/#customisation). Brands change the appearance of component elements globally, e.g. change the appearance of all “primary” buttons, including where they are used by other components. Brands include `master` (think, ft.com pink), `internal` for internal tools and products, and `whitelabel` for a striped-back un-opinionated style. Origami components may support one or more brands. We'll discuss brands more later, for now select the `master`, `internal`, and `whitelabel` brand when prompted by `obt init`.

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

The structure of our component now looks something like this. In the next section we will start developing our component, and in the process discuss what is in each directory.

```
o-example
├── .eslintrc.js
├── .dependabot
│   └── config.yml
├── .github
│   ├── CODEOWNERS
│   ├── ISSUE_TEMPLATE.md
│   └── workflows
│       ├── add-new-issues-and-pull-requests-to-origami-project-board.yml
│       ├── automatic-tag-and-release.yml
│       ├── release-origami-component.yml
│       ├── sync-repo-labels.yml
│       ├── apply-labels.yml
│       ├── auto-approve.yml
│       └── test-origami-component.yml
├── .gitignore
├── .stylelintrc.js
├── README.md
├── bower.json
├── demos
│   └── src
│       ├── demo.js
│       ├── demo.mustache
│       ├── demo.scss
│       └── pa11y.mustache
├── main.js
├── main.scss
├── origami.json
├── package.json
├── src
│   ├── js
│   │   └── example.js
│   └── scss
│       ├── _brand.scss
│       └── _variables.scss
└── test
    ├── js
    │   ├── example.test.js
    │   └── helpers
    │       └── fixtures.js
    └── scss
        ├── _main.test.scss
        └── index.test.scss
```

## Source Control

All Origami components reside in a [git](https://git-scm.com/) repository with the same name as the component. It's required that component repositories are stored remotely in one of our [github.com](https://github.com/) organisations, for example the [Financial-Times](https://github.com/Financial-Times/) organisation. There are more details about [source control in the origami specification](https://origami.ft.com/spec/v1/components/#source-control).

Create a new git repository by running `git init`, and commit the boilerplate as an initial commit. For example:

<pre><code class="o-syntax-highlight--bash">git init
git add --all
git commit -m 'o-example component boilerplate'</code></pre>

You may then push this to your remote github.com repository, under the `Financial-Times` organisation or another [supported Financial Times organisation](https://origami.ft.com/spec/v1/components/#source-control).

_Note: we're assuming existing git knowledge here, so please feel free to contact the Origami team if you get stuck at any point._

You might have noticed a `.github` directory. At the time of writing, the `.github` directory itself is not part of the [file structure specification](https://origami.ft.com/spec/v1/components/#files-and-folder-structure). If we deleted `.github` the component would still be an Origami component. But this directory gives us some nice features including:
- `ISSUE_TEMPLATE.md`: The contents of this file are used to provide a [template when opening a new Github issue](https://help.github.com/en/github/building-a-strong-community/about-issue-and-pull-request-templates). It helps users report bugs or provide feedback by prompting for useful information.
- `CODEOWNERS`: defines individuals or teams to automatically assign to new Github issues or pull requests ([see the Github code owners documentation](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/about-code-owners)).
- `workflows/*`: the workflows directory configures a number of [Github Actions](https://github.com/features/actions) which will automate component testing and release, set useful Github labels, and more. We'll look at some of these later.

### Package Management

Origami components use [Bower](https://bower.io/), a package manager like [NPM](https://www.npmjs.com/), to manage dependencies. The `bower.json` file lists the components dependencies, and points to the main Sass and JavaScript files of the component. One benefit of using Bower is it ensures a flat dependency tree, so two versions of the same component are not install at once.

Although Origami components use Bower to install dependencies, developer dependencies may be installed using the [NPM](https://www.npmjs.com/) package manager, as seen in `package.json`. Rules for package management are defined in the [package management section of the specification](https://origami.ft.com/spec/v1/components/#package-management).

Although Origami components are authored using Bower, components are published to NPM so projects which use Origami may choose to use NPM over Bower ([but we still recommended Bower for now](https://origami.ft.com/docs/tutorials/npm/)).

Don't worry if this sounds a little confusing for now. Later in this tutorial we will install dependencies using Bower for our component to use. We will also see how Origami components are automatically published to NPM.

## Start Developing

Now we have a basic component to work from we can start developing!

First we need to install any component dependencies by running the Origami Build Tools `install` command:

<pre><code class="o-syntax-highlight--bash">obt install</code></pre>

Then we can use the `develop` (`dev`) command to start working on the component. The `dev` command creates a server for us to preview our component in the browser. And whenever we make any change to the source code the component will be rebuilt, which we will be able to see by refreshing our browser:

<pre><code class="o-syntax-highlight--bash">obt dev</code></pre>

Opening the link output by the develop command, for example `localhost:8999`, shows us the component demos (html files) and demo assets (js and css files) in the browser.

<figure>
	<img alt="" src="/assets/images/tutorial-new-component/example-dev-output.png" />
	<figcaption class="o-typography-caption">
        Running the dev command builds our demos. We'll discuss demos more shortly.
	</figcaption>
</figure>

<figure>
	<img alt="" src="/assets/images/tutorial-new-component/example-demos-local.png" />
	<figcaption class="o-typography-caption">
        Opening the link output by the develop command, `localhost:8999` in this case, shows us the component demos (html files) and demo assets (js and css files) in the browser.
	</figcaption>
</figure>

Clicking `demo.html` to open that demo will show a blank page. In the next section we will update this demo with markup and content for our component.

## Markup

So Origami components can be used with any backend language or framework users of Origami components copy and paste HTML from the README or demos in the [Origami registry](https://registry.origami.ft.com/components/) (although templates may be provided in some cases [according to the markup section of the component specification](https://origami.ft.com/spec/v1/markup/#templates)). To update the markup in our component demos see the `demos` directory.

The templates for demos are written in [mustache](https://mustache.github.io/), and demos may include their own Sass and JavaScript which is not part of the component itself. Note that demo code is not used by projects which depend on the component.

In the demos directory, you should see an example demo `demos/src/demo.mustache` (we'll revisit the other files later). Open `demos/src/demo.mustache` in your editor and you should see something which looks like this (assuming a component name of `o-example`):

<pre><code class="o-syntax-highlight--html">&lt;div class="o-example" data-o-component="o-example">&lt;/div></code></pre>

That `div` element is our component markup. So we can see something in out demo, add some content within the `div`.

<pre><code class="o-syntax-highlight--diff">-&lt;div class="o-example" data-o-component="o-example">&lt;/div>
+&lt;div class="o-example" data-o-component="o-example">
+   Hello world, I am a component named o-example!
+&lt;/div></code></pre>

The `obt dev` command which we run earlier will detect that you have updated `demos/src/demo.mustache` and compile it to `demos/local/demo.html`. Now if you refresh your browser you should see the content we just added to the demo.

<figure>
	<img alt="" src="/assets/images/tutorial-new-component/hello-world-demo.png" />
	<figcaption class="o-typography-caption">
        A "hello world" component demo with no styles.
	</figcaption>
</figure>

The `div` tag in our demo may be any HTML tag provided there is a `data-o-component` attribute. The `data-o-component` attribute identifies the root of our component and its [owned dom](https://origami.ft.com/spec/v1/markup/#owned-dom). A component may act on a DOM element using JavaScript if it, or any ancestor, has a data attribute containing the component’s name. There is also a CSS class `o-example` in our demo. Origami components may only style a DOM element with CSS if it, or any ancestor, has a class which starts with the name of the component. There are more details in the [markup section of the component specification](https://origami.ft.com/spec/v1/markup/) but we'll revisit this when adding CSS styles and JavaScript to our component.

## Part Two: Base Styles

In part one we learnt:
- The [Origami component specification](https://origami.ft.com/spec/v1/components/) tells us what standards we must meet to create an Origami component.
- The [Origami Build Tools](https://github.com/Financial-Times/origami-build-tools) command line interface is used to help us develop and test components.
- Specifically, we learnt about the Origami Build Tools `init` command to generate a component to work from when developing a new component.
- Origami components use git source control and are stored remotely on Github.
- Origami components HTML markup is usually copied by users from component demos rather than from templates.
- And finally we learnt how to update the markup in one of those demos.

Now we know how to update our component markup, in part two we will style our component. [Continue to part two](/docs/tutorials/create-a-new-component-part-2).

