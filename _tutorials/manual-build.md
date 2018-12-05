---
title: The manual build process
---

# {{page.title}}

Adding Origami components to your product through the manual build process gives you more granular control over their styling and their behaviour. It requires more set up though, so we're providing an in-depth walkthrough for building a page for an article about fruit.

This tutorial assumes that:
- You have not implemented a build step
- You are using a UNIX-like OS with a bash shell
- You are familiar with JavaScript, and <abbr href="https://sass-lang.com/" title="Sassy Cascading Style Sheets"><a href="https://sass-lang.com/">SCSS</a></abbr>
- You have a basic understanding of package managers ([Bower](https://bower.io/), <abbr href="https://npmjs.com/" title="Node Package Manager"><a href="https://www.npmjs.com/">npm</a></abbr>)

## Setting up your sandbox
We will need a folder structure for our page. So let's begin by creating a new directory to work in.

<pre><code class="o-syntax-highlight--bash">mkdir o-fruit-demo && cd o-fruit-demo</code></pre>

Eventually, we'll have a folder structure that separates our <abbr title="Hypertext Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr>, JavaScript, dependencies and assets. Let's start by adding an `index.html` to the root of our new project with some boilerplate <abbr title="Hypertext Markup Language">HTML</abbr>:

<pre><code class="o-syntax-highlight--html">&lt;!DOCTYPE html>
&lt;html lang="en">
	&lt;head>
		&lt;meta charset="utf-8">
		&lt;title>My First Origami Project&lt;/title>

		&lt;link rel="stylesheet" href="public/main.css">
		&lt;script async src="public/main.js">&lt;/script>
	&lt;/head>
	&lt;body>

	&lt;/body>
&lt;/html></code></pre>

<aside class="no-padding">
<p>Our folder structure so far:</p>
<pre><code class="o-syntax-highlight--bash">o-fruit-demo
└── index.html</code>
</pre></aside>

The `link` and the `script` tags are pointing at our public assets, which will be available once we have performed a build step and compiled our source code. That source code will be written in plain Javascript and in <abbr title="Sassy Cascading Style Sheets">SCSS</abbr>, and each of those will be in their individual folders in our project:

<pre><code class="o-syntax-highlight--bash">mkdir src && touch src/main.js src/main.scss</code></pre>

Now we're ready to start adding components to our page.

## Component <abbr title="Hypertext Markup Language">HTML</abbr>

<aside class="no-padding">
<p>Our folder structure so far:</p>
<pre><code class="o-syntax-highlight--bash">o-fruit-demo
├── index.html
└── src/
    └── main.js
    └── main.scss</code>
</pre>
</aside>

With the exception of JavaScript-only components, all of Origami's components rely on markup. This markup, combined with the styling and the functionality, is what determines how a component will look and behave on a page. So before we can style anything, we'll need to add some component markup to our page.

[o-grid](https://registry.origami.ft.com/components/o-grid) will determine how our content sits on our page. To begin, let's add the following to the `<body>` in our `index.html`:

<pre><code class="o-syntax-highlight--html">&lt;div class="o-grid-container">
	&lt;div class="o-grid-row o-typography-wrapper" data-o-grid-colspan="center 8">
	&lt;/div>
&lt;/div></code>
</pre>

We want to share some fruit facts, so let's add some content to that inner `div`:
<pre style="white-space: pre-line"><code class="o-syntax-highlight--html">&lt;h1>Funky Fruit Facts&lt;/h1>
&lt;h2>Durian&lt;/h2>
&lt;p>Due to its overpowering smell, durian has been banned on many types of public transport across Thailand, Japan and Hong Kong. In Singapore, the fruit is banned across all types of public transportation and even taxis have signs to let you know they refuse to carry passengers transporting the smelly fruit.&lt;/p>
&lt;h2>Dragonfruit&lt;/h2>
&lt;p>The cactus flower that produces dragon fruit survives only a single night. It blooms in the evening, ready for pollination by bats and moths, and wilts the very next day. The very brief pollination period, however, is sufficient for the plant to bear fruits.&lt;/p>
&lt;h2>Naseberry, aka Sapodilla&lt;/h2>
&lt;p>The sapodilla tree supplies the building blocks for a number of products utilized by humans.  Long ago, the Mayas and Aztecs would boil its ‘chicle’ sap, mold it into thick blocks and cut them into small pieces to chew. They were making the first chewing gum!&lt;/p></code></pre>

Finally, we want to showcase the popularity of each fruit in a sortable table. To do that, we're going to use the `o-table` component.

This is a good time to highlight how the manual build process provides more flexibility, because we don't need to include all the table variations provided by Origami - we can include the minimum features we need.

Let's head over to <a href="https://registry.origami.ft.com/components/o-table#demo-row-stripes"  target="\_blank" >the striped variation of o-table in the registry</a>, and copy that <abbr title="Hypertext Markup Language">HTML</abbr> in under our content.

<aside>If you'd like to double check your work, we've put our <code>index.html</code> up <a href="https://codepen.io/ft-origami/pen/EprYzR"  target="\_blank" >on CodePen</a>.</aside>

## Bower & the Origami Registry

Now that we have set up the scaffolding for our page, we need to install those components so we can access their respective styles and functionalities.

All [Origami-compliant components](/TODO) are available for installation via Bower. They live in the [Origami Registry](https://registry.origami.ft.com/components), and are made visible to Bower through the <a href="https://origami-bower-registry.ft.com/"  target="\_blank" >Origami Bower Registry</a>.

This means that, in order for Bower to find the components we will be installing, we need to tell it where to look. For that, we use a `.bowerrc` file in the root of our directory:

<pre><code class="o-syntax-highlight--json">{
	"registry": {
		"search": [
			"https://origami-bower-registry.ft.com",
			"https://registry.bower.io"
		]
	}
}</code>
</pre>

<aside class="no-padding">
<p>Our folder structure so far:</p>
<pre><code class="o-syntax-highlight--bash">o-fruit-demo
├── .bowerrc
├── index.html
└── src/
    └── main.js
    └── main.scss</code>
</pre>
</aside>

Next, we need to install our components as direct dependencies, because they are crucial to our page. We will opt to install them through the command line, and save them to a `bower.json`. For the scope of this tutorial, all that needs to be in that file right now is:

<pre><code class="o-syntax-highlight--json">{
	"name": "o-fruit-demo"
}</code>
</pre>

Now we need to install our components, and we can save them all to our file by running:

<pre><code class="o-syntax-highlight--bash">bower i --save o-grid o-typography o-colors o-table</code></pre>

And your `bower.json` should now look something like this:

<pre><code class="o-syntax-highlight--json">{
  "name": "o-fruit-demo",
  "dependencies": {
    "o-grid": "^{{site.data.components.o-grid.version}}",
    "o-typography": "^{{site.data.components.o-typography.version}}",
    "o-colors": "^{{site.data.components.o-colors.version}}",
    "o-table": "^{{site.data.components.o-table.version}}"
  }
}</code>
</pre>

## The Build Step

<aside class="no-padding">
<p>Our folder structure so far:</p>
<pre><code class="o-syntax-highlight--bash">o-fruit-demo
├── .bowerrc
├── bower.json
├── bower_components/
├── index.html
└── src/
    └── main.js
    └── main.scss</code>
</pre>
</aside>

So that we can see our progress as we build the page, now is the time to implement our build step.
For that, we are going to use the [Origami Build Tools](https://github.com/Financial-Times/origami-build-tools). As long as you have Node.js installed, you can run:

<pre><code class="o-syntax-highlight--bash">npx origami-build-tools [command]</code></pre>

There are many commands that the Origami Build Tools provide, but the one we will be focussing on today is `build`.

We want to compile our source code (which we don't have yet) into a public folder that our <abbr title="Hypertext Markup Language">HTML</abbr> can read. We will need to pass the `npx origami-build-tools build` command a few arguments to do so:
- `--build-folder` is set to the name and directory of our public assets folder.
- `--sass` points at the <abbr title="Sassy Cascading Style Sheets">SCSS</abbr> that we want to compile into css to use in our public folder.
- `--js` points at the JavaScript that we want to transpile into ES5 in our public folder.
- `--watch` is a flag that will trigger a rebuild when we make changes to our project.

Altogether, the command looks like this:
<pre class="o-layout__main__full-span"><code class="o-syntax-highlight--bash">npx origami-build-tools build --build-folder="./public/" --sass="./src/main.scss" --js="./src/main.js" --watch</code></pre>

You can leave that running in the background, and open your `index.html` in a browser to see the styling changes we'll be making in the next step.

## Component Styling

<aside class="no-padding">
<p>Our folder structure so far:</p>
<pre><code class="o-syntax-highlight--bash">o-fruit-demo
── .bowerrc
├── bower.json
├── bower_components/
├── index.html
├── public/
│   ├── main.css
│   └── main.js
└── src/
    └── main.js
    └── main.scss</code>
</pre>
</aside>

Now we can begin styling our components. For this, all of our work is going to happen in our `src/main.scss` file.

All Origami components have a [silent mode](/docs/components/silent-mode/). When silent mode is 'on' (or `true`), the components' <abbr title="Sassy Cascading Style Sheets">SCSS</abbr> will not be compiled — instead, only its mixins and functions will be available. In this tutorial, we are going to use a mix of 'on' and 'off' silent modes for components.

### Silent Mode: Off

Let's start off with [o-grid](https://registry.origami.ft.com/components/o-grid). It is likely we'll want most of the features that o-grid provides, so we'll include it with silent mode switched off (or `false`). For now, all we need in our `main.scss` is:

<pre><code class="o-syntax-highlight--scss">$o-grid-is-silent: false;
@import 'o-grid/main';</code></pre>

If we open our `index.html` in a browser window, we'll see that our content is now centred on the page. This is because of the classes that we added to our outside `div` at the very beginning. Since we've requested all of the `o-grid` styling, the styling applies to those classes as soon as we include the component's <abbr title="Sassy Cascading Style Sheets">SCSS</abbr>.

We added an [o-typography](https://registry.origami.ft.com/components/o-typography) class to our inner div at the beginning of the tutorial, as well. It will apply styling just as the grid did, so the next—unguided—step, is for you to implement `o-typography` in the same way we implemented `o-grid` above.

Look at your `index.html` in the browser when you're done - your headings and paragraphs should have received font families and styling of their own.

### Silent Mode: On

We'll be using [o-colors](https://registry.origami.ft.com/components/o-colors), which has a wide variety of colours in its palette. As with every other component, the `o-colors` silent mode variable is set to `true` by default to prevent outputting more <abbr title="Cascading Style Sheets">CSS</abbr> than we really need. And since we don't need all of the colours in the palette for this page, we will leave the silent mode for the component as is.

o-colors comes  with predefined use cases. These use cases are not a valid hex code but they refer to the name of a colour within our brand palette. This means we'll need to use two mixins to get the right colour for our page:

<pre class="o-layout__main__full-span"><code class="o-syntax-highlight--scss">@import 'o-colors/main';

body {
	background-color: oColorsGetPaletteColor(oColorsGetUseCase(page, background));
}</code></pre>

As soon as your build has completed, visit your `index.html` again. You should have the pink that is characteristic of the FT as a background colour.

We're going to get a little more specific with [o-table](https://registry.origami.ft.com/components/o-table) since we're after a particular variation.

We only want the base styling of a table, and some stripes to tell each row apart:

<pre><code class="o-syntax-highlight--scss">@import 'o-table/main';
@include oTable($opts: ('stripes'));</code></pre>

With this, we've added all of the styling we needed for our page, so let's take another look at our `index.html` and admire our handywork.

<aside>If you'd like to double check your work, we've put our <code>main.scss</code> up <a href="https://codepen.io/ft-origami/pen/VBgwwJ"  target="\_blank" >on CodePen</a>.</aside>

### Selecting A Brand

By default Origami components are tailored for public facing, ft.com products -- these are known as "master brand" products. But Origami components offer tailored support for other contexts with component [branding](/docs/components/branding/).

To choose a brand other than the default "master" brand, set the `$o-brand` <abbr title="Sassy Cascading Style Sheets">SCSS</abbr> variable at the start of your root <abbr title="Sassy Cascading Style Sheets">SCSS</abbr> file, before importing any components.

To see this in action we can set our brand to "internal":
<pre><code class="o-syntax-highlight--scss">$o-brand: "internal"; // Set brand before anything else.
@import 'o-colors/main';
//...</code></pre>

As the colour palette for the "internal" brand does not include "paper" (FT pink), the background we set with `o-colors` and the stripes of `o-table` have changed. The typography of our project has also changed.

Now we will undo that by deleting `$o-brand: "internal";`, making our project default to the "master" brand again.

For a list of supported brands and their purpose see [component brands](/docs/components/branding/).

## Component Functionality

The final step in our tutorial involves adding JavaScript to our components, and we'll be doing all of that work in `src/main.js`.

Not all Origami components use JavaScript. For example, of the components we have installed today, only `o-table` requires it.

Origami components listen for a custom event named `o.DOMContentLoaded` in order to initialise. We'll need to add that to our project so that the `o-table` JavaScript can kick in.

<aside>There are multiple ways to <a href="/docs/components/initialising">initialise a component's JavaScript</a> when you are using Origami with the manual build process</aside>

We'll need to add this to our file:

<pre class="o-layout__main__full-span"><code class="o-syntax-highlight--js">require('o-table');

// Wait until the page has loaded
if (document.readyState === 'interactive' || document.readyState === 'complete') {
	document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
}

document.addEventListener('DOMContentLoaded', function() {
	// Dispatch a custom event that will tell all required modules to initialise
	document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
});</code>
</pre>

Now you can sort fruit alphabetically by name or characteristic, or numerically by popularity.

## Next steps

We've given you an overview of how to build components manually. There is more information about each component, its variations, its individual behaviour and configuration in the [Origami Registry](https://registry.origami.ft.com/components). Here we've covered the fundamentals, but there are a few more aspects to the development of a product with Origami components that are important for compatibility and consistency, and we encourage you to read more about them:

- Origami components have been developed to provide a 'core' experience for older browsers, and an 'enhanced' experience for newer ones, and we check for this using a ['cuts the mustard'](/docs/components/compatibility/#cuts-the-mustard) test, which can determine which experience to serve to which browser.
- Another service we provide is the <a href="https://polyfill.io"  target="\_blank" >Polyfill Service</a>, which makes newer APIs available to older browsers, allowing us to write code to modern standards.
- Learn more about Origami supported ['brands'](/docs/components/branding/), which can change the appearance of components and provide unique features for different projects.
- [Component versioning](/docs/components/versioning) is also important when building and maintaining products that use Origami components.
