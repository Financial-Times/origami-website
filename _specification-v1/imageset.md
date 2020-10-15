---
title: imageset.json Manifest Specification
description: A specification which describes the required structure of an imageset.json manifest file.
cta: Read the imageset manifest spec

# Navigation config
nav_display: true
nav_label: Imageset
nav_heading_selector: h1, h2, h3
---

# {{page.title}}

`imageset.json` is a <a href="https://www.json.org/" class="o-typography-link--external"><abbr title="JavaScript Object Notation">JSON</abbr></a> format file that is responsible for describing various aspects of an Origami Imageset.

## Properties

### sourceDirectory

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

**Must** be a the relative path to the folder which contains the images within the imageset.
<pre><code class="o-syntax-highlight--json">{
	"sourceDirectory": "src"
}</code></pre>

### scheme

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

Defines the custom url scheme for images in this imageset when requested via the [Origami Image Service](https://www.ft.com/__origami/service/image/v2/), this **must** be a unique name across all the imagesets:
<pre><code class="o-syntax-highlight--json">{
	"scheme": "ftanimal"
}</code></pre>

### images

<table class="o-manifest__table o-table o-table--compact o-table--row-headings o-table--vertical-lines o-table--horizontal-lines" data-o-component="o-table">
	<tr>
		<th scope="row" role="rowheader">Type</th>
		<td><code>Array</code></td>
	</tr>
	<tr>
		<th scope="row" role="rowheader">Required</th>
		<td><code>true</code></td>
	</tr>
</table>

A list of image objects for each image in the imageset.
Each object in the list accepts the following properties:

**required**:
- `name`: type `String`. The name which will be used together with the <a href="#scheme">scheme</a> to requested the image via the [Origami Image Service](https://www.ft.com/__origami/service/image/v2/)
- `extension`: type `String`. The extension for the file type of the image
- `path`: type `String`. The relative path to the image within the imageset
- `previousHash`: type `String` or `null` or `undefined`. The previous hash of the image, this will be `null` or `undefined` if the image has never been updated
- `hash`: type `String`. The SHA-512 hash value of the image
- `url`: type `String`. The production [Origami Image Service](https://www.ft.com/__origami/service/image/v2/) url which points to the image


<pre><code class="o-syntax-highlight--json">{
	"images": [
		{
			"name": "cat",
			"extension": "svg",
			"path": "src/cat.svg",
			"previousHash": "a6441d64330b058d829f17d515864c2a2b0a8232d69c0a547edbe4c959967dfabad9b91df9670b1126273880fd6648e9c62a88839ee0467f9aa9e5006f7e0406",
			"hash": "a6441d64330b058d829f17d515864c2a2b0a8232d69c0a547edbe4c959967dfabad9b91df9670b1126273880fd6648e9c62a88839ee0467f9aa9e5006f7e0406",
			"url": "https://origami-images.ft.com/ftanimal/v1/cat-a6441d64330b058d829f17d515864c2a2b0a8232d69c0a547edbe4c959967dfabad9b91df9670b1126273880fd6648e9c62a88839ee0467f9aa9e5006f7e0406"
		},
	]
}</code></pre>

## Example

This example joins all of the property snippets outlined above:

<pre><code class="o-syntax-highlight--json">{
	"sourceDirectory": "src",
	"scheme": "ftanimal",
	"images": [
		{
			"name": "cat",
			"extension": "src",
			"path": "src/cat.svg",
			"previousHash": "a6441d64330b058d829f17d515864c2a2b0a8232d69c0a547edbe4c959967dfabad9b91df9670b1126273880fd6648e9c62a88839ee0467f9aa9e5006f7e0406",
			"hash": "a6441d64330b058d829f17d515864c2a2b0a8232d69c0a547edbe4c959967dfabad9b91df9670b1126273880fd6648e9c62a88839ee0467f9aa9e5006f7e0406",
			"url": "https://origami-images.ft.com/ftanimal/v1/cat-a6441d64330b058d829f17d515864c2a2b0a8232d69c0a547edbe4c959967dfabad9b91df9670b1126273880fd6648e9c62a88839ee0467f9aa9e5006f7e0406"
		},
	]
}</code></pre>