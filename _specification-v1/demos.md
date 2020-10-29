---
title: Origami Component Demos Specification
description: An overview of how the Origami team writes demos.
permalink: /spec/v1/components/demos/

# Navigation config
nav_display: false

# Collection listing config
collection_listing_display: false
---

# {{page.title}}

## Description

Demos must be [defined](#manifest) in the `origami.json` and built with <a href="https://www.npmjs.com/package/origami-build-tools" class="o-typography-link--external">Origami Build Tools</a>.

When deciding what demos to create, demos:
- **Must** be based on realistic use cases.
- **Should** be visually different from one another.
- **Should not** be used to explain configuration and implementation differences, these should be explained in the component’s README.

When building demos, they:
- **Must** have a description explaining what they show ([see the manifest properties](#manifest)).
- **Must** be reproducable using the [Origami Build Service](/docs/services/#build-service) by copying the demo markup.
- **Should not** include more than necessary to demonstrate the component, including: any headings, backgrounds, margins or other content that are not part of the component itself.

Where styles need to be added specifically for a demo (e.g. to make the content of o-grid containers visible), they **must** be attached to classes with a `demo-` prefix, for example:

```
.demo-cell {
  background-color: red;
}
```

## Manifest

Demos extend the [Origami manifest specification](/spec/v1/manifest/) with the following properties

### demosDefaults
<table class="o-manifest__table o-table o-table--compact o-table--row-headings o-table--vertical-lines o-table--horizontal-lines" data-o-component="o-table">
	<tr>
		<th scope="row" role="rowheader">Type</th>
		<td><code>Object</code></td>
	</tr>
	<tr>
		<th scope="row" role="rowheader">Required</th>
		<td><code>false</code></td>
	</tr>
</table>

Describes default options to be applied to all demos.

The object accepts the following properties:

- `template`: type `String`. Describes the path to the mustache template to render
- `sass`: type `String`. Describes the path to the Sass file to compile.
- `js`: type `String`. Describes the JS file to build.
- `data`: type `Object` or `String`. Describes data to populate to the mustache template with. If this is a string it must be a path to a JSON file containing the data, relative to the root of the repo.
- `documentClasses`: type `String`. Names CSS classes to set on the `html` tag.
- `dependencies`: type `Array`. Is a list of other components that are only needed for demos, which will be loaded via the <a href="https://www.ft.com/__origami/service/build" class="o-typography-link--external">Build Service</a>

All of these properties are **optional**.

<pre><code class="o-syntax-highlight--json">{
	"demosDefaults": {
		"template": "demos/src/demo.mustache"
		"sass": "demos/src/demo.scss",
		"js": "demos/src/demo.js"
		"data": {
			"striped-rows": true
		},
		"documentClasses": "demo-container",
		"dependencies": ["o-normalise"]
	}
}</code></pre>

### demos
<table class="o-manifest__table o-table o-table--compact o-table--row-headings o-table--vertical-lines o-table--horizontal-lines" data-o-component="o-table">
	<tr>
		<th scope="row" role="rowheader">Type</th>
		<td><code>Array</code></td>
	</tr>
	<tr>
		<th scope="row" role="rowheader">Required</th>
		<td><code>false</code></td>
	</tr>
</table>

It accepts an array. Is a list of configuration objects for individual demos.
Each object in the list accepts the following properties:

**required**:
- `name`: type `String`. Demo name which will be used as the name of the outputted html file
- `title`: type `String`. A title for the demo which will appear when listed in the Registry
- `description`: type `String`. An explanation of the purpose of the demo
- `template`: type `String`. Describes the path to the demo-specific mustache template to render

**optional**:
- `sass`: type `String`. Describes the path to the demo-specific Sass file to compile.
- `js`: type `String`. Describes the path to the demo-specific JS file to build.
- `data`: type `Object` or `String`. Describes data to populate to the component-specific mustache template with. If this is a string it must be a path to a JSON file containing the data, relative to the root of the repo.
- `brands`: type `Array`. For components which support [brands](/docs/components/branding/), this describes one or more brands which the demo applies to ("master", "internal, "whitelabel")
- `documentClasses`: type `String`. Names CSS classes to set on the component-specific `html` tag
- `dependencies`: type `Array`. Is a list of other components that are only needed a this specific demo, which will be loaded via the <a href="https://www.ft.com/__origami/service/build" class="o-typography-link--external">Build Service</a>
- `hidden`: type `Boolean`. Whether the demo should be hidden in the Registry
- `display_html`: type `Boolean`. Whether the demo should have a HTML tab in the Registry (defaults to true)

<pre><code class="o-syntax-highlight--json">{
	"demos": [
		{
			"name": "Basic table",
			"description": "Basic table implementation",
			"template": "demos/src/basic-component.mustache"
		},
		{
			"name": "Striped table",
			"description": "Striped table implementation",
			"template": "demos/src/striped-table.mustache",
			"sass": "demos/src/striped-table.scss",
			"documentClasses": "demo-striped-table-container",
			"brands": ["master", "internal"]
		},
		{
			"name": "pa11y",
			"description": "Hidden test for pa11y",
			"hidden": true,
			"template": "demos/src/pa11y.mustache"
		}
	]
}</code></pre>
