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

### Configuring Brand Variables

To brand our component we need to include [o-brand](https://registry.origami.ft.com/components/o-brand@/readme) as a dependency. Install `o-brand` by running `bower install o-brand --save` and importing its Sass file in `main.scss`, as we did for other dependencies in [part two](/docs/tutorials/create-a-new-component-part-2).

Now `o-brand` Sass is available for us to use you should see a file `src/scss/_brand.scss`. The brand Sass file is where all our brand configuration will go. It will look something like this:

```scss
/// Helper for `o-brand` function.
/// @access private
@function _oExampleGet($variables, $from: null) {
	@return oBrandGet($component: 'o-example', $variables: $variables, $from: $from);
}
/// Helper for `o-brand` function.
/// @access private
@function _oExampleSupports($variant) {
	@return oBrandSupportsVariant($component: 'o-example', $variant: $variant);
}
```

Here we wrap two `o-brand` functions `oBrandGet` and `oBrandSupportsVariant` in a new function, so we do not have to pass the `$component` argument to the brand functions each time we use them. Our component specific functions start with an underscore `_` to indicate they are private. No user of our `o-example` component should use these functions. As private Sass, they may be changed or removed at any time.

_(It's a good idea to mark all Sass as private with an underscore by default, so components may be refactored flexibly. It's easy to add new public features for component users but more difficult to remove them.)_

In brief the `_oExampleGet` function will allow us to retrieve the value of a variable which changes according to the brand; the `_oExampleSupports` function will let us check if the current brand supports a variant of the component (a variant could be a theme, size, or other component modifier). We'll learn more about these functions do shorty. First we need to set brand variables.

@todo define brand variables, use them. Use a master brand b2c variant to demonstrate supports.

If you would like to find out more about `o-brand` features, see the [`o-brand` readme](https://registry.origami.ft.com/components/o-brand/readme).

## Component Themes

A component may also support themes within a brand, to allow for variations of the component. Further, some components include a Sass interface for users of the component to generate a custom theme.

Unlike brands, which are set at a global level, a project could include many themes of a component at the same time. For example the [o-message](https://registry.origami.ft.com/components/o-message@4.1.3) component has success, error, and inform themes for notices.

We will add themes as part of this tutorial, but for reference there is a [theme section in the component specification](https://origami.ft.com/spec/v1/sass/#themes).

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

