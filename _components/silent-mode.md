---
title: Silent mode
category: usage
---

# {{page.title}}

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

## ON

When a component's silent mode is set to `true` or 'on': `$o-component-is-silent: on`, the SCSS mixins and variables will be made available, but they will _not_ be included or built.

What will be available to you in this case is:


<pre><code class="o-syntax-highlight--scss">@mixin oMessage($class: o-message) {
	...
}</code></pre>

## OFF
When a component's silent mode is `false` or, 'off': `$o-component-is-silent: false`, the SCSS in the example above will be included automatically and will build all of its styles.

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
