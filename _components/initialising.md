---
title: Initialising a component
category: usage
---

# {{ page.title }}

Origami components that use JavaScript are **not** self initialising, unless you use the [Build Service](https://www.ft.com/__origami/service/build/v2/). This means that when you add components to your page manually, the features that come with that component won't be available until you explicitly initialise them.

<aside>The Build Service uses a component called <a href="https://registry.origami.ft.com/components/o-autoinit">o-autoinit</a> which will fire custom events that Origami components listen for in order to initialise their JavaScript.</aside>

This will give you more control over the configuration of a component, and it allows you to slot it in wherever is best suited to your needs. There are three ways in which we can do this, and each serves a different purpose - there isn't a 'right' method.

## Initialise all components

Every Origami component that uses JavaScript listens for a custom event called `o.DOMContentLoaded`, which will trigger its initialisation.
The following example will indiscriminately action _all_ of the components on a page:

<pre class="o-layout__main__full-span"><code class="o-syntax-highlight--javascript">if (document.readyState === 'interactive' || document.readyState === 'complete') {
	document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
}

document.addEventListener('DOMContentLoaded', function () {
	document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
});</code></pre>

## Initialise every instance of one Origami component

If your page has many instances of a single Origami component on your page, say multiple [informative messages](https://registry.origami.ft.com/components/o-message#demo-notice-inform) for example, you can initialise them all in one go by using the built-in `init()` function, which every JavaScript-supporting component has.

The `init()` function accepts two optional arguments, an `HTMLElement` and an options object. What constitutes as 'options' is detailed in each components' README. 

<pre class="o-layout__main__full-span"><code class="o-syntax-highlight--javascript">// Require the component, assign it to a variable
const oMessage = require('o-message');

// Initialise all the oMessages
oMessage.init();

// == or ==

// This will initialise an o-message for every o-message component found within the supplied DOM element
oMessage.init(HTMLElement);</code></pre>

## Initialise each Origami component individually

You can tell a single component to initialise with some specific configuration, at a particular time or in a significant sequence. You'll have most control over the components on your page in this scenario.

<pre class="o-layout__main__full-span"><code class="o-syntax-highlight--javascript">// Require the module, assign it to a variable
const oMessage = require('o-message');

// Initialise an o-message for the passed in DOM element
// This will initialise exactly 1 o-message, even if the DOM element has more than 1 o-message in it.
new oMessage(HTMLElement);</code></pre>
