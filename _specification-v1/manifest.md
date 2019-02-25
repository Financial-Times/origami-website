---
title: Origami.json Manifest Specification

# Navigation config
nav_display: true
nav_label: Manifest
nav_order: 25
---

# {{page.title}}

All Origami components, imagesets and services, **should** be discoverable by the [Origami registry](#TODO). To do this, the component **must** contain an `origami.json` file in the root of its repository.

## Properties

`origami.json` is a [JSON](#TODO) format file that is responsible for describing various aspects of an Origami component. It accepts the following properties:

### description

<table class="o-layout__main__single-span o-manifest__table" data-o-component="o-table">
	<tr>
		<th scope="row" role="rowheader">Type</th>
		<td><code>String</code></td>
	</tr>
	<tr>
		<th scope="row" role="rowheader">Required</th>
		<td><code>true</code></td>
	</tr>
</table>

**Should** be a concise description of the purpose of the component.
<pre class="o-manifest__example"><code class="o-syntax-highlight--json">{
	"description": "Branded tables"
}</code></pre>

### origamiType

<table class="o-layout__main__single-span o-manifest__table" data-o-component="o-table">
	<tr>
		<th scope="row" role="rowheader">Type</th>
		<td><code>String</code></td>
	</tr>
	<tr>
		<th scope="row" role="rowheader">Required</th>
		<td><code>true</code></td>
	</tr>
</table>

Defines the type of Origami module that the manifest belongs to. **Must** be set to one of:
- `module`
- `imageset`
- `service`

<pre class="o-manifest__example"><code class="o-syntax-highlight--json">{
	"origamiType": "module"
}</code></pre>

### origamiVersion

<table class="o-layout__main__single-span o-manifest__table" data-o-component="o-table">
	<tr>
		<th scope="row" role="rowheader">Type</th>
		<td><code>Integer</code></td>
	</tr>
	<tr>
		<th scope="row" role="rowheader">Required</th>
		<td><code>true</code></td>
	</tr>
</table>

**Must** be set to `1`. It is the version of Origami to which the component conforms.
<pre class="o-manifest__example"><code class="o-syntax-highlight--json">{
	"origamiVersion": 1
}</code></pre>

### keywords

<table class="o-layout__main__single-span o-manifest__table" data-o-component="o-table">
	<tr>
		<th scope="row" role="rowheader">Type</th>
		<td><code>Array</code></td>
	</tr>
	<tr>
		<th scope="row" role="rowheader">Required</th>
		<td><code>true</code></td>
	</tr>
</table>

Expects keywords related to the component to help discover it in the registry. These **should** be stored as an array.

<pre class="o-manifest__example"><code class="o-syntax-highlight--json">{
	"keywords": ["table", "rows", "columns"]
}</code></pre>

### origamiCategory

<table class="o-layout__main__single-span o-manifest__table" data-o-component="o-table">
	<tr>
		<th scope="row" role="rowheader">Type</th>
		<td><code>String</code></td>
	</tr>
	<tr>
		<th scope="row" role="rowheader">Required</th>
		<td><code>true</code></td>
	</tr>
</table>

Describes the organisational category the component belongs to. **Must** be one of:
- `components`
- `primitives`
- `utilities`
- `layouts`

<pre class="o-manifest__example"><code class="o-syntax-highlight--json">{
	"origamiCategory": "components"
}</code></pre>

### support
<table class="o-layout__main__single-span o-manifest__table" data-o-component="o-table">
	<tr>
		<th scope="row" role="rowheader">Type</th>
		<td><code>String</code></td>
	</tr>
	<tr>
		<th scope="row" role="rowheader">Required</th>
		<td><code>true</code></td>
	</tr>
</table>
Describes where a user can go for support on this component. **Should** be the URL of the component's GitHub issues.

<pre class="o-manifest__example"><code class="o-syntax-highlight--json">{
	"support": "https://github.com/Financial-Times/o-table/issues"
}</code></pre>

### supportStatus

<table class="o-layout__main__single-span o-manifest__table" data-o-component="o-table">
	<tr>
		<th scope="row" role="rowheader">Type</th>
		<td><code>String</code></td>
	</tr>
	<tr>
		<th scope="row" role="rowheader">Required</th>
		<td><code>true</code></td>
	</tr>
</table>

Describes the support status of the component's major version. **Must** be one of:
- `active`: feature development ongoing, bug reports will be gratefully received and acted upon promptly
- `maintained`: not actively developed but reproducible bugs will be fixed promptly and work done where necessary to maintain compatibility with browsers and other components
- `deprecated`: not actively developed, not recommended for new projects, only the most disabling bugs will be addressed and only when time allows, but existing implementations may still work
- `dead`: decommissioned entirely, will receive no support
- `experimental`: the component is not ready for production use

<pre class="o-manifest__example"><code class="o-syntax-highlight--json">{
	"supportStatus": "active"
}</code></pre>

### supportContact

<table class="o-layout__main__single-span o-manifest__table" data-o-component="o-table">
	<tr>
		<th scope="row" role="rowheader">Type</th>
		<td><code>Object</code></td>
	</tr>
	<tr>
		<th scope="row" role="rowheader">Required</th>
		<td><code>false</code></td>
	</tr>
</table>

Describes contact details a user can choose from to find support for this component. The owner(s) identified in the support options commit to:
- reviewing code prior to release
- signing off on deployments
- publishing and maintaining up to date releases and documentation
- decommissioning the component when appropriate
- provide support to the users of the component

The object _requires_ two properties:
- `email`: accepts a string. Is an email address that users can request support from. This email **must** be group or role based, not a named individual
- `slack`: accepts a string. Is a slack channel that users can go to for support. This <strong>must</strong> be in the format: organisation/channel-name

<pre class="o-manifest__example"><code class="o-syntax-highlight--json">{
	"supportContact": {
		"email": "origami.support@ft.com",
		"slack": "financialtimes/ft-origami"
	}
}</code></pre>


### ci
<table class="o-layout__main__single-span o-manifest__table" data-o-component="o-table">
	<tr>
		<th scope="row" role="rowheader">Type</th>
		<td><code>Object</code></td>
	</tr>
	<tr>
		<th scope="row" role="rowheader">Required</th>
		<td><code>false</code></td>
	</tr>
</table>
_This object is no longer used in the Origami manifest. It is documented here for the purpose of reference in case a component does still use it._. Describes a set of one or more URLs where build information can be found.
<pre class="o-manifest__example"><code class="o-syntax-highlight--json">{
	"ci": {
		"circle": "https://circleci.com/api/v1/project/owner/repo",
		"travis": "https://api.travis-ci.org/repos/owner/repo/builds.json",
		"jenkins": "https://jenkins.example.com/job/"
	}
}</code></pre>

circle</code>:	A CircleCI build status URL (https://circleci.com/api/v1/project/owner/repo)

### browserFeatures

<table class="o-layout__main__single-span o-manifest__table" data-o-component="o-table">
	<tr>
		<th scope="row" role="rowheader">Type</th>
		<td><code>Object</code></td>
	</tr>
	<tr>
		<th scope="row" role="rowheader">Required</th>
		<td><code>false</code></td>
	</tr>
</table>

Applies to `{ "origamiType": "module" }` only. Outlines the browser features required for the component's functionality.
The object accepts two properties:
- `required`: accepts an array. A list of [Polyfill Service](https://polyfill.io) features or [Modernizr](https://modernizr.com/docs/) tests, which the component assumes exists. If these features do not exist, the component may error.
- `optional`: accepts an array. A list of [Polyfill Service](https://polyfill.io) features or [Modernizr](https://modernizr.com/docs/) tests, which the component  will use if they are available in the browser. If not the component may offer different or reduced functionality, but with graceful degradation.

<pre class="o-manifest__example"><code class="o-syntax-highlight--json">{
	"origamiType": "module",
	"browserFeatures": {
		"required": [
		"customEvent"
		],
		"optional": [
			"IntersectionObserver",
			"IntersectionObserverEntry"
		]
	}
}</code></pre>

### serviceUrl

<table class="o-layout__main__single-span o-manifest__table" data-o-component="o-table">
	<tr>
		<th scope="row" role="rowheader">Type</th>
		<td><code>String</code></td>
	</tr>
	<tr>
		<th scope="row" role="rowheader">Required</th>
		<td><code>true</code>*</td>
	</tr>
</table>

*Applies to `{ "origamiType": "service" }` only. Is the URL on which the service is provided.

<pre class="o-manifest__example"><code class="o-syntax-highlight--json">{
	"origamiType": "service",
	"serviceUrl": "https://www.ft.com/__origami/service/build/"
}</code></pre>

### demosDefaults
<table class="o-layout__main__single-span o-manifest__table" data-o-component="o-table">
	<tr>
		<th scope="row" role="rowheader">Type</th>
		<td><code>Object</code></td>
	</tr>
	<tr>
		<th scope="row" role="rowheader">Required</th>
		<td><code>false</code></td>
	</tr>
</table>

It accepts an object. Describes default options to be applied to all demos.
The object accepts the following properties:
- `template`: This property is _required_ when setting demo defaults. Accepts a string. Describes the path to the mustache template to render
- `sass`: Accepts a string. Describes the path to the Sass file to compile.
- `js`: Accepts a string. Describes the JS file to build.
- `data`: Accepts an object. Describes data to populate to the mustache template with.
- `documentClasses`: Accepts an object. Names CSS classes to set on the `html` tag.
- `dependencies`: Accepts an array. Is a list of other components that are only needed for demos, which will be loaded via the [Build Service](https://www.ft.com/__origami/service/build)

<pre class="o-manifest__example"><code class="o-syntax-highlight--json">{
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
<table class="o-layout__main__single-span o-manifest__table" data-o-component="o-table">
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
- `name`: This property is _required_. Accepts a string. Demo name which will be used as the name of the outputted html file
- `title`: This property is _required_. Accepts a string. A title for the demo which will appear when listed in the Registry
- `description`: This property is _required_. Accepts a string. An explanation of the purpose of the demo
- `template`: This property is _required_. Accepts a string. Describes the path to the demo-specific mustache template to render
- `sass`: Accepts a string. Describes the path to the demo-specific Sass file to compile.
- `js`: Accepts a string. Describes the path to the demo-specific JS file to build.
- `data`: Accepts an object. Describes to populate to the component-specific mustache template with
- `documentClasses`: Accepts an object. Names CSS classes to set on the component-specific `html` tag
- `dependencies`: Accepts an array. Is a list of other components that are only needed a this specific demo, which will be loaded via the [Build Service](https://www.ft.com/__origami/service/build)
- `hidden`: Accepts a boolean. Whether the demo should be hidden in the Registry
- `display_html`: Accepts a boolean. Whether the demo should have a HTML tab in the Registry (defaults to true)

<pre class="o-manifest__example"><code class="o-syntax-highlight--json">{
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
			"documentClasses": "demo-striped-table-container"
		},
		{
			"name": "pa11y",
			"description": "Hidden test for pa11y",
			"hidden": true,
			"template": "demos/src/pa11y.mustache"
		}
	]
}</code></pre>

### Example

This example joins all of the property snippets outlined above:

<pre class="o-manifest__example"><code class="o-syntax-highlight--json">{
	"description": "Branded tables",
	"origamiType": "module",
	"origamiVersion": 1,
	"keywords": ["table", "rows", "columns"],
	"origamiCategory": "components",
	"support": "https://github.com/Financial-Times/o-table/issues",
	"supportStatus": "active",
	"supportContact": {
			"email": "origami.support@ft.com",
			"slack": "financialtimes/ft-origami"
		}
	"browserFeatures": {
		"required": [
		"customEvent"
		],
		"optional": [
			"IntersectionObserver",
			"IntersectionObserverEntry"
		]
	},
	"demosDefaults": {
		"template": "demos/src/demo.mustache"
		"sass": "demos/src/demo.scss",
		"js": "demos/src/demo.js"
		"data": {
			"striped-rows": true
		},
		"documentClasses": "demo-container",
		"dependencies": ["o-normalise"]
	},
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
			"documentClasses": "demo-striped-table-container"
		},
		{
			"name": "pa11y",
			"description": "Hidden test for pa11y",
			"hidden": true,
			"template": "demos/src/pa11y.mustache"
		}
	]
}</code></pre>
