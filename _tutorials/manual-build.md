---
title: The manual build process
---

# {{page.title}}

Adding Origami components to your product through the manual build process gives you more granular control over their styling and their behaviour. It requires more set up though, so we're providing an in-depth walkthrough for building a page for an article about fruit.

This tutorial assumes that:
- You have not implemented a build step
- You are using a UNIX-like OS with a bash shell
- You are familiar with [Node.js](https://nodejs.org/en/), [Git](https://www.git-scm.com/),
[Bower](https://bower.io/) and [SCSS](https://sass-lang.com/)

## Setting up your sandbox
We will need a folder structure for our page. So let's begin by creating a new directory to work in.

<pre><code class="o-syntax-highlight--html">mkdir o-fruit-demo && cd o-fruit-demo</code></pre>

Eventually, we'll have a folder tree that separates our HTML, CSS, JavaScript, dependencies and assets. But first, we'll start by adding an `index.html` to the root of our new project with some boilerplate HTML:

<pre><code class="o-syntax-highlight--html">&lt;!DOCTYPE html>
&lt;html>
	&lt;head>
		&lt;meta charset="utf-8">
		&lt;title>My First Origami Project&lt;/title>

		&lt;link rel="stylesheet" href="/main.css">
		&lt;script async href="/main.js">&lt;/script>

	&lt;/head>
	&lt;body>

	&lt;/body>
&lt;/html></code></pre>

<aside style="border-left: 0;padding-left:0">
<p class="o-layout__rule-left">Our tree structure so far:</p>
<pre><code class="o-syntax-highlight--html">o-fruit-demo
├── index.html</code>
</pre></aside>

The `link` and the `script` tags are pointing at our public assets, which will be available once we have performed a build step and compiled our source code. First, we need to put together that source code. It will be written in plain Javascript and in SCSS, and each of those will be in their individual folders in our project:

<aside style="border-left: 0;padding-left:0;grid-row: span 7;">
<p class="o-layout__rule-left">Our tree structure so far:</p>
<pre><code class="o-syntax-highlight--html">o-fruit-demo
├── index.html
└── src
    ├── js
    │   └── main.js
    └── scss
        └── main.scss</code>
</pre>
</aside>

<pre><code class="o-syntax-highlight--html">mkdir -p src src/js src/scss && touch src/js/main.js src/scss/main.scss</code></pre>

Now we're ready to start adding components to our page.

## Component HTML
With the exception of JavaScript-only components, all of Origami's components rely on markup. This markup, combined with the styling and the functionality, is what determines how a component will look and behave on a page. So before we can style anything, we'll need to add some component markup to our page.

[o-grid](/#TODO) will determine how our content sits on our page, so lets add the following to the `<body>` our `index.html`:

<pre><code class="o-syntax-highlight--html">&lt;div class="o-grid-container">
	&lt;div class="o-grid-row" data-o-grid-colspan="center 8">
	&lt;/div>
&lt;/div></code>
</pre>

We want to share some fruit knowledge, so let's add some content to that inner `div`:
<pre style="white-space: pre-line"><code class="o-syntax-highlight--html">&lt;h1>Funky Fruit&lt;/h1>  
&lt;h3>Durian&lt;/h3>
&lt;p>Due to its overpowering smell, durian has been banned on many types of public transport across Thailand, Japan and Hong Kong. In Singapore, the fruit is banned across all types of public transportation and even taxis have signs to let you know they refuse to carry passengers transporting the smelly fruit.&lt;/p>
&lt;h3>Dragonfruit&lt;/h3>
&lt;p>The cactus flower that produces dragon fruit survives only a single night. It blooms in the evening, ready for pollination by bats and moths, and wilts the very next day. The very brief pollination period, however, is sufficient for the plant to bear fruits.&lt;/p>
&lt;h3>Naseberry, aka Sapodilla&lt;/h3>
&lt;p>The sapodilla tree supplies the building blocks for a number of products utilized by humans.  Long ago, the Mayas and Aztecs would boil its ‘chicle’ sap, mold it into thick blocks and cut them into small pieces to chew. They were making the first chewing gum!&lt;/p></code></pre>

Finally, we want to showcase the popularity of each fruit in a sortable table. To do that, we're going to use the `o-table` component.

This is a good time to highlight how the manual build process provides more flexibility, because we don't need to stick to the Origami naming convention - we can give our table whatever class name we want.

Let's head over to <a href="https://registry.origami.ft.com/components/o-table#demo-row-stripes" class="o-typography-link--external" target="\_blank" rel="noopener">the striped variation of o-table in the registry</a>, and copy that HTML in under our content. However, instead of using the default `o-table` class, let's replace it with `fruit-table` in all of the elements' classes for that variation (`fruit-table--row-stripes`, `fruit-table__cell--numeric`, &c).

<!-- <aside>A single component can have many variations, and all the variations for all components can be found in the <a href="https://registry.origami.ft.com/components">Origami Registry</a>.</aside> -->

## Bower & the Origami Registry
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

Next, we need to install our components as direct dependencies. We will opt to install them through the command line,
