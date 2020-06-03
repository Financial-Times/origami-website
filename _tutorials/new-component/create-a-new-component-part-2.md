---
title: Create A New Origami Component - Part 2 Base Styles
description: A step-by-step tutorial which teaches you how to build and deploy a new Origami component.
cta: Learn how to create an Origami component
collection_listing_display: false

---

# {{page.title}}

In part two we will build on our work in [part one](/docs/tutorials/create-a-new-component) by learning how to add styles to our new component.

## Sass

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
	}
}

@if ($o-example-is-silent == false) {
	@include oExample();

	// Set to silent again to avoid being output twice
	$o-example-is-silent: true !global;
}
</code></pre>

Let's break this down a little.

## Imports

The first line imports Sass from `src/scss/_variables.scss`. Note the underscore and extension is not needed in the `@import` statement. All Origami Sass files except `main.scss` should start with an underscore to indicate they are [Sass partials](https://sass-lang.com/documentation/at-rules/import#partials) for import and should not be compiled on their own.
<pre><code class="o-syntax-highlight--scss">@import 'src/scss/variables';</code></pre>

## Primary Mixin

Next within `main.scss` you should see a [Sass mixin](https://sass-lang.com/documentation/at-rules/mixin) with the same name as the component, in this case `oExample`. There are [Sass comments](https://sass-lang.com/documentation/syntax/comments) which describe the mixin using the [SassDoc format](http://sassdoc.com/). We use SassDoc to document Sass in the registry for users of Origami components to reference. For example see the [o-forms Sassdoc](https://registry.origami.ft.com/components/o-forms/sassdoc).

<pre><code class="o-syntax-highlight--scss">/// Output all oExample features
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
	}
}
</code></pre>

We call the mixin which shares the component name (`oExample`) the ["primary mixin"](https://origami.ft.com/spec/v1/sass/#primary-mixin). By default the primary mixin includes all styles for the component if included by the user. It will also accept an `$opts` argument so users may specify which features of a component to include. For example a user of [o-forms](https://registry.origami.ft.com/components/o-forms) could pass an `$opts` argument to the [`oForms` mixin](https://registry.origami.ft.com/components/o-forms/sassdoc?brand=master#mixin-oforms) to only output styles for text inputs, if their project does not need other form input types. This helps keep the CSS bundle of the project small.

## Silent Mode

After the primary mixin our component references a [Sass variable](https://sass-lang.com/documentation/variables) named `$o-example-is-silent`. This is set in `src/scss/_variables.scss`, where Origami components define global variables.

<pre><code class="o-syntax-highlight--scss">
@if ($o-example-is-silent == false) {
	@include oExample();

	// Set to silent again to avoid being output twice
	$o-example-is-silent: true !global;
}
</code></pre>

By default the silent mode variable is set to `false` so no CSS is output when a component is included in a project, until a mixin is called. But a project may set the silent mode variable to `true` before including the component, as an alternative to calling the primary mixin. This [silent mode pattern](https://origami.ft.com/spec/v1/sass/#sass-silent-mode) is deprecated but required by all Origami components to support the [Origami Build Service](https://www.ft.com/__origami/service/build/v2/). We'll discuss the [Origami Build Service](https://www.ft.com/__origami/service/build/v2/), which may be used to bundle Origami components, in more detail later.

## Naming Conventions

The most important naming convention is prefixing CSS selectors and Sass with the component name. Doing so makes sure a component only applies styles to itself, does not unexpectedly style other parts of a project, and does not clash with Sass from other components.

Other naming conventions to keep in mind include:
- Origami CSS follows the [BEM naming convention](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/).
- Sass variables are hyphen separated and lowercase.
- Sass mixins and functions are camel-case.

See the [Sass naming convention part of the specification](https://origami.ft.com/spec/v1/sass/#naming-conventions) for full details and more examples.

## Basic Styles

Let's style our component by adding a border and padding to the `.o-example` CSS class.

<pre><code class="o-syntax-highlight--diff">@mixin oExample ($opts: ()) {
	// content of primary mixin
	.o-example {
-		display: block;
+		border: 1px solid red;
+		padding: 1rem;
+		margin: 0.25rem;
	}
}
</code></pre>

As the demo uses the primary mixin already, refreshing your demo page will show the new styles (provided the `obt dev` command is still running from [part one](/docs/tutorials/create-a-new-component)).

<figure>
	<img alt="" src="/assets/images/tutorial-new-component/hello-world-demo-2-sass.png" />
	<figcaption class="o-typography-caption">
        Our "o-example" "hello world" component demo with a red border, some margin, and some padding.
	</figcaption>
</figure>

## Use Other Component Sass

The styles we've added so far use arbitrary colours and spacing (padding/margin) sizes. To improve consistency across projects we can build our component using existing Origami components. To demonstrate lets introduce some existing Origami components to our demo.

First we will update our border colour using [o-colors](https://registry.origami.ft.com/components/o-colors), then we will update our margin/padding to use [o-spacing](https://registry.origami.ft.com/components/o-spacing), we'll style the text content of our component using [o-typography](https://registry.origami.ft.com/components/o-typography), and finally we will add a button using [o-buttons](https://registry.origami.ft.com/components/o-buttons).

### Install Component Dependencies

The first step is to install each component we want to use via [Bower](https://bower.io/). In order for Bower to find the components we will be installing, we need to tell it where to look. For that, we use a `.bowerrc` file. We recommend adding it to your home directory `~/.bowerrc`:
<pre><code class="o-syntax-highlight--json">{
	"registry": {
		"search": [
			"https://origami-bower-registry.ft.com",
			"https://registry.bower.io"
		]
	}
}</code></pre>

With Bower configured, we can now run:
<pre><code class="o-syntax-highlight--bash">bower install o-colors o-spacing o-typography o-buttons</code></pre>

You should now have a `bower_components` directory with all the components we just installed. We can now make their Sass available for us to use with `@import` statements at the top of `main.scss`.

<pre><code class="o-syntax-highlight--diff">+@import 'o-colors/main';
+@import 'o-spacing/main';
+@import 'o-typography/main';
+@import 'o-buttons/main';
@import 'src/scss/variables';
</code></pre>

All [`@import` statements in Origami components](http://localhost:4000/spec/v1/sass/#sass-includes) should be in `main.scss`, before any other Sass.

As Origami component Sass does not output CSS by default, these imports do nothing except allow us to use Sass mixins, functions, and variables from these components. How to use a component's Sass is documented in the component readme (see the [o-colors readme](https://registry.origami.ft.com/components/o-colors/readme) as an example) and its SassDoc may also be referenced in the component registry (see the [o-colors SassDoc](https://registry.origami.ft.com/components/o-colors/sassdoc) as an example).

### o-colors

So lets change our red boarder to the standard slate colour from `o-colors` using the [oColorsByName](https://registry.origami.ft.com/components/o-colors@5.2.4/readme?brand=master#default-palette-colours) Sass function.

As well as include a colour by name, we can also get a colour for a [specific usecase](https://registry.origami.ft.com/components/o-colors@5.2.4/readme?brand=master#usecases) such as a page background. To demonstrate, set the background colour of our component using the `box` colour usecase (the `box` colour is used to highlight an area of content such as an aside).

<pre><code class="o-syntax-highlight--diff">@mixin oExample ($opts: ()) {
	// content of primary mixin
	.o-example {
-		border: 1px solid red;
+		border: 1px solid oColorsByName('slate');
+		background: oColorsByUsecase('box', 'background');
		padding: 1rem;
		margin: 0.25rem;
	}
}
</code></pre>

### o-spacing

Then we can use one of the recommended space values from `o-spacing` using its [oSpacingByName](https://registry.origami.ft.com/components/o-spacing@2.0.4/readme?brand=master#named-space) Sass function.
<pre><code class="o-syntax-highlight--diff">@mixin oExample ($opts: ()) {
	// content of primary mixin
	.o-example {
		border: 1px solid oColorsByName('slate');
-		padding: 1rem;
+		padding: oSpacingByName('s4');
-		margin: 0.25rem;
+		margin: oSpacingByName('s1');
	}
}
</code></pre>

### o-typography

The next thing we wanted to do was style our component text using `o-typography`. We can do that a number of ways depending on how we want our typography to look. For now let's use the [`oTypographyBody`](https://registry.origami.ft.com/components/o-typography@6.4.1/readme?brand=master#otypographybody) mixin. Unlike a function which returns a value, a Sass mixin sets a number of CSS properties; in this case the font family, font size, etc.

<pre><code class="o-syntax-highlight--diff">@mixin oExample ($opts: ()) {
	// content of primary mixin
	.o-example {
+		@include oTypographyBody();
		border: 1px solid oColorsByName('slate');
		padding: oSpacingByName('s4');
		margin: oSpacingByName('s1');
	}
}
</code></pre>

Run `obt dev`, if not already, and preview the component demo as in [part one](/docs/tutorials/create-a-new-component). You should see the styles have been updated

<figure>
	<img alt="" src="/assets/images/tutorial-new-component/hello-world-demo-3-sass.png" />
	<figcaption class="o-typography-caption">
        Our "o-example" "hello world" component now as a slate boarder, uses Financial Times fonts, standardised space sizes for margin and padding, and has a background colour.
	</figcaption>
</figure>

### o-buttons

@todo add a button, explain that we can't include all button css and must use a "content" mixin

## Part Three: Themes And Branding

To style our components we covered many topics in this part of the tutorial. We learnt:
- Origami component CSS is written with [Sass](https://sass-lang.com/documentation)
- Component Sass includes [SassDoc](http://sassdoc.com/) comments for Sass documentation.
- Conventional Origami Sass patterns such as the ["primary mixin"](https://origami.ft.com/spec/v1/sass/#primary-mixin) and ["silent mode"](https://origami.ft.com/spec/v1/sass/#sass-silent-mode).
- How to install Origami component dependencies from the [Origami Bower Registry](https://github.com/Financial-Times/origami-bower-registry).
- And finally how to include and use Sass from o-colors, o-spacing, o-typography, and o-buttons.

Now we know how to add styles our components, in part three we will build on that knowledge to provide new visual variations of our component. We will add an alternative `inverse` theme that will optionally modify the appearance of `o-example` to look better on a dark background. We will also brand our component to change its appearance depending on whether it is used within a master brand ft.com product, internal product, or elsewhere. [Continue to part three](/docs/tutorials/create-a-new-component-part-3).