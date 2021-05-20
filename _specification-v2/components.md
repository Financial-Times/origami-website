---
title: Component Specification
description: A specification which describes what is required for a front-end component to be considered an Origami component
cta: Read the component spec

# Redirect from legacy URLs
redirect_from:
  - /docs/component-spec/modules/
  - /docs/background-linters/

# Navigation config
nav_display: true
nav_label: Components
nav_order: 15
---

# {{page.title}}

Origami components are intended to be accessible, reusable UI patterns or
functions; examples of good use-cases for components are:

- A sortable table
- A cookie notice
- A consistent top navigation

## Origami.json manifest

All Origami components **must** contain an `origami.json` file at the top of the
component's directory structure. The [`origami.json` manifest
specification](/spec/v2/manifest/) covers the contents of this file. In addition
to the rules outlined in the manifest specification, Origami components **must**
set the `origamiType` property in the JSON to `"component"`.

## Naming conventions

A component’s name is used in the package.json, URLs, and CSS class names, so:

- It **must** contain only ASCII letters, numbers and hyphens
- It **must** begin with a letter

<aside>
	Examples of good component names include
	<code>o-colors</code>,
	<code>o-grid</code> and
	<code>o-cookie-message</code>.
</aside>

## Package management

Origami components **must** be installable with version 7 of npm package
manager.

As well as following the
[package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json) spec,
there are additional requirements to make the component's npm manifest conform
to the Origami specification.

- It **must** include a
[`"browser"`](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#browser)`
  property set to the component's main JavaScript entry-point if the component
  has JavaScript.
- It **must not** include a
  [`"browser"`](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#browser)
  property if the component has no JavaScript.
- It **must** include a `"sass"` property set to the component's main Sass
  entry-point if the component has Sass.
- It **must not** include a `"sass"` property if the component has no Sass.
- It **must** contain a `"description"` property set to a short description of the
  component.
- It **must** contain a `"keywords"` property in order to help users discover the right
  component.
- It **must** include a `"type"` property set to `"module"`.
- It **must** include a `"license"` property set to the SPDX license identifier for the
  license of the component, e.g. "MIT".
- It **must** list any production Sass or Origami component dependencies under
  `"peerDependencies"`.
- It **must** include the bugs field as described in the package.json spec. The
  bugs field may contain a `"slack"` property, indicating the support channel on
  the FT’s internal Slack workspace.

## Documentation

A component **must** contain a README.md file at its root.

When a new major version of a component is released a migration guide **must** be
written to help users upgrade from the previous release. The migration guide
**must** be added to a MIGRATION.md file in the root of the component's codebase,
and **must** be linked to from the component's README.md.

<aside>
	See
	<a href="https://github.com/Financial-Times/o-table#migration">
		o-table's migration guide
	</a>
	as an example.
</aside>

## HTML

- A component’s markup **must** be contained in a root element that **must**:
	- Have a data-o-component attribute with value of the component’s name, or
	- Be defined as a
	  [customElement](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element)
	  registered against the component’s JavaScript class
- All data attributes and IDs **must** be namespaced with the component’s name.

## JavaScript

Components **must** only modify:
- The component’s root element, and its children
- Elements passed explicitly to the component via JavaScript, and their children
- Elements with any other data attribute in the component’s namespace, and their
  children
- The component **must** be configurable using data attributes
- Any events triggered by a component **must** be namespaced under the target
  component’s name
- Component JavaScript **should** be annotated (e.g. using JSDoc)

## Sass

- CSS selectors **should** follow the [BEM naming convention](https://en.bem.info/methodology/naming-convention/).
- Sass functions, variables, mixins and placeholders defined in the global
  namespace **must** be prefixed with the component name
- A component **must** only style:
	- The component’s root element and its children
	- Elements with classes prefixed with the component’s name, and their
	  children
	- Elements with any other data-attribute in the component’s namespace, and
	  their children
- A component **must not** output CSS by default when Sass is loaded (i.e. `@use`, or
  `@import`)
- If the component is consumed via the `@import` syntax:
	- It **must** provide a primary mixin with a name that matches the component
	  name (e.g. `o-well` **must** provide `oWell`)
	- The primary mixin **must** output all component CSS when no arguments are
	  given.
- Sass **should** be annotated (e.g. with SassDoc)
