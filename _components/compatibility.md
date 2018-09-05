---
title: Compatibility

# Navigation config
nav_display: true
nav_label: Compatibility
nav_order: 30
---
# {{ page.title }}


## Core & enhanced experiences

`core` and `enhanced` are definitions we have for 'experiences' that we serve to a browser. The experience we serve depends on the presence of some features within the browser.

Generally, older browsers that don't support newer JavaScript features will get a `core` experience, and modern browsers will get the `enhanced` experience.

To determine whether or not a browser supports those features, we use a 'cuts the mustard' test.

### Cuts the mustard

#### Defining a <abbr title="Cuts The Mustard">CTM</abbr> test

This test checks browsers for some features that are only implemented by modern browsers. We recommend the following test:

<aside>This expression comes from the <abbr title="British Broadcasting Corporation">BBC</abbr>'s <a href="http://responsivenews.co.uk/post/18948466399/cutting-the-mustard" class="o-typography-link--external" target="\_blank" rel="noopener">post about <abbr title="Cuts The Mustard">CTM</abbr></a></aside>

<pre class="o-layout__main__full-span"><code class="o-syntax-highlight--javascript">var script = document.createElement('script');
var supportsDeferredScripts = "defer" in script && "async" in script;
window.cutsTheMustard = (typeof document.documentElement.dataset === 'object' && ('visibilityState' in document) && supportsDeferredScripts);</code></pre>

#### Toggling styling

The styling we choose to display rely on class names. Keeping with the experiences, we will be using `core` and `enhanced`. Origami components contain fallback styling for the browsers that fail the test. We need to toggle the class names based on the result of the test, and to avoid flashes of content we'll always assume that the experience we will be served is core, until proven otherwise.

Your `<html>` will need the `core` class:
<pre><code class="o-syntax-highlight--html">&lt;html class="core"></code></pre>

And we'll want to add a script to replace that class with `enhanced` if the browser _does_ pass the test:

<pre><code class="o-syntax-highlight--javascript">if (window.cutsTheMustard) {
	document.documentElement.classList.replace('core', 'enhanced');
}</code></pre>

Finally, we need to add instructions for our styling to handle the html class:
<pre><code class="o-syntax-highlight--css">.core .o--if-js,
.enhanced .o--if-no-js {
	display: none !important;
}</code></pre>

#### Loading JavaScript asynchronously

If our browser passes the test and there is JavaScript that should only be served for the `enhanced` experience, we can load the JavaScript dynamically.

If there is JavaScript to execute regardless of the experience served to the browser, we should add a `<script>` element to load that JavaScript.

<pre><code class="o-syntax-highlight--javascript">&lt;script>
	(function(src) {
		if (window.cutsTheMustard) {
			script.async = script.defer = true;
			script.src = src;
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(script, s);
		}
	}('https://example.com/main.js));
&lt;/script></code></pre>

<aside>We've put the full implementation of our <abbr title="Cuts The Mustard">CTM</abbr> test <a href='https://codepen.io/ft-origami/pen/rZjzbw' class="o-typography-link--external" target="\_blank" rel="noopener">on Codepen</a></aside>

## Browser support

<aside>The <a href="https://docs.google.com/document/d/1mByh6sT8zI4XRyPKqWVsC2jUfXHZvhshS5SlHErWjXU/" class="o-typography-link--external" target="\_blank" rel="noopener">formal resources</a> for the <abbr title="Financial Times">FT</abbr>'s browser support are available to <abbr title="Financial Times">FT</abbr> staff.</aside>

Origami components conform to the <abbr title="Financial Times">FT</abbr>'s browser support standard, which looks like this:


##### DESKTOP
<table class="o-table o-table--row-stripes o-layout__main__single-span" data-o-component="o-table">
	<thead>
		<tr>
			<th>Browser</th>
			<th>Enhanced</th>
			<th>Core</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Chrome</td>
			<td>Latest</td>
			<td>—</td>
		</tr>
		<tr>
			<td>Chromium</td>
			<td>—</td>
			<td>Latest</td>
		</tr>
		<tr>
			<td>Edge</td>
			<td>Latest</td>
			<td>–</td>
		</tr>
		<tr>
			<td>Firefox</td>
			<td>Latest</td>
			<td>–</td>
		</tr>
		<tr>
			<td><abbr title="Internet Explorer">IE</abbr></td>
			<td>11</td>
			<td>9</td>
		</tr>
		<tr>
			<td>Opera</td>
			<td>—</td>
			<td>Latest</td>
		</tr>
		<tr>
			<td>Safari</td>
			<td>10 (6.1)</td>
			<td>6</td>
		</tr>
	</tbody>
</table>

##### MOBILE
<table class="o-table o-table--row-stripes o-layout__main__single-span" data-o-component="o-table">
	<thead>
		<tr>
			<th>Browser</th>
			<th>Enhanced</th>
			<th>Core</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Android Native</td>
			<td>—</td>
			<td>4</td>
		</tr>
		<tr>
			<td>BlackBerry Native</td>
			<td>–</td>
			<td>10</td>
		</tr>
		<tr>
			<td>Chrome</td>
			<td>Latest</td>
			<td>—</td>
		</tr>
		<tr>
			<td>Firefox</td>
			<td>—</td>
			<td>Latest</td>
		</tr>
		<tr>
			<td>Safari</td>
			<td>9</td>
			<td>4</td>
		</tr>
		<tr>
			<td>Samsung Native</td>
			<td>5 (3)</td>
			<td>—</td>
		</tr>
	</tbody>
</table>

##### INTERNAL PRODUCTS
<table class="o-table o-table--row-stripes o-layout__main__single-span" data-o-component="o-table">
	<thead>
		<tr>
			<th>Browser</th>
			<th>Enhanced</th>
			<th>Core</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Chrome</td>
			<td>Latest</td>
			<td>—</td>
		</tr>
		<tr>
			<td>Firefox</td>
			<td>Latest</td>
			<td>—</td>
		</tr>
		<tr>
			<td><abbr title="Internet Explorer">IE</abbr></td>
			<td>11</td>
			<td>—</td>
		</tr>
		<tr>
			<td>Safari</td>
			<td>Latest</td>
			<td>—</td>
		</tr>
	</tbody>
</table>

## Polyfill service

In the physical world, 'Polyfilla' is a type of plaster that is used to fill in small holes in walls. In web development, polyfills are snippets of code that implement a feature on browsers that do not natively support that feature. It means that we can write modern JavaScript without having to invest a large amount of time in making it work in older browsers.

What can be time consuming, is identifying the polyfills we need, so for that, we use and maintain the <a href="http://polyfill.io" class="o-typography-link--external" target="\_blank" rel="noopener">Polyfill Service</a> which hosts all of its own documentation.
