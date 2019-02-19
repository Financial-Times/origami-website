Replaced: "Do not" with "should not".

Thoughts on "move out of spec" sections:
1. Things Origami does:
    - init
    - destroy
2. Things that a good f/e dev does:
    - `this` binding over `that = this`


Removed:
>Product developers are encouraged to include Origami JavaScript using a 'cuts the mustard' test to allow module developers to assume a minimum standard of support for JavaScript.  Minimum browser support standards for JavaScript are yet to be agreed, and are currently the subject of [issue 88](https://github.com/Financial-Times/ft-origami/issues/88).


Replaced: "components **should not** add to the global scope.".
>Add no objects to the global scope, other than JSONp callback function names.  Variables declared outside of any enclosing function are permitted, provided that the module requires a commonJS interface.  If you don't want to depend on CommonJS, wrap the module in an [IIFE](http://en.wikipedia.org/wiki/Immediately-invoked_function_expression).

Removed: What?
>If the module does not require CommonJS it must include a [Universal Module Definition](https://github.com/umdjs/umd/blob/master/returnExports.js) that includes support for CommonJS.

Removed: Moved to a "Destruction" section, which is after the "Initialisation" section, and rewrote.
>If it's possible for the module to create DOM nodes, timers, or otherwise occupy more than a token amount of memory, it *should* export a `destroy` method that reverts the module to a pre-`init` state. This is not necessary for large modules like `o-header` where it doesn't make sense for it to be reverted

Removed: Moved to a "Destruction" section, which is after the "Initialisation" section, and rewrote.
> Do not leave any non-garbage collectable traces after `destroy` is called

Rewrote: "where passed the DOM element explicitly by the host application using the component"
>to add a new section of owned DOM to an element explicitly nominated by the host application (e.g. by the host application calling a method of the module's API and passing an element to which the module is asked to append its DOM)

Removed: We prefix our CSS using PostCSS. Is prefixed CSS ever added by JS? Also "o-useragent" is deprecated.
><p>Where modern browser features might be vendor-prefixed, you can get the correct prefixed version using <a href="https://github.com/Financial-Times/o-useragent">o-useragent</a>.</p>

Removed: Move out of the spec?
>Scoping and binding `this` [...]

Rewrote: "Origami components **must** do as little as possible as the page parses. Instead they **should** provide a static `init` method which constructs instances of the component. The `init` method **should** run when the `o.DOMContentLoaded` or `o.load` events are fired."
>Modules *must* do as little as possible on parse, instead deferring start-up tasks to a publicly exported, static 'init' function that should be either invoked explicitly using the module's API, or automatically by binding to the `o.DOMContentLoaded` or `o.load` events.

Rewrote: "Where a component binds to the `o.DOMContentLoaded` or `o.load` events, their `init` method **must** be callable with no arguments. They **may** accept arguments, but if they do, all arguments **must** be optional (see [issue 228](https://github.com/Financial-Times/ft-origami/pull/228))."
>Where modules bind to the `o.DOMContentLoaded` or `o.load` events, their `init` method *must* be callable with no arguments, that is, they *may* accept arguments, but if they do, all such arguments *must* be optional (see [issue 228](https://github.com/Financial-Times/ft-origami/pull/228)).

Rewrote: "If the `init` method (or the components constructor) takes an element argument to identifying its [owned DOM](#owned-dom), it **must** accept the following types"
>Modules that expose an `init` method or an instance constructor which takes an argument identifying an area of owned DOM *must* allow all of the following types of references:

Rewrote: "If the given element does not have the components data attribute `data-o-component`, the init function **may** traverse the subtree looking for elements which are."
>Where the reference is to an element that is not itself owned DOM, the init function *may* traverse the subtree looking for elements that are.


Removed: Too much information for the spec? The spec doesn't disallow this. Could it be written as a best practise elsewhere? It also introduces `o--if-js` before explaining what `o--if-js` is.
> Where JavaScript exists to enhance elements, and accompanying CSS depends on knowing whether the JavaScript intends to apply (or has applied) that enhancement, the JavaScript *may* add a data attribute of the form `data-{modulename}-js` with no value to the root element of the component when the JavaScript initialises.  For example, o-tabs markup would not contain a `o--if-js` class, because the tabs content should remain visible even if the tabs JavaScript is not running on the page, but if the JavaScript does run, it could apply an `data-o-tabs-js` data attribute to allow the tabs CSS to hide all but the selected tab panel.
