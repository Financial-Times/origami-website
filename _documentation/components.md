---
title: Components
---

# {{page.title}}

## WHAT
An Origami component is a collection of styles and functionality. It provides reusable HTML, SCSS and JavaScript for a multitude of different products under the FT umbrella.

## HOW

Should there be a decision tree pointing at tutorials here?
### TUTORIALS


## USAGE

### Initialising a component

Origami components that use JavaScript are **not** self starting, unless you use the [Build Service](/TODO). This means that when you add components to your page [manually](/TODO), the features that come with that component won't be available until you explicitly initialise them.

<aside>The Build Service uses a component called <a href="/TODO">o-autoinit</a> which will initialise the default configuration and JavaScript for every Origami component on the page</aside>

This will give you more control over the configuration of a component, and allows you to slot it in wherever is best suited to your needs. There are three ways in which we can do this, and each serves a different purpose - there isn't a 'right' method.

#### Initialise all components on the page

Every Origami component that uses JavaScript listens for a custom event called `o.DOMContentLoaded`, which will trigger its initialisation.
The following example will indiscriminately action _all_ of the components on a page:

<pre class="o-layout__main__full-span"><code class="o-syntax-highlight--javascript">if (document.readyState === 'interactive' || document.readyState === 'complete') {
	document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
}

document.addEventListener('DOMContentLoaded', function () {
	document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
});</code></pre>

#### Initialise every instance of one Origami component

If your page has multiple instances of a single Origami component on your page such as multiple [informative messages](https://registry.origami.ft.com/components/o-message@2.3.5#demo-alert-neutral), for example, you can initialise them all in one go by using the built in `init()` function, which every JavsScript-supporting component has:

<pre class="o-layout__main__full-span"><code class="o-syntax-highlight--javascript">// Require the component, assign it to a variable
const oMessage = require('o-message');

// Initialise all the oMessages
oMessage.init();
}</code></pre>

#### Initialise each Origami component individually

You'll have most control over components in this scenario, because you can tell the component to initialise with specific configuration, at a particular time or in a significant sequence.

<pre class="o-layout__main__full-span"><code class="o-syntax-highlight--javascript">// Require the module, assign it to a variable
const oMessage = require('o-message');

// Initialise an o-message for the passed in DOM element
// This will initialise exactly 1 o-message, even if the DOM element has more than 1 o-message in it.
new oMessage(HTMLElement);

// == or ==

// This will initialise an o-message for every o-message found within the supplied DOM element
oMessage.init(HTMLElement);</code></pre>


### SILENT MODE
### BRANDING
### VERSIONING

## COMPATIBILITY
### MUSTARDCUT
### CORE V ENHANCED
### BROWSER SUPPORT
### POLYFILLA
