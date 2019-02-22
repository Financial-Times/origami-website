---
title: Sass Specification

# Navigation config
nav_display: false
---

# {{page.title}}

Origami component styles are authored in [Sass](http://sass-lang.com/), specifically the SCSS syntax. Sass features **should** be used only where they result in increased clarity and reuse. Care should be taken that the resulting CSS is not compromised by unnecessary Sass nesting.

## Syntax Convention

Sass **must** validate using the [Origami Sass Lint rules](https://github.com/sasstools/sass-lint), though exceptions **may** be enabled temporarily within a component [using Sass Lint comments](https://github.com/sasstools/sass-lint#disabling-linters-via-source).

Component indent type (tabs or spaces) is not standardised: developers **must** respect whatever indent type is already in use when editing existing components.

In addition, component CSS **should not** use `!important`. Valid use cases for `!important` exist, but usually only at the product level. If `!important` is used in a component, a comment must be left in code to explain why it was necessary.

## Naming Conventions

CSS/Sass has limited encapsulation, so strict adherence to namespacing rules is essential. Components **must not** set or modify any CSS or Sass element in another component's namespace.

CSS selectors **should** follow the [BEM](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) naming convention. They **must** also be prefixed with the component name and written as hyphen separated, lowercase strings:
- Good: `.o-thing--large`, `.o-thing__content`
- Bad: `.largething`, `.oThingContent`

Sass variables **must** be prefixed with the component name and written as hyphen separated, lowercase strings:
- Good: `$o-grid-is-responsive: true;`
- Bad: `$GridIsResponsive: true;`

Sass variables **should** also be named by their purpose, rather than their value:
- Good: `$o-colors-skyline-bg`
- Bad `$o-colors-beige`

Sass mixins and functions **must** also be prefixed with the component name, and be written in camel-case:
- Good: `@mixin oGalleryCalculatePadding()`
- Bad: `@mixin calculate-padding()`

## CSS Selectors

ID selectors (`#`) **must not** be used at all:

- Good: `.o-thing`
- Bad: `#o-thing`

Unprefixed tag selectors (e.g. `h1`) **must not** be used alone. But tag selectors **may** be used if prefixed with a correctly namespaced selector:

- Good: `.o-thing__content > h1`
- Bad: `h1`

Combination selectors, those that specify a combination of tag name, class and/or ID in the same selector token **must not** be used:

- Good: `.o-thing`
- Bad: `div.o-thing`, `span#output-area`

Selectors **should** contain a single operand, with the following exceptions:

- To apply styles to child tags `.o-thing__content h1`. In these cases, a child operator **should** be used `.o-thing__content > h1` to minimise the chance of interference with other components.
- To use the adjacent element operator `.o-thing__input + .o-thing__label`.
- To prefix a class for feature targeting (see [feature flags](#feature-flags)).

High specificity **should** be minimised. For instance, the pseudo class `:not` **should not** be used to avoid high specificity. Increased specificity **must not** be used to overcome an existing overly-specific selector - make the existing one less specific, or use new class names. Prefer classes and duplicated properties over specificity:

- Good: `.o-thing-input {} .o-thing-radio {}`
- Bad: `.o-thing-input {} .o-thing-input:not([type=radio]) {} .o-thing-input[type=radio] {}`

Pseudo selectors such as `:focus` or `:hover` **should** be used to style a component's state. In the case of `:focus`, Origami components **must** enable a focused style that is distinct from its normal style (the focus style is usually provided by [o-normalise](https://github.com/Financial-Times/o-normalise)).

Where an ARIA role is appropriate ([no ARIA is better than bad ARIA)](https://www.w3.org/TR/2019/NOTE-wai-aria-practices-1.1-20190207/), it **should** be used to style a component's state. For example [aria-expanded](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded), with a correctly namespaced selector, **should** be used to style an expandable element:

- Good: `.o-example[aria-expanded=true]`
- Bad _(if an aria role is avalible)_: `.o-example--expanded`

## Private Sass

As Sass has limited encapsulation, any Sass (e.g. mixin, function, variable) that is intended for private use by the component only **must be** prefixed with an underscore character. Private Sass **must not** be documented in the README but **may** be documented in code comments.

## Sass Includes

If a component contains SCSS files other than the main file listed in `bower.json`:

- Files for import **must** be prefixed with an underscore, to [indicate privacy](#private-sass).
- All import statements **must** be imported before any other Sass.
- All import statements **should** be in the components’s main file.
- Sass variables, mixins, and functions **should** be in their own files.

## Sass Variables

If a variable is public and could be used as a configurable option in products consuming the component, the variable **must** be defined with `!default`, and added to the component’s documentation.

Components **must not** overwrite variables defined by another component. Instead, a component **may** define a new variable in its own namespace and set it to the value of the dependency’s variable.

## Sass Placeholders

Placeholder selectors (`%`) **must not** be used to reference other components, but **may** be used within a component, see [Issue #254](https://github.com/Financial-Times/ft-origami/issues/254).

The `@extends` command **must not** be used to extend placeholders defined in other components, unless the component can only be consumed via `@extends` for historical reasons. This is because extending placeholders defined in other components creates unpredictable cascades and unreliable results, as the order components are included is unpredictable. A placeholder **may** be extended if defined within the same component.

## Sass Silent Mode

Silent mode means a component's Sass will compile to an empty string, but provides mixins or variables which **may** be used by dependent code. Silent mode enables projects to include styles granularly, and components to include styles from other components.

Components that make use of styles defined in other components which support silent mode **must** use those styles silently, e.g. for a component `o-foo` which depends on `o-bar`:
```
@import ‘o-bar/main’;

@mixin oFoo {
    .o-foo {
	    @include oBarContent();
	    margin-top: 1em;
    }
}
```

To support silent mode, components **must** include a public, silent mode variable which is `true` by default `$o-{componentname}-is-silent: true !default;`. That is, no styles are output by default. When silent mode has been turned off and the component's CSS has been output, the component must reset the silent mode variable:
```
@if ($o-thing-is-silent == false) {
	@include oThing();

	// Prevent o-thing styles being output again
	$o-thing-is-silent: true !global;
}
```

This prevents the accidental output of styles if the component is included twice in the same product. For example, given component A and component B both include a dependency of component C.

## Feature Flags

To support a [core and enhanced experience](/docs/components/compatibility/#core--enhanced-experiences) components must render acceptably without JavaScript avalible. Styles which only apply if JavaScript is avalible **must** be applied with a feature detect such as `.o--if-js`, and to hide an element of a component when JavaScript is avalible use `o--if-no-js`. If the component provides its own JavaScript feature flag, it **must** be named `.o-componentname--js`.

To detect other features, standardised feature detects **should** be used as a preference, such as the CSS [@supports](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) at-rule. Otherwise a CSS class on the `documentElement` **may** be used to indicate feature support. The class name **should** be configurable, and default to the class name used by [Modernizr](https://modernizr.com/):
```
$o-thing-inline-svg-support: ‘.inlinesvg’ !default;
$o-thing-inline-svg-support .o-thing__feature {
    // inline svg
}
```

Component developers **must not** use feature flags that need to be set manually by a product developer (i.e. those outside [Modernizr](https://modernizr.com/) or Origami). Component developers **must** assume that feature flag classes will be set on the `documentElement`, i.e. the HTML tag.

## Browser Targeting

Where a [feature flag](#feature-flags) is not possible, developers **may** choose to target specific browsers (a graceful degradation technique).

In order of preference, when targeting styles at a specific browser or user-agent, component developers **should**:

- Assess if the proportion of impacted users is worth the fix.
- Tweak designs to accommodate most browsers instead.
- Use [browser hacks](http://browserhacks.com/):
```
.el {
    background: url(‘data:image/png;base64,/* data */’) bottom right no-repeat;

    // IE < 8 don't support data-uri, fallback to border bottom instead:
    *border-bottom: 1px solid #eeeeee;
    *background-image: none;
}
```
- Rely on JavaScript user-agent sniffing (as a last resort, in some rare edge cases).

Component developers **must not** use [IE conditional comments](https://www.quirksmode.org/css/condcom.html) to target user agents (use [browser hacks](http://browserhacks.com/) instead).
