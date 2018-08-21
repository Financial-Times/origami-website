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

<aside>The Build Service uses a component called <a href="/TODO">o-autoinit</a> which will initialise the default configuration and JavaScript for every Origami component on the page.</aside>

This will give you more control over the configuration of a component, and it allows you to slot it in wherever is best suited to your needs. There are three ways in which we can do this, and each serves a different purpose - there isn't a 'right' method.

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

If your page has many instances of a single Origami component on your page, say multiple [informative messages](/TODO) for example, you can initialise them all in one go by using the built-in `init()` function, which every JavaScript-supporting component has:

<pre class="o-layout__main__full-span"><code class="o-syntax-highlight--javascript">// Require the component, assign it to a variable
const oMessage = require('o-message');

// Initialise all the oMessages
oMessage.init();
</code></pre>

#### Initialise each Origami component individually

You can tell a single component to initialise with some specific configuration, at a particular time or in a significant sequence. You'll have most control over the components on your page in this scenario.

<pre class="o-layout__main__full-span"><code class="o-syntax-highlight--javascript">// Require the module, assign it to a variable
const oMessage = require('o-message');

// Initialise an o-message for the passed in DOM element
// This will initialise exactly 1 o-message, even if the DOM element has more than 1 o-message in it.
new oMessage(HTMLElement);

// == or ==

// This will initialise an o-message for every o-message found within the supplied DOM element
oMessage.init(HTMLElement);</code></pre>


### Silent mode

Every styled Origami component comes with a 'silent mode'. At its very core, the silent mode controls the output of a component's SCSS.
An Origami component generally has a comprehensive set of SCSS mixins and variables that define most of its styling.

<aside><a href="/TODO">MOAR ABOUT SCSS MIXINS</a></aside>

`$o-component-silent-mode` **defaults to ON**. You do not need to explicitly set it to be on, but you do need to be aware of this default.

If we consider a small snippet of SCSS, as the one below, we can illustrate how silent mode works.
<aside>This is an illustration of styles in a component, not an accurate representation of an <code>o-message</code> mixin.</aside>

<pre><code class="o-syntax-highlight--scss">$o-message-is-silent: true !default;

@mixin oMessage($class: o-message) {
	.#{$class} {
		display: block;
	}

	.#{$class}--closed {
		display: none;
	}
};

@if $o-message-is-silent == false) {
	@include oMessage();

	// Set to silent again to avoid being output twice
	$o-message-is-silent: true !global;
}</code></pre>

#### OFF
When a component's silent mode is `false` or, 'off', `$o-component-is-silent: false`, the SCSS in the example above will be included automatically and will build all of its styles.

The following will be available for you to use in your project:

<pre><code class="o-syntax-highlight--scss">.o-message {
	display: block;
}

.o-message--closed {
	display: none;
}

@mixin oMessage($class: o-message) {
	...
}</code></pre>

#### ON

When a component's silent mode is set to `true` or 'on', `$o-component-is-silent: on`, the SCSS mixins and variables will be made available, but they will _not_ be included or built.

What will be available to you in this case is:


<pre><code class="o-syntax-highlight--scss">@mixin oMessage($class: o-message) {
	...
}</code></pre>

### BRANDING

\#TODO

### Component Versioning

The Origami team maintains and improves the components regularly. This means that we release new versions of the components frequently, and a component's new version numbers follow the semver specification.

<aside><a href="http://semver.org/">SEMVER SPEC</a></aside>

#### How components are versioned

The version numbers are in the following format: `1.2.3`, which is representative of `MAJOR.MINOR.PATCH`.
- `MAJOR`: When this changes, we refer to it as a breaking change. This usually means that we have made a drastic visual change, or a change that breaks backwards compatibility. We take care to avoid these where possible.
- `MINOR`: When this number changes , we'll have made an improvement, added a feature or made a noticeable design tweak, for example.
- `PATCH`: When we release patches, we are usually releasing a bug fix that does not affect the components overall functionality.

#### How to request a versioned component

We recommend requesting an Origami component by requesting a particular version range, which is indicated by a caret (`^`). That syntax will specify a version but will also fetch minor and patch releases in the future. So if you request `o-message@^2.3.0`, you will get `v2.3.0`. But when we release a minor (`v2.4.0`) of that component further down the line, it means you'll automatically get that, too.

<aside>With semver you can use different characters to <a href="https://semver.npmjs.com/" class="o-typography-link--external" target="\_blank" rel="noopener">specify different ranges</a></aside>

By requesting a component's version range, you'll have an up-to-date component as soon as we release it.

#### Version conflicts

Almost all Origami components are built on top of other Origami components.

[o-message](https://registry.origami.ft.com/components/o-message), for example, relies on [o-buttons](https://registry.origami.ft.com/components/o-message), [o-colors](https://registry.origami.ft.com/components/o-colors), [o-icons](https://registry.origami.ft.com/components/o-icons) and [o-typography](https://registry.origami.ft.com/components/o-typography), which in turn have Origami dependencies of their own, which begins an elaborate dependency tree:

<pre><code class="o-syntax-highlight--bash">o-message
├── o-buttons
│   ├── o-colors
│   ├── o-icons
│   │   ├── fticons
│   │   └── o-assets
│   └── o-normalise
│       └── o-colors
├── o-colors
├── o-icons
│   ├── fticons
│   └── o-assets
└── o-typography
    ├── o-colors
    ├── o-fonts
    ├── o-grid
    └── o-icons
        ├── fticons
        └── o-assets</code></pre>

The full `o-message` dependency tree requires `o-colors` **four** times. In order to avoid downloading four different versions of `o-colors`, we will flatten the dependencies and try to find a version of `o-colors` that all of the components can use. This is possible because Origami components use [semver ranges](#how-to-request-a-versioned-component) to specify the versions of their dependencies.

However, this can also lead to situations there there is no single version that satisfies all semver ranges. This happens primarily when different ranges for the same component are specified.

If, for instance, `o-message` requires `o-colors@^2.3.4`, it will be compatible with any version between `v2.3.4` and below `v3.0.0`.

If the `o-typography` dependency required `o-colors@^1.2.3`, any version above and including `o-colors@2.0.0` won't be compatible with the direct `o-colors` dependency (which is `v2.3.4` and above), and will cause a conflict.

The only way to fix these conflicts is to ensure that the dependencies, and the dependencies within those dependencies, are all requiring the same ranges.

## COMPATIBILITY
### MUSTARDCUT
### CORE V ENHANCED
### BROWSER SUPPORT
### POLYFILLA
