---
title: The manual build process
---

# {{page.title}}

Adding Origami components to your product through the manual build process gives you more granular control over their styling and their behaviour. It requires more set up though, so we're providing an in-depth walkthrough for building a page for an article about fruit.

This tutorial assumes that:
- You have not implemented a build step
- You are using a UNIX-like OS with a bash shell
- You are familiar with [Bower](https://bower.io/), [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/), and [SCSS](https://sass-lang.com/)

## Setting up your sandbox
We will need a folder structure for our page. So let's begin by creating a new directory to work in.

<pre><code class="o-syntax-highlight--html">mkdir o-fruit-demo && cd o-fruit-demo</code></pre>

Eventually, we'll have a folder tree that separates our HTML, CSS, JavaScript, dependencies and assets. Let's start by adding an `index.html` to the root of our new project with some boilerplate HTML:

<pre><code class="o-syntax-highlight--html">&lt;!DOCTYPE html>
&lt;html>
	&lt;head>
		&lt;meta charset="utf-8">
		&lt;title>My First Origami Project&lt;/title>

		&lt;link rel="stylesheet" href="public/main.css">
		&lt;script async src="public/main.js">&lt;/script>

	&lt;/head>
	&lt;body>

	&lt;/body>
&lt;/html></code></pre>

<aside style="border-left: 0;padding-left:0">

<p class="o-layout__rule-left">Our folder structure so far:</p>
<pre><code class="o-syntax-highlight--html">o-fruit-demo
├── index.html</code>
</pre></aside>

The `link` and the `script` tags are pointing at our public assets, which will be available once we have performed a build step and compiled our source code. We'll need to put together that source code before any compilation can happen. It will be written in plain Javascript and in SCSS, and each of those will be in their individual folders in our project:

<pre><code class="o-syntax-highlight--html">mkdir src && touch src/main.js src/main.scss</code></pre>

Now we're ready to start adding components to our page.

## Component HTML

<aside style="border-left: 0;padding-left:0;grid-row: span 7;">

<p class="o-layout__rule-left">Our folder structure so far:</p>
<pre><code class="o-syntax-highlight--html">o-fruit-demo
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
&lt;h3>Durian&lt;/h3>
&lt;p>Due to its overpowering smell, durian has been banned on many types of public transport across Thailand, Japan and Hong Kong. In Singapore, the fruit is banned across all types of public transportation and even taxis have signs to let you know they refuse to carry passengers transporting the smelly fruit.&lt;/p>
&lt;h3>Dragonfruit&lt;/h3>
&lt;p>The cactus flower that produces dragon fruit survives only a single night. It blooms in the evening, ready for pollination by bats and moths, and wilts the very next day. The very brief pollination period, however, is sufficient for the plant to bear fruits.&lt;/p>
&lt;h3>Naseberry, aka Sapodilla&lt;/h3>
&lt;p>The sapodilla tree supplies the building blocks for a number of products utilized by humans.  Long ago, the Mayas and Aztecs would boil its ‘chicle’ sap, mold it into thick blocks and cut them into small pieces to chew. They were making the first chewing gum!&lt;/p></code></pre>

Finally, we want to showcase the popularity of each fruit in a sortable table. To do that, we're going to use the `o-table` component.

This is a good time to highlight how the manual build process provides more flexibility, because we don't need to stick to the Origami naming convention - we can give our table whatever class name we want.

Let's head over to <a href="https://registry.origami.ft.com/components/o-table#demo-row-stripes" class="o-typography-link--external" target="\_blank" rel="noopener">the striped variation of o-table in the registry</a>, and copy that HTML in under our content. However, instead of using the default `o-table` class, let's replace it with `fruit-table` in all of the elements' classes for that variation (`fruit-table--row-stripes`, `fruit-table__cell--numeric`, etc).

<aside>If you'd like to double check your work, we've put our <code>index.html</code> <a href="#TODO" class="o-typography-link--external" target="\_blank" rel="noopener">up on CodePen</a>.</aside>

<!-- <aside>A single component can have many variations, and all the variations for all components can be found in the <a href="https://registry.origami.ft.com/components">Origami Registry</a>.</aside> -->

## Bower & the Origami Registry

Now that we have set up the scaffolding for our page, we need to install those components so we can access their respective styles and functionalities.

All [Origami-compliant components](/#TODO) are available for installation via Bower. They live in the [Origami Registry](/#TODO), and are made visible to Bower through the [Origami Bower Registry](https://origami-bower-registry.ft.com/).

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

<aside style="border-left: 0;padding-left:0;grid-row: span 7;">
<p class="o-layout__rule-left">Our folder structure so far:</p>
<pre><code class="o-syntax-highlight--html">o-fruit-demo
├── .bowerrc
├── index.html
└── src/
    └── main.js
    └── main.scss</code>
</pre>
</aside>

Next, we need to install our components as direct dependencies, because they are crucial to our page. We will opt to install them through the command line, and save them to a `bower.json`. For the scope of this tutorial, all that needs to be in the file right now is:

<pre><code class="o-syntax-highlight--json">{
	"name": "o-fruit-demo"
}</code>
</pre>

Now we need to install our components, and we can save them all to our file by running:

<pre><code class="o-syntax-highlight--html">bower i --save o-grid o-typography o-colors o-table</code></pre>

And your `bower.json` should now look something like this:

<!-- <aside style="border-left: 0;padding-left:0;grid-row: span 7;">
<p class="o-layout__rule-left">Our folder structure so far:</p>
<pre><code class="o-syntax-highlight--html">o-fruit-demo
├── .bowerrc
├── bower.json
├── bower_components/
├── index.html
└── src/
    └── main.js
    └── main.scss</code>
</pre>
</aside> -->

<aside>version version version lalala<a href="https://registry.origami.ft.com/components">Origami Registry</a>.</aside>

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

So that we can see our progress as we build the page, now is the time to implement our build step.
For that, we are going to use the [Origami Build Tools](https://github.com/Financial-Times/origami-build-tools). OBT is best installed globally, so that it is available in any directory where you choose to use Origami components.

<aside><a href="/#TODO">MORE ABOUT OBT</a></aside>

<pre><code class="o-syntax-highlight--html">npm i -g origami-build-tools</code></pre>

Once it is globally installed, we can use the tools by the alias `obt`. There are many commands that come with OBT, but the one we will be focussing on today is `build`.

We want to compile our source code (which we don't have yet) into a public folder that our HTML can read. We will need to pass the `obt build` command a few arguments to do so:
- `--build-folder` is set to the name and directory of our public assets folder.
- `--sass` points at the SCSS that we want to compile into css to use in our public folder.
- `--js` points at the JavaScript that we want to transpile into ES5 in our public folder.
- `--watch` is a flag that will trigger a rebuild when we make changes to our project.

Altogether, the command looks like this:
<pre class="o-layout__main__full-span"><code class="o-syntax-highlight--html">obt build --build-folder="./public/" --sass="./src/main.scss" --js="./src/main.js" --watch</code></pre>

You can leave that running in the background, and open your `index.html` in a browser to see the styling changes we'll be making in the next step.

## Component Styling

<aside style="border-left: 0;padding-left:0;grid-row: span 7;">
<p class="o-layout__rule-left">Our folder structure so far:</p>
<pre><code class="o-syntax-highlight--html">o-fruit-demo
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

All Origami components have a [silent mode](/#TODO). When silent mode is 'on' (or `true`), the components' SCSS will not be compiled — instead, only its mixins and functions will be available. In this tutorial, we are going to use a mix of 'on' and 'off' silent modes for components.

Let's start off with [o-grid](/#TODO). It is likely we'll want most of the features that o-grid provides, so we'll include it with silent mode switched off (or `false`). For now, all we need in our `main.scss` is:

<pre><code class="o-syntax-highlight--scss">$o-grid-is-silent: false;
@import 'o-grid/main';</code></pre>

If we open our `index.html` in a browser window, we'll see that our content is now centered on the page. This is because of the classes that we added to our outside `div` at the very beginning. Since we've requested all of the `o-grid` styling, the styling applies to those classes as soon as we include the component's SCSS.

Remember that we added an [o-typography](#TODO) class to our inner div at the beginning of the tutorial. It will apply styling just as the grid did, so the next—unguided—step, is for you to implement `o-typography` in the same way we implemented `o-grid` above.

Look at your `index.html` in the browser when you're done - your headings and paragraphs should have received font families and styling of their own.

When you're ready, we're going to do this differently for the rest of the components on our page. This will help us understand the power of building a page manually.

Every component has a silent mode variable, which is set to `true` by default. We don't need all of the colors in the palette for this page, so we will leave the silent mode as is, and add this to our `main.scss`:

<pre><code class="o-syntax-highlight--scss">@import 'o-colors/main';

body {
	background: oColorsGetPaletteColor('paper');
}</code></pre>

As soon as your build has completed, visit your `index.html` again. You should have the pink that is characteristic of the FT as a background color.

We're going to get a little more granular with [o-table](/#TODO). We're after a specific variation, _and_ we've given our table a class name of its own. Ultimately, we want the base styling of a table, but we also want some stripes to tell each row apart, and we want to style the numbers we'll be using, too:

<pre><code class="o-syntax-highlight--scss">@import 'o-table/main';

.fruit-table {
	@include oTableBase;

	&--row-stripes {
		@include oTableRowStripes;
	}

	&__cell--numeric {
		@include oTableCellNumeric;
	}
}</code></pre>

With this, we've added all of the styling we needed for our page, so let's take another look at our `index.html` and admire our handywork.

<aside>If you'd like to double check your work, we've put our <code>main.scss</code> <a href="/#TODO" class="o-typography-link--external" target="\_blank" rel="noopener">up on CodePen</a>.</aside>

## Component Functionality

The final step in our tutorial involves adding JavaScript to our components, and we'll be doing all of that work in `src/main.js`.

Not all Origami components use JavaScript. For example, of the components we have installed today, only `o-table` requires it.

Origami components listen for a custom event—`o.DOMContentLoaded`—in order to initialise. We'll need to add that to our project so that the `o-table` JavaScript can kick in.

<aside><a href="/#TODO">MOAR 'BOUT INITIALISING JS</a></aside>

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
