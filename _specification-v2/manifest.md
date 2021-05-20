---
title: Origami.json Manifest Specification
description: A specification which describes the required structure of an origami.json manifest file.
cta: Read the manifest spec

# Redirect from legacy URLs
redirect_from:
  - /docs/syntax/origamijson/

# Navigation config
nav_display: true
nav_label: Manifest
nav_heading_selector: h1, h2, h3
nav_order: 25
---

# {{page.title}}

`origami.json` is a
<a href="https://www.json.org/"
class="o-typography-link--external">
	<abbr title="JavaScript Object Notation">
		JSON
	</abbr>
</a>
file responsible for describing various aspects of an Origami project.

## Properties

### origami

<table class="o-manifest__table o-table o-table--compact o-table--row-headings o-table--vertical-lines o-table--horizontal-lines" data-o-component="o-table">
	<tr>
		<th scope="row" role="rowheader">Type</th>
		<td><code>String</code></td>
	</tr>
	<tr>
		<th scope="row" role="rowheader">Required</th>
		<td><code>true</code></td>
	</tr>
</table>

The version of Origami to which the project conforms.

**Must** be set to `"2.0"`.

<pre><code class="o-syntax-highlight--json">{
	"origami": "2.0"
}</code></pre>

### type

<table class="o-manifest__table o-table o-table--compact o-table--row-headings o-table--vertical-lines o-table--horizontal-lines" data-o-component="o-table">
	<tr>
		<th scope="row" role="rowheader">Type</th>
		<td><code>String</code></td>
	</tr>
	<tr>
		<th scope="row" role="rowheader">Required</th>
		<td><code>true</code></td>
	</tr>
</table>

Defines the type of Origami project that the manifest belongs to. **Must** be set to a string, e.g.:
- `"component"`: A front-end component that follows [the component specification](/spec/v2/components/)
- `"imageset"`: A set of images that have an alias on the Origami Image Service
- `"service"`: An HTTP service
- `"cli"`:	A command line tool
- `"library"`:	A library that is not a front-end component
- `"website"`: Origami websites that aren't intended to be services
- `"config"`: Projects that are configuration for other projects
- `"example"`: Example and boilerplate projects
- `"action"`: A [GitHub Action](https://github.com/features/actions)
- `"meta"`: Repository-only projects that relate to how Origami works

<pre><code class="o-syntax-highlight--json">{
	"type": "component"
}</code></pre>

### status

<table class="o-manifest__table o-table o-table--compact o-table--row-headings o-table--vertical-lines o-table--horizontal-lines" data-o-component="o-table">
	<tr>
		<th scope="row" role="rowheader">Type</th>
		<td><code>String</code></td>
	</tr>
	<tr>
		<th scope="row" role="rowheader">Required</th>
		<td><code>true</code></td>
	</tr>
</table>

Describes the status of the project. **Must** be one of:
- `active`: feature development ongoing, bug reports will be gratefully received and acted upon promptly
- `maintained`: not actively developed but reproducible bugs will be fixed promptly and work done where necessary to maintain compatibility with platforms and other projects
- `deprecated`: not actively developed, not recommended for new projects, only the most disabling bugs will be addressed and only when time allows, but existing implementations may still work
- `dead`: decommissioned entirely, will receive no support
- `experimental`: the project is not ready for production use

<pre><code class="o-syntax-highlight--json">{
	"status": "active"
}</code></pre>

## Example

This example joins all of the property snippets outlined above:

<pre><code class="o-syntax-highlight--json">{
	"origami": "2.0",
	"type": "component",
	"status": "active"
}</code></pre>
