---
title: Create A New Origami Component - Part 2 Styles
description: A step-by-step tutorial which teaches you how to build and deploy a new Origami component.
cta: Learn how to create an Origami component
collection_listing_display: false

---

# {{page.title}}

In part two we will build on our work in [part one](/docs/tutorials/create-a-new-component) and learn how to add styles to our new component.

## Styles

Origami component styles are written in [Sass](https://sass-lang.com/). According to the [Sass Documentation](https://sass-lang.com/documentation):
>Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.

We won't cover Sass in depth in this tutorial but will briefly describe the Sass syntax we use. If you're not familiar with Sass we recommend referencing the [Sass documentation](https://sass-lang.com/documentation).

Components have an entry Sass file `main.scss`, which may [import Sass from the `src/scss` directory](https://origami.ft.com/spec/v1/sass/#sass-includes).

Within `main.scss` you will see something like this:
<pre><code class="o-syntax-highlight--scss">@import 'src/scss/variables';

/// Output all oExample features
/// @param {Map} $opts [()] - A map of options to configure the output
/// @access public
/// @example scss
///		@include oExample($opts: (
///			// your opts here
///		))
@mixin oExample ($opts: ()) {
	// content of primary mixin
	.o-example {
		display: block;
		border: 1px solid red;
		padding: 16px;
	}
}

@if ($o-example-is-silent == false) {
	@include oExample();

	// Set to silent again to avoid being output twice
	$o-example-is-silent: true !global;
}
</code></pre>

Let's break this down a little.

The first line imports Sass from `src/scss/_variables.scss`. Note the underscore and extension is not needed on the import. All Origami Sass files except `main.scss` should start with an underscore to indicate they are [Sass partials](https://sass-lang.com/documentation/at-rules/import#partials) for import and should not be compiled on their own.
<pre><code class="o-syntax-highlight--scss">@import 'src/scss/variables';</code></pre>

Next within `main.scss` you should see a [Sass mixin](https://sass-lang.com/documentation/at-rules/mixin) with the same name as the component, in this case `oExample`. There are [Sass comments](https://sass-lang.com/documentation/syntax/comments) which describe the mixin using the [SassDoc format](http://sassdoc.com/). We use SassDoc to document Sass in the registry for users of Origami components to reference. For example see the [o-forms Sassdoc](https://registry.origami.ft.com/components/o-forms/sassdoc).

<pre><code class="o-syntax-highlight--scss">/// Output all oExample features
/// @param {Map} $opts [()] - A map of options to configure the output
/// @access public
/// @example scss
///		@include oExample($opts: (
///			// your opts here
///		))
</code></pre>

We call the mixin which shares the component name (`oExample`) the ["primary mixin"](https://origami.ft.com/spec/v1/sass/#primary-mixin). By default the primary mixin includes all styles for the component if included by the user. It will also accept an `$opts` argument so users may specify which features of a component to include. For example a user of [o-forms](https://registry.origami.ft.com/components/o-forms) could pass an `$opts` argument to the [`oForms` mixin](https://registry.origami.ft.com/components/o-forms/sassdoc?brand=master#mixin-oforms) to only output styles for text inputs, if their project does not need other input types. This helps keep the CSS bundle of the project small.

After the primary mixin there is a [Sass variable](https://sass-lang.com/documentation/variables) named `$o-example-is-silent`. By default this is set to `false` but may be set to `true` to include the primary mixin and output all the components CSS.

<pre><code class="o-syntax-highlight--scss">
@if ($o-example-is-silent == false) {
	@include oExample();

	// Set to silent again to avoid being output twice
	$o-example-is-silent: true !global;
}
</code></pre>

This [silent mode pattern](https://origami.ft.com/spec/v1/sass/#sass-silent-mode) is deprecated but required by all Origami components to support the [Origami Build Service](https://www.ft.com/__origami/service/build/v2/). We'll discuss the [Origami Build Service](https://www.ft.com/__origami/service/build/v2/), which may be used to bundle Origami components, in more detail later.

Let's style our component by adding a border and padding to the primary mixin. Note that the mixin is used by the demo and will output the CSS class in the body of the mixin, in our case `.o-example`.

<pre><code class="o-syntax-highlight--diff">@mixin oExample ($opts: ()) {
	// content of primary mixin
	.o-example {
-		display: block;
+		border: 1px solid red;
+		padding: 16px;
+		margin: 4px;
	}
}
</code></pre>

<figure>
	<img alt="" src="/assets/images/tutorial-new-component/hello-world-demo-2-sass.png" />
	<figcaption class="o-typography-caption">
        The "hello world" component demo with a red border, some margin, and some padding.
	</figcaption>
</figure>

A component may style a DOM element with CSS if it, or any ancestor, has a class which starts with the name of the component, in the case of this tutorial `o-example`. As Origami components follow the [BEM naming convention](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)


## Structure

Now we have the code for a basic Origami component we can discuss the purpose of some key files and directories.



### pa11y
The pa11y demo is used by Origami Build Tools to run [Pa11y](https://pa11y.org/). Pa11y is a command-line tool which we use to highlight any accessibility issues against the pa11y demo. When building components its important to add any variations to the pa11y demo to test for accessibility issues, such as low contrast or incorrect markup. As it's used to automate some accessibility tests, the pa11y demo is hidden from users in the [component registry](https://registry.origami.ft.com/components).


### bower.json and package.json

[Bower](https://bower.io/) is a package manager used to install Origami component dependencies. The `bower.json` file lists the components dependencies, and points to the main Sass and JavaScript files of the component. One benefit of using Bower is it ensures a flat dependency tree, so two versions of the same component are not install at once.

Although Origami components use Bower to install dependencies, developer dependencies may be installed using the [NPM](https://www.npmjs.com/) package manager, as seen in `package.json`. Rules for package management are defined in the [package management section of the specification](https://origami.ft.com/spec/v1/components/#package-management).

Although Origami components are authored using Bower, components are published to NPM so projects which use Origami may choose to use NPM over Bower ([but we still recommended Bower for now](https://origami.ft.com/docs/tutorials/npm/)). We'll discuss how components are published to NPM later.

### Renaming And Adding A New Demo

At the time of writing, the boilerplate demo generated by `obt init` is named `demo`. However components may have multiple demos. A name `demo` is not very helpful as it does not describe what the demo shows.

To update the demo name or add a new demo edit the `origami.json` file. `origami.json` is a JSON file that is responsible for describing various aspects of an Origami project, including components. There is a [specification for the full `origami.json` manifest](https://origami.ft.com/spec/v1/manifest/), but for now we are interested in only the `demosDefaults` and `demos` keys.

[`demosDefaults`](https://origami.ft.com/spec/v1/manifest/#demosdefaults) describes default options to be applied to all demos. Among other settings, we can specify the demo Mustache template, Sass, and JavaScript file. We can also set a `data` attribute to pass JSON data to our Mustache template.

[`demos`](https://origami.ft.com/spec/v1/manifest/#demos) is an array of individual demos. Here we set the `name` of the demo, which will be used as the name of the outputted html file; a title and description to display when the component demo is published to the Origami Registry; as well as other options such as to override `demosDefaults` per demo.

In our example `o-example` component we will have an option to inverse the colours for use on a dark background. Let's call that variant `inverse` and create a new demo to

```diff
	"demos": [
		{
-			"title": "A Useful Demo",
+			"title": "Standard",
			"name": "demo",
			"template": "demos/src/demo.mustache",
-			"description": "Description of the demo"
+			"description": "The standard variant of o-example is best on on light backgrounds."
		},
+		{
+			"title": "Inverse",
+			"name": "demo-2",
+			"template": "demos/src/demo.mustache",
+			"description": "The inverse variant of o-example is best on on dark backgrounds."
+		},
		{
			"title": "Pa11y",
			"name": "pa11y",
			"template": "demos/src/pa11y.mustache",
			"description": "Accessibility test will be run against this demo",
			"hidden": true
		}
	]
```
