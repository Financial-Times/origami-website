---
title: Create A New Origami Component - Part 5 JavaScript
description: A step-by-step tutorial which teaches you how to build and deploy a new Origami component.
cta: Learn how to create an Origami component
collection_listing_display: false

---

# {{page.title}}

In part five we will add interactivity to our component using JavaScript. For reference, there is a [JavaScript part of the component specification](/spec/v1/javascript/) which we will be conforming to.

We'll increment a counter within the component which will update every time the button is clicked. The counter will have an option to display a customisable message after a given count e.g. after 10 clicks display the word "lots" instead.

## Initialising Component JavaScript

Our boilerplate JavaScript `main.js` and `/src/js/example` has all we need to [run (initialise) the component JavaScript](/spec/v1/javascript/#initialisation) and get any options we may want to allow users to configure.

All Origami components provide [an `init` method](/spec/v1/javascript/#initialisation) for running component JavaScript. Notice the JavaScript class for our component and its `init` method is defined in `/src/js/example` (where `example` is the component name without the `o-` prefix).

By default the `init` method will initialise any elements on the page which have the `data-o-component="o-example"` attribute. If a `HTMLElement` object or valid [`querySelector` expression](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) is given the `init` method will initialise the element given, or any children, with the `data-o-component="o-example"` attribute.

`main.js` has some standard code to automatically run the component's `init` method when the `o.DOMContentLoaded` Origami event is fired (see [o-autoinit](https://registry.origami.ft.com/components/o-autoinit@2.0.4/readme)). It also passes on the component in an export, so users may alternatively import `main.js` and directly run `init` with relevant options for themselves.

For example a user could initialise all `o-example` elements on the page by including `o-autoinit`, which will fire the `o.DOMContentLoaded` event when the page is ready:

```javascript
// Initialise all elements on the page which have the
// `data-o-component="o-example"` attribute when
// `o-autoinit` fires the `o.DOMContentLoaded` event.
import 'o-autoinit';
import 'o-example';
```

Or by calling the `init` method with no arguments:

```javascript
// Initialise all elements on the page which have the
// `data-o-component="o-example"` attribute.
import oExample from 'o-example';
oExample.init();
```

Or a user could initialise a specific element, or its child elements, by calling the `init` method with an argument

```javascript
// Initialise the `.my-selector` element or any of its children
// which have the `data-o-component="o-example"` attribute.
import oExample from 'o-example';
const myElement = document.querySelector('.my-selector');
oExample.init(myElement);
```

```javascript
// Initialise the `.my-selector` element or any of its children
// which have the `data-o-component="o-example"` attribute.
import oExample from 'o-example';
oExample.init('.my-selector');
```

For more details see the [JavaScript initialisation](/spec/v1/javascript/#initialisation) section of the Origami specification.

## User Configuration

The second `init` argument is `opts`, an `Object` of options for the user to configure the component. So users of [o-autoinit](https://registry.origami.ft.com/components/o-autoinit@2.0.4/readme) or the [Origami Build Service](https://www.ft.com/__origami/service/build/v2/) can also configure components, data attributes may alternatively be used to set component configuration.

In `/src/js/example` getting component configuration is handled in the constructor. The `this.options` property is assigned to the `opts` object, which is merged using the `getDataAttributes` with any data attributes with a namespace `data-o-example-[option]`.

For instance the `o-table` component has a sort feature which may be disabled by either passing `{sortable: false}` to the [`o-table` `init` method](https://registry.origami.ft.com/components/o-table@8.0.11/jsdoc?brand=master) or by adding the [`data-o-table-sortable="false"`](https://registry.origami.ft.com/components/o-table@8.0.11/readme?brand=master#disable-sort) attribute to the `o-table` element.

We'll add configuration options later to demonstrate how to use the options users set.

For full details see the [JavaScript configuration](/spec/v1/javascript/#configuration) section of the Origami specification.

## <abbr title="Document Object Model">DOM</abbr> Manipulation

Origami components use browser apis directly for [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) manipulation. For instance [`Document.querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) to get an element and [`HTMLElement.innerText`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText) to set an elements text content.

## Interactivity

Lets start work on making our example component interactive.

We'll start by adding a `count` property, and listening for clicks on `o-example` buttons using the [`handleEvent`](https://medium.com/@WebReflection/dom-handleevent-a-cross-platform-standard-since-year-2000-5bf17287fd38) method and increment the count property.

```js
	/**
	 * Class constructor.
	 * @param {HTMLElement} [exampleEl] - The component element in the DOM
	 * @param {Object} [options={}] - An options object for configuring the component
	 */
	constructor (exampleEl, opts) {
		this.exampleEl = exampleEl;
		this.options = Object.assign({}, {
		}, opts || Example.getDataAttributes(exampleEl));
		// A property to store the current count.
		this.count = 0;
		// Listen to all click events on the o-example instance.
		this.exampleEl.addEventListener('click', this);
	}

	/**
	 * A method to handle event listeners.
	 * https://medium.com/@WebReflection/dom-handleevent-a-cross-platform-standard-since-year-2000-5bf17287fd38
	 * https://dom.spec.whatwg.org/#dom-eventlistener-handleevent
	 * @param {Event} event
	 */
	handleEvent(event) {
		// When any button within the `o-example` component is clicked
		// increment the count.
		if (event.target.tagName === 'BUTTON') {
			this.count++;
			// Log the count temporarily so we can see this working.
			console.log(this.count);
		}
	}
```

<figure>
	<img alt="" src="/assets/images/tutorial-new-component/hello-world-demo-12-sass.png" />
	<figcaption class="o-typography-caption">
        The `o-example` component with the browsers developer tools open. The numbers 1 to 5 have been logged as the button has been clicked five times.
	</figcaption>
</figure>

Next we want to update our component to display the current count instead of logging the count to the browsers developer console. One way we could do that is my adding a `<span>` element to contain the current count and update its text content when the button is clicked. We'll identify the current count span with a namespaced data attribute `data-o-example-current-count`.

<pre><code class="o-syntax-highlight--diff">
&lt;div class="o-example &#123;&#123;#theme}}o-example--&#123;&#123;theme}}&#123;&#123;/theme}}" data-o-component="o-example">
-    Hello world, I am a component named o-example!
+    Hello world, I am a component named o-example! You have clicked this lovely button &lt;span data-o-example-current-count>0&lt;/span> times.
    &lt;button class="o-example__button">count&lt;/button>
&lt;/div>
</code></pre>

Now in our JavaScript we can get any current count element and update it when our click count is incremented.

```js
handleEvent(event) {
    // When any button within the `o-example` component is clicked
    // increment the count.
    if (event.target.tagName === 'BUTTON') {
        this.count++;
        // Get all the elements within o-example with
        // the attribute data-o-example-current-count.
        const countElements = this.exampleEl.querySelectorAll('[data-o-example-current-count]');
        // For each count element found, update the count.
        countElements.forEach(e => e.innerText = this.count);
    }
}
```

<figure>
	<img alt="" src="/assets/images/tutorial-new-component/hello-world-demo-13-sass.png" />
	<figcaption class="o-typography-caption">
        The `o-example` component now displays how many times the button has been clicked. Here it has been clicked over 100 times.
	</figcaption>
</figure>

Our example component now displays the click count. In the example above the button has been clicked over 100 times (what fun!) Instead of counting clicks infinitely, we should update the count to display a message "lots and lots of" after a user defined number of clicks.

To do that add an option `highCount` in the constructor, with a default value of `100`:

```js
	constructor (exampleEl, opts) {
        this.exampleEl = exampleEl;
        // Get the `highCount` option from the `opts` argument or
        // from a `data-o-example-high-count` data attribute, or
        // default to `100` if not set.
		this.options = Object.assign({}, {
            highCount: 100
		}, opts || Example.getDataAttributes(exampleEl));
		// A property to store the current count.
		this.count = 0;
		// Listen to all click events on the o-example instance.
		this.exampleEl.addEventListener('click', this);
	}
```

And in the event handler update the counter element with the text "lots and lots of" after the button has been clicked the high count or more:

```js
handleEvent(event) {
    // When any button within the `o-example` component is clicked
    // increment the count.
    if (event.target.tagName === 'BUTTON') {
        this.count++;
        // Get all the elements within o-example with
        // the attribute data-o-example-current-count.
        const countElements = this.exampleEl.querySelectorAll('[data-o-example-current-count]');
        // For each count element found, update the count.
        // If the count is equal to or above the high count display a message instead.
        const countText = this.count < this.options.highCount ?
            this.count :
            'lots and lots of';
        countElements.forEach(e => e.innerText = countText);
    }
}
```

<figure>
	<img alt="" src="/assets/images/tutorial-new-component/hello-world-demo-13-sass.png" />
	<figcaption class="o-typography-caption">
        The `o-example` component now says it has been clicked "lots and lots of time" if the click count is 100 or greater.
	</figcaption>
</figure>

## Core Experience

...

## @todo: put this stashed content somewhere

### bower.json and package.json

[Bower](https://bower.io/) is a package manager used to install Origami component dependencies. The `bower.json` file lists the components dependencies, and points to the main Sass and JavaScript files of the component. One benefit of using Bower is it ensures a flat dependency tree, so two versions of the same component are not install at once.

Although Origami components use Bower to install dependencies, developer dependencies may be installed using the [NPM](https://www.npmjs.com/) package manager, as seen in `package.json`. Rules for package management are defined in the [package management section of the specification](https://origami.ft.com/spec/v1/components/#package-management).

Although Origami components are authored using Bower, components are published to NPM so projects which use Origami may choose to use NPM over Bower ([but we still recommended Bower for now](https://origami.ft.com/docs/tutorials/npm/)). We'll discuss how components are published to NPM later.
