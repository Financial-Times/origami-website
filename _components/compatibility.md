---
title: Compatibility
---
# {{ page.title }}


## Core & enhanced experiences

Origami components may present themselves differently depending on the browser they are displayed in. This means that browsers fall into two different categories: `core` and `enhanced`.
Generally, older browsers that don't support newer JavaScript features fall under `core`, and we consider most modern browsers `enhanced`.

We use a 'cuts the mustard' test to determine which category the browser requesting our components falls into.

### Cuts the mustard

#### Defining a CTM test

This test checks browsers for some features that are only implemented by modern browsers. We recommend the following test:

<aside>This expression comes from the BBC's <a href="http://responsivenews.co.uk/post/18948466399/cutting-the-mustard" class="o-typography-link--external" target="\_blank" rel="noopener">post about CTM</a></aside>

<pre class="o-layout__main__full-span"><code class="o-syntax-highlight--javascript">var cutsTheMustard = ('querySelector' in document && 'localStorage' in window && 'addEventListener') in window);</code></pre>

#### Toggling styling

The styling we choose to display will rely on class names. Keeping with our categories, we will be using `.core` and `.enhanced`. Origami components contain fallback styling for the browsers that fail the test. We need to toggle the classnames based on the result of the test, and to avoid flashes of content, we'll always assume that the experience we will be served is core, until proven otherwise.

Your HTML source will need the `.core` class:
<pre><code class="o-syntax-highlight--html">&lt;html class="core"></code></pre>

And we'll want to add a script to replace that class with `.enhanced` if the browser _does_ pass the test:

<pre class="o-layout__main__full-span"><code class="o-syntax-highlight--javascript">if (cutsTheMustard) {
	document.documentElement.className = document.documentElement.className.replace(/\bcore\b/g, 'enhanced');
}</code></pre>

Finally, we need to add instructions for our styling to handle the html class:
<pre><code class="o-syntax-highlight--css">.core .o--if-js,
.enhanced .o--if-no-js {
	display: none !important;
}</code></pre>

#### Loading JavaScript asynchronously

If our test passes, then we can load any JavaScript our page might need, and we'll need to make sure it happens asynchronously so that it doesn't block any rendering:

<pre><code class="o-syntax-highlight--javascript">&lt;script>
	(function(src) {
		if (cutsTheMustard) {
			var o = document.createElement('script');
			o.async = o.defer = true;
			o.src = src;
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(o, s);
		}
	}('https://example.com/main.js));
&lt;/script></code></pre>

<aside>We've put the full implementation of our CTM test <a href='https://codepen.io/ft-origami/pen/rZjzbw' class="o-typography-link--external" target="\_blank" rel="noopener">on Codepen</a></aside>

## Browser support

Origami components conform to the FT's browser support standard, which looks like this:

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
			<td>IE</td>
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
			<td>IE</td>
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
