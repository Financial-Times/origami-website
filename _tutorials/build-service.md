---
title: The Build Service
---


# {{page.title}}

Using the Origami Build Service is the quickest way of getting Origami components to work in your product. The service bundles together the CSS and the JavaScript for all Origami components on a central server. You can then access specific component bundles by using a `link` or `script` tag.

<aside>You can find more detailed information on the Build Service's self hosted <a href="https://www.ft.com/__origami/service/build" class="o-typography-link--external" target="\_blank" rel="noopener">CodePen</a>, or <a href="https://jsbin.com/" class="o-typography-link--external" target="\_blank">API and technical documentation</a>.</aside>

Below is a step by step walkthrough for building a page for an article about fruit, with FT.com colors and fonts, and we'll include a few Origami components to do so.

## Setting up your sandbox
For this tutorial, we recommend you follow along by setting up your project in <a href="https://codepen.io/" class="o-typography-link--external" target="\_blank" rel="noopener">CodePen</a>, or <a href="https://jsbin.com/" class="o-typography-link--external" target="\_blank" rel="noopener">JSBin</a>.

There are usually three three parts to an Origami component; HTML, CSS and JavaScript. We're going implement one at a time to put together our page.

<aside>We'll be providing code snippets for you to follow, but you can also have a look at the <a href="https://codepen.io/ft-origami/full/ejLNNL" class="o-typography-link--external" target="\_blank" rel="noopener">result of the tutorial</a>.</aside>

Let's begin.

## Boilerplate HTML
We'll need to start with some boilerplate markup.

There are three things we want on a FT-like article page: a [grid](https://registry.origami.ft.com/components/o-grid), consistent [typography](https://registry.origami.ft.com/components/o-typography) and a background [color](https://registry.origami.ft.com/components/o-colors).

In order to get that, we'll need the foundation of our HTML to look like this:

<pre><code class="o-syntax-highlight--html">&lt;!DOCTYPE html>
&lt;html lang="en">
	&lt;head>
		&lt;meta charset="utf-8">
		&lt;title>My First Origami Page&lt;/title>
	&lt;/head>
	&lt;body class="o-colors-page-background">
		&lt;div class="o-grid-container o-typography-wrapper">
			&lt;div class="o-grid-row" data-o-grid-colspan="center 8">
			&lt;/div>
		&lt;/div>
	&lt;/body>
&lt;/html></code></pre>

<aside><a href="https://codepen.io/ft-origami/pen/GBXgZa" class="o-typography-link--external" target="\_blank" rel="noopener">Show me the CodePen</a></aside>

You won't see anything yet, but the classes and the data attribute will be working together to center our content across a span of 8 columns when we add the CSS to our page.

For now, let's finish putting together the content of our page.

## Component HTML
With the exception of JavaScript-only components, all of Origami's components rely on markup. This markup, combined with the styling and the functionality, is what determines how a component will look and behave on a page.

<aside>A single component can have many variations, and all the variations for all components can be found in the <a href="https://registry.origami.ft.com/components">Origami Registry</a>.</aside>

First, we're going to add some content for our article, so lets add a heading and some great information about fruit in our `o-grid-row`:

<aside><a href="https://codepen.io/ft-origami/pen/KBxwWN" class="o-typography-link--external" target="\_blank" rel="noopener">Show me the CodePen</a></aside>

<pre style="white-space: pre-line"><code class="o-syntax-highlight--html">&lt;h1>Funky Fruit Facts&lt;/h1>  
&lt;h2>Durian&lt;/h2>
&lt;p>Due to its overpowering smell, durian has been banned on many types of public transport across Thailand, Japan and Hong Kong. In Singapore, the fruit is banned across all types of public transportation and even taxis have signs to let you know they refuse to carry passengers transporting the smelly fruit.&lt;/p>
&lt;h2>Dragonfruit&lt;/h2>
&lt;p>The cactus flower that produces dragon fruit survives only a single night. It blooms in the evening, ready for pollination by bats and moths, and wilts the very next day. The very brief pollination period, however, is sufficient for the plant to bear fruits.&lt;/p>
&lt;h2>Naseberry, aka Sapodilla&lt;/h2>
&lt;p>The sapodilla tree supplies the building blocks for a number of products utilized by humans.  Long ago, the Mayas and Aztecs would boil its ‘chicle’ sap, mold it into thick blocks and cut them into small pieces to chew. They were making the first chewing gum!&lt;/p></code></pre>


Finally, we want to showcase the popularity of each fruit in a sortable table. To do that, we're going to use the `o-table` component.

All of the markup that comes with an Origami component is available on the components' page in the Origami registry.

We can find the markup for the <a href="https://registry.origami.ft.com/components/o-table#demo-row-stripes" class="o-typography-link--external" target="\_blank" rel="noopener">striped variation of o-table in the registry</a>, and copy that HTML into our work from there.

<aside><a href="https://codepen.io/ft-origami/pen/wxEBda" class="o-typography-link--external" target="\_blank" rel="noopener">Show me the CodePen</a></aside>

## Component CSS

Now we come to the second step in putting our page together, and a big part of what makes the Build Service a quick solution.

The Build Service will perform a number of build steps to compile and bundle up the SCSS that most Origami component styles are written in. Since it is all bundled for us to pick and choose from, let's begin by styling our grid. This means we'll have to add a `link` tag to our `<head>`

The `href` of that link references the endpoint that serves all CSS bundles in the Build Service. The most important part of this url is the query parameter - it specifies what component and which version of it we're after:

<pre class="o-layout__main__full-span"><code class="o-syntax-highlight--html">&lt;link rel="stylesheet" href="https://www.ft.com/__origami/service/build/v2/bundles/css?modules=o-grid@^{{site.data.components.o-grid.version}}"/></code></pre>

<aside><a href="https://codepen.io/ft-origami/pen/ajazYj" class="o-typography-link--external" target="\_blank" rel="noopener">Show me the CodePen</a></aside>
Now, you should see all of your content snap to the center of the page. This means that we've successfully fetched the `o-grid` CSS bundle from the Build Service.

But we also want to style our content and our table, and fetch the right color from our color palette.

It is important to highlight that you only need **one** link tag per page, regardless of how many components you are using. The Build Service can include more than one component in the bundle we ask for, meaning that we can add multiple components to the same URL. This avoids duplicating the CSS that is shared between components, because we are only downloading it all once.

So in order to add the styling for all of our other components, we need to add a few components (and versions!) to the query parameter of our original url:

<pre class="o-layout__main__full-span"><code class="o-syntax-highlight--html">&lt;link rel="stylesheet" href="https://www.ft.com/__origami/service/build/v2/bundles/css?modules=o-grid@^{{site.data.components.o-grid.version}},o-colors@^{{site.data.components.o-colors.version}},o-typography@^{{site.data.components.o-typography.version}},o-table@^{{site.data.components.o-table.version}}"/></code></pre>
<aside><a href="https://codepen.io/ft-origami/pen/LBJErq" class="o-typography-link--external" target="\_blank" rel="noopener">Show me the CodePen</a></aside>

And now, when we look at our page, we should have a styled table, different typography and a type of grid in place.

## Component JavaScript

There is one more step, before our page is entirely functional. Not all Origami components use JavaScript. In fact, of the ones we've used in this example, only `o-table` does.

So our final step involves providing our table with the ability to sort its content. Much like the `link` tag for the CSS, we fetch JavaScript bundles from a Build Service endpoint, through a `script` tag. And, also like the url for the `link` tag, the `script src` expects a query parameter, which can also be more than one component.

For now though, let's add the following to our `<head>`:

<pre class="o-layout__main__full-span"><code class="o-syntax-highlight--html">&lt;script src="https://www.ft.com/__origami/service/build/v2/bundles/js?modules=o-table@^{{site.data.components.o-table.version}}">&lt;/script></code></pre>
<aside><a href="https://codepen.io/ft-origami/pen/ejLNNL" class="o-typography-link--external" target="\_blank" rel="noopener">Show me the CodePen</a></aside>

Now you can scroll down to your table, and sort fruit alphabetically by name or characteristic, or numerically by popularity.

## Next steps

We've stepped through a basic set up of components with the Build Service, and these are the fundamental steps for any component you might want to use within your product.

There are a few more aspects to the development of a product with Origami components that are important for compatibility and consistency, and we encourage you to read more about them:

- Origami components have been developed to provide a 'core' experience for older browsers, and an 'enhanced' experience for newer ones, and we check for this using a ['cuts the mustard'](/#TODO) test, which can determine which experience to serve to which browser.
- Another service we provide is the [Polyfill Service](https://polyfill.io/), which makes newer APIs available to older browsers, allowing us to write code to modern standards.
- [Component versioning](/#TODO) is also important when building and maintaining products that use Origami components.
