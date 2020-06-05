---
title: Create A New Origami Component - Part 3 Themes And Brands
description: A step-by-step tutorial which teaches you how to build and deploy a new Origami component.
cta: Learn how to create an Origami component
collection_listing_display: false

---

# {{page.title}}

In part three we will build on our work in [part two](/docs/tutorials/create-a-new-component-part-2) by learning how to modify the style to our new component for different themes and brands.

## Component Brands

Origami components are used by products across the Financial Times Group, and some groups require a distinct appearance from others; internal tools have a distinct style from ft.com products for example. To cater for these broad usecases, the appearance of Origami components included in a project may be changed by choosing a "brand":
- master: FT branding for public ft.com sites and affiliates.
- internal: Style suitable for internal products, tools, and documentation.
- whitelabel: Base, structural styles only to build on and customise.

A project chooses a brand globally, meaning all components included in a project must use the same brand. See [component brand documentation](https://origami.ft.com/docs/components/branding/) for examples on how a project may use brands. For reference, when it comes to building branding components, there is also a [section on component brands in the specification](https://origami.ft.com/spec/v1/sass/#brands).

### Supported Brands

Origami components may support one or more brand. Which brands the component support are defined along with other component details in [`origami.json`](https://origami.ft.com/spec/v1/manifest/#brands), by the `brands` property. If `brands` is not set the component is "unbranded" and implicitly only supports the "master" brand.

When promoted by `obt init` in [part one](/docs/tutorials/create-a-new-component) we select all brands, so the `origami.json` file of our component should include an array of each brand `"brands": ["master","internal","whitelabel"],`. If not, update your `origami.json` now.

@todo show the brand obt flag at this point. Show how the colour of the background changes automatically because we used o-colors usecases (later we will remove the usecase, so show it in use at this point)

### Switching Brands In Development

When developing a branding Origami component pass the `--brand` flag to the `obt dev` command to switch brand.

For example, build the `internal` version of our component by running `obt dev --brand internal`. You should see in our demo the background colour has changed from a wheat colour to a light slate colour. That's because wheat is not part of the [internal brand colour palette](https://registry.origami.ft.com/components/o-colors@5.2.5/?brand=internal#demo-primary-palette). As we used a colour usecase `oColorsByUsecase('box', 'background')` in [part two](/docs/tutorials/create-a-new-component-part-2), rather than specify a specific colour, it was updated automatically for the internal brand.

<figure>
	<img alt="" src="/assets/images/tutorial-new-component/hello-world-demo-5-sass.png" />
	<figcaption class="o-typography-caption">
        Our example component for the internal brand no longer has a wheat background, because the background was set using a colour usecase.
	</figcaption>
</figure>

Do the same for the whitelabel brand by running `obt dev --brand whitelabel`. You should see a Sass error `Error: 'The color "slate" does not exist.`. This error is because we set a border colour by name `oColorsByName('slate')` in [part two](/docs/tutorials/create-a-new-component-part-2), but slate is not in the limited [whitelabel colour palette](https://registry.origami.ft.com/components/o-colors@5.2.5/?brand=whitelabel#demo-primary-palette).

To fix this error, we need to set the border colour of our component differently depending on which brand is being used.

### Configuring Brand Variables

To style our component according to the current brand we need to include [o-brand](https://registry.origami.ft.com/components/o-brand@/readme) as a dependency. Install `o-brand` by running `bower install o-brand --save` and importing its Sass file in `main.scss`, as we did for other dependencies in [part two](/docs/tutorials/create-a-new-component-part-2).

Now `o-brand` Sass is available for us to use. We will use `o-brand` to define a brand variable `border-color` in `src/scss/_brand.scss`, which is where all our brand configuration will go.

You should see in `src/scss/_brand.scss` two Sass functions which we will discuss later, for now add the following Sass at the bottom of the file.

<pre><code class="o-syntax-highlight--scss">@if oBrandGetCurrentBrand() == 'master' {
	@include oBrandDefine('o-example', 'master', (
		'variables': (
			'border-color': oColorsByName('slate')
		),
		'supports-variants': ()
	));
}</code></pre>

Lets break down what this is doing.

First we check if the current brand is the `master` brand using the `o-brand` function `oBrandGetCurrentBrand` and a [Sass if statement](https://sass-lang.com/documentation/at-rules/control/if). We do this to ensure the Sass within the `if` statement is only evaluated when the brand is the `master` brand:
<pre><code class="o-syntax-highlight--scss">@if oBrandGetCurrentBrand() == 'master' {
	//...
}</code></pre>

Second we call the mixin `oBrandDefine`, which will let us set component configuration for a given brand. In this case we are configuring our `o-example` component for the `master` brand.

<pre><code class="o-syntax-highlight--scss">@if oBrandGetCurrentBrand() == 'master' {
	@include oBrandDefine('o-example', 'master', (
        // brand configuration for the master brand here..
    ));
}</code></pre>

Third we pass configuration to `oBrandDefine` for the brand. We set a brand variable `border-color` within a `variables` map, to the value of the slate colour `oColorsByName('slate')`. We also set a property `supports-variants`, which we will discuss more shortly.
<pre><code class="o-syntax-highlight--scss">@if oBrandGetCurrentBrand() == 'master' {
	@include oBrandDefine('o-example', 'master', (
		'variables': (
			'border-color': oColorsByName('slate')
		),
		'supports-variants': ()
	));
}</code></pre>

Now repeat this block for the `internal` and `whitelabel` brand, but change `border-color` to `oColorsByName('black')` for the `whitelabel` brand (as `slate` is not part of the [whitelabel colour palette](https://registry.origami.ft.com/components/o-colors@5.2.5/?brand=whitelabel#demo-primary-palette)):

<pre><code class="o-syntax-highlight--scss">// Add master brand configuration.
@if oBrandGetCurrentBrand() == 'master' {
	@include oBrandDefine('o-example', 'master', (
		'variables': (
			'border-color': oColorsByName('slate')
		),
		'supports-variants': ()
	));
}

// Add internal brand configuration.
@if oBrandGetCurrentBrand() == 'internal' {
	@include oBrandDefine('o-example', 'internal', (
		'variables': (
			'border-color': oColorsByName('slate')
		),
		'supports-variants': ()
	));
}

// Add whitelabel brand configuration.
@if oBrandGetCurrentBrand() == 'whitelabel' {
	@include oBrandDefine('o-example', 'whitelabel', (
		'variables': (
			'border-color': oColorsByName('black')
		),
		'supports-variants': ()
	));
}</code></pre>

Now we have defined `border-color` for each brand, with a different colour set for the whitelabel brand, we can use `border-color` within our Sass. Return your focus to the Sass function `_oExampleGet` at the top of `src/scss/_brand.scss`:

<pre><code class="o-syntax-highlight--scss">/// Helper for `o-brand` function.
/// @access private
@function _oExampleGet($variables, $from: null) {
	@return oBrandGet($component: 'o-example', $variables: $variables, $from: $from);
}</code></pre>

The `_oExampleGet` function is a component specific function which wraps a `o-brand` function `oBrandGet`. `oBrandGet` is used to retrieve a brand variable depending on the current brand. Wrapping this in `_oExampleGet` is useful to avoid passing the `$component` argument repeatedly.

Update `main.scss` to set our border color with `_oExampleGet('border-color')`:
<pre><code class="o-syntax-highlight--diff">.o-example {
		@include oTypographyBody();
-		border: 1px solid oColorsByName('slate');
+		border: 1px solid _oExampleGet('border-color');
		background: oColorsByUsecase('box', 'background');
		padding: oSpacingByName('s4');
		margin: oSpacingByName('s1');
	}</code></pre>

Now when we run `obt dev --brand whitelabel` we get a different error! The error is `Could not find a colour for the "box" "background" usecase.`. That's because the whitelabel brand does not support the [box colour usecase](https://registry.origami.ft.com/components/o-colors@5.2.4/readme?brand=master#usecases) we used to set a background. Unlike the master and internal brand, the whitelabel brand is not opinionated and provides a limited set of colour usescases. Instead of using the usecase lets add a new brand variable `background-color` so we can support the whitelabel brand as well:

<pre><code class="o-syntax-highlight--diff">// Add master brand configuration.
@if oBrandGetCurrentBrand() == 'master' {
	@include oBrandDefine('o-example', 'master', (
		'variables': (
			'border-color': oColorsByName('slate'),
+			'background-color': oColorsByName('wheat')
		),
		'supports-variants': ()
	));
}

// Add internal brand configuration.
@if oBrandGetCurrentBrand() == 'internal' {
	@include oBrandDefine('o-example', 'internal', (
		'variables': (
			'border-color': oColorsByName('slate'),
+			'background-color': oColorsByName('slate-white-5')
		),
		'supports-variants': ()
	));
}

// Add whitelabel brand configuration.
@if oBrandGetCurrentBrand() == 'whitelabel' {
	@include oBrandDefine('o-example', 'whitelabel', (
		'variables': (
			'border-color': oColorsByName('black'),
+			'background-color': oColorsByName('white')
		),
		'supports-variants': ()
	));
}</code></pre>

And update `main.scss` again:
<pre><code class="o-syntax-highlight--diff">.o-example {
		@include oTypographyBody();
		border: 1px solid _oExampleGet('border-color');
-		background: oColorsByUsecase('box', 'background');
+		background: _oExampleGet('background-color');
		padding: oSpacingByName('s4');
		margin: oSpacingByName('s1');
	}</code></pre>

Our now component supports all three brands, with a unique appearance for each.

<figure>
	<img alt="" src="/assets/images/tutorial-new-component/hello-world-demo-6-sass.png" />
	<figcaption class="o-typography-caption">
        The whitelabel brand version of our component is not very opinionated. It's black and white and uses a system font.
	</figcaption>
</figure>

<figure>
	<img alt="" src="/assets/images/tutorial-new-component/hello-world-demo-7-sass.png" />
	<figcaption class="o-typography-caption">
        The internal brand version of our component uses Financial Times fonts, and has a subtle background.
	</figcaption>
</figure>

<figure>
	<img alt="" src="/assets/images/tutorial-new-component/hello-world-demo-8-sass.png" />
	<figcaption class="o-typography-caption">
        The master brand version of our component uses Financial Times fonts and a wheat background.
	</figcaption>
</figure>

There is more documentation about [`oBrandGet` in the `o-brand` readme](https://registry.origami.ft.com/components/o-brand/readme#obrandget).

You may have noticed we haven't returned to the `supports-variants` configuration yet or the `_oExampleSupports` function. We'll discuss those next as part of the themes section. If you would like to find out more about `o-brand` features, see the [`o-brand` readme](https://registry.origami.ft.com/components/o-brand/readme).

## Component Themes

A component may also support themes within a brand, to allow for variations of the component. Further, some components include a Sass interface for users of the component to generate a custom theme.

Unlike brands, which are set at a global level, a project could include many themes of a component at the same time. For example the [o-message](https://registry.origami.ft.com/components/o-message@4.1.3) component has success, error, and inform themes for notices.

Now let's add themes to our `o-example` component. For reference there is a [theme section in the component specification](https://origami.ft.com/spec/v1/sass/#themes).

Our example component will have two themes: an `inverse` theme that should be used when our component is on a dark background; and a `b2c` (business to consumer) theme just for the master brand. We will also make our component flexible and allow a user to generate a custom theme.

We will add a new mixin called `oExampleAddTheme`, following the [theme convention in the specification](https://origami.ft.com/spec/v1/sass/#themes), to a new file `src/scss/_mixins.scss`. Don't forget to import your new `src/scss/_mixins.scss` in `main.scss`, in the same way `src/scss/_variables_.scss` is imported.

Our `oExampleAddTheme` mixin will accept a theme name and output a CSS class `o-example--[theme-name]` which can be added to our component markup to change the theme ([this is a BEM modifier class](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)).

```scss
@mixin oExampleAddTheme($name) {
	.o-example--#{name} {
		// update border-color and background
		// for the given theme
	}
}
```

@todo continue here


<pre><code class="o-syntax-highlight--scss">/// Helper for `o-brand` function.
/// @access private
@function _oExampleGet($variables, $from: null) {
	@return oBrandGet($component: 'o-example', $variables: $variables, $from: $from);
}
/// Helper for `o-brand` function.
/// @access private
@function _oExampleSupports($variant) {
	@return oBrandSupportsVariant($component: 'o-example', $variant: $variant);
}</code></pre>


## @todo: put this stashed content somewhere

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

<pre><code class="o-syntax-highlight--diff">"demos": [
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
	]</code></pre>

