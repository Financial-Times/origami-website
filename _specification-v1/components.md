---
title: Component Specification

# Navigation config
nav_display: true
nav_label: Components
nav_order: 15
---

# {{page.title}}

Origami components are repositories containing front end code which can be used as part of a web page. Components are intended to be reusable UI patterns or functions; examples of good use-cases for components are:

  - A sortable table
  - A cookie notice
  - A consistent top navigation
  - Functions to track user behaviour


## Origami.json manifest

All Origami components **must** contain an `origami.json` file at the top of the repository's directory structure. The [`origami.json` manifest specification](/spec/v1/manifest/) covers the contents of this file. In addition to the rules outlined in the manifest specification, Origami components **must** set the `type` property in the JSON to `"module"`.

<aside>
	The <code>type</code> of <code>"module"</code> is a hangover from when client-side Origami components were named "modules". It's likely to change in a later version of the spec.
</aside>


## Naming conventions

Components **must** be named using a short descriptive term (hyphenated if necessary) and **should** be prefixed with `o-` (for Origami). The name **must** only contain lower-case letters and hyphens. This name **must** be used as the repository name, the `name` property in `origami.json`, and as a prefix for any default CSS class names.

<aside>
	Examples of good component names include <code>o-colors</code>, <code>o-grid</code>, <code>o-cookie-message</code>.
</aside>

If a component is not maintained by the Origami team, then it **may** be prefixed with a different letter than `o-`, E.g. `n-button`, `g-audio`. This practice is discouraged, it's preferred that authors specify a support contact other than Origami in the component manifest.


## Files and folder structure

Origami components **must** include the following files:

  - `main.js` **_if_** the component has JavaScript functionality
  - `main.scss` **_if_** the component has styles
  - `origami.json` as outlined in [Origami.json manifest](#origamijson-manifest) above

_The rest of this section is non-normative._

A component's folder structure **may** be organised as follows. The following is what the Origami team use for all of their supported components, but it's not a requirement.

<aside class="no-padding">
<p><a href="https://github.com/Financial-Times/origami-build-tools" class="o-typography-link--external" target="_blank">Origami Build Tools</a> provides a useful command to generate a component boilerplate in this style for you:</p>
<pre style="white-space: normal; word-break: keep-all;"><code class="o-syntax-highlight--bash">npx origami-build-tools init o-example-component</code>
</pre>
</aside>

<pre><code class="o-syntax-highlight--bash">.
├── demos
│   └── src (containing Mustache files)
├── src
│   ├── js (containing JavaScript files)
│   └── scss (containing SCSS files)
├── test (containing JavaScript and Sass tests)
├── bower.json
├── README.md
├── main.js
├── main.scss
├── origami.json
└── package.json</code>
</pre>


## Package management

Origami components **must** be installable through at least one package manager (individual package managers detailed below).

When a consumer attempts to use a component and finds that it is installable through a particular package manager, they **should** be able to assume that the same package manager can be used to install _any_ Origami component.

### Bower

Origami components **must** be installable through the <a href="https://bower.io/" class="o-typography-link--external" target="_blank">Bower package manager</a>, and **should** include a `bower.json` manifest file which configures the component. The component **should not** be published to the public Bower registry (through `bower register` or similar).

<aside>
  Origami components are not published to the public Bower registry because they can be accessed through the Origami Bower Registry.
  <a href="https://origami-bower-registry.ft.com/" class="o-typography-link--external" target="_blank">Read the service documentation</a> for more information.
</aside>

As well as following the <a href="https://github.com/bower/spec/blob/master/json.md" class="o-typography-link--external" target="_blank">`bower.json` spec</a>, there are additional requirements to make the component's Bower manifest conform to the Origami specification:

  - It **must** include a `name` property set to the repository name, e.g. `o-typography`
  - It **must** include a `main` property set to an array which **must**:
    - reference the component's main JavaScript file (`main.js`) **_if_** it exists
    - reference the component's main Sass file (`main.scss`) **_if_** it exists
  - It **must** include a `dependencies` property set to an object **_if_** the component has any Origami dependencies. Each key/value pair **must**:
    - reference a semver range and **not** a Git repository or URL
    - **not** reference an unstable or beta version of a dependency
  - It **must** include an `ignore` property set to an array, which **must**:
    - include all files and directories in the component that are not required by consumers (see [ignored files](#bower-ignored-files) for an example configuration)
    - **not** contain the files: `origami.json`, `README.md`, and files required to build demos
  - It **must not** include a `version` property. This is not needed and risks being out of sync with the repository's git tags
  - It **may** contain a `description` property set to a short description of the component
  - It **should not** contain any additional properties

#### Bower ignored files

_This section is non-normative._

The following is the list of ignored files in most component Bower configurations. This **may** be used as a starting point for new components:

<pre><code class="o-syntax-highlight--json">"ignore": [
	"**/.*",
	"node_modules",
	"bower_components",
	"test",
	"build"
]</code></pre>

### npm

Origami components **may** include a `package.json` manifest, however this file **must not** be relied upon for consumption of the component **_unless_** it follows the rules outlined in [Isomorphic components](#isomorphic-components) below. As well as following the <a href="https://docs.npmjs.com/files/package.json" class="o-typography-link--external" target="_blank">`package.json` spec</a>, there are additional requirements to make the component's npm manifest conform to the Origami specification:

  - It **must not** include any of the following properties: `bin`, `bugs`, `config`, `cpu`, `dependencies` (as this would indicate that the manifest is required for consumption of the component), `engines`, `engineStrict`, `files`, `main`, `os`, `preferGlobal`, `publishConfig`
  - It **must not** include a `version` property **_unless_** the component is isomorphic, see [Isomorphic components section](#isomorphic-components) below
  - It **must** include a `devDependencies` property set to an object **_if_** the component has any npm dependencies required for development or testing
  - It **should** include a `private` property set to `true`
  - It **may** include any other standard npm-defined property

#### Isomorphic components

Some components' JavaScript may have use cases outside the browser, most notably in Node.js applications, e.g. `o-date` could be used to format dates in the browser or on the server. Where there is a definite need for this, components **must** include a `package.json` with the following properties in addition to those outlined in the section above:

  - It **must** include a `name` property set to the repository name, e.g. `o-typography`
  - It **must** include a `version` property which is set to the value `0.0.0`
  - It **must** include a `main` property set to either `main.js`, `server.js`, or `index.js` (outlined below)

If the component requires any dependencies which are aimed solely at browsers (e.g. `o-dom`), then the `main` property in `package.json` **must** be set to either `server.js` (preferred) or `index.js` (deprecated). If all of the component's dependencies are capable of being used in a server environment, then the `main` property **should** be set to `main.js` – the same entry point as configured in `bower.json`.

The component **should not** be added to the public npm registry; instead the component's documentation **should** advise consumers to install by using a tagged tarball (links to which are available from the component's GitHub repo's "releases" tab).

### Specifying dependencies

Components **should** have as few dependencies as possible. When a dependency is not required for use in production, it **should** be listed as a development dependency in whichever package manager you use.

Dependencies used in a component **must** be added explicitly to the package manager config. Components **must not** rely on code from sub-dependencies (see example).

<aside>
  Sub-dependency example: if <code>o-component-a</code> includes <code>o-component-b</code> as a dependency and a new component you're developing requires features from both, then both must be added as explicit dependencies – you must not depend on <code>o-component-a</code> alone.
</aside>

When listing dependencies in your `bower.json` manifest, the <a href="https://semver.org/" class="o-typography-link--external" target="_blank">SemVer</a> range that you specify:

  - **must** be specified in a way that allows `MINOR` and `PATCH` to automatically update. This is normally achieved by using the caret (`^`) operator
  - **must** be greater than or equal to `1.0.0`
  - **must not** contain a SemVer prerelease suffix, e.g. `1.0.0-beta`

(See the example for clarification).

<aside>
  <p>Examples of spec-compliant dependency versions: <code>^1.0.0</code>, <code>&lt;3</code></p>
  <p>Examples of non-spec-compliant dependency versions: <code>^0.1.0</code>, <code>1.0.0</code>, <code>~1.0.0</code>, <code>^2.0.0-beta.4</code></p>
</aside>

When an Origami component is a dependency of many other Origami components, it **must** verify and assert the widest version compatibility possible, including maintaining compatibility with earlier versions of a dependency unless to do so would be impractical. E.g. specifying a broad version range like `"o-colors": ">=3.0.0 <5"`

<aside>If you want to understand more about how a SemVer expression matches specific versions, try <a href="https://semver.npmjs.com/" class="o-typography-link--external" target="_blank">npm's SemVer calculator</a>.</aside>


## Source control

Origami component code **must** reside in a Git repository which has the same name as the component ([see naming conventions](#naming-conventions)). This repository **must** be stored remotely under one of the following GitHub organisations:

  - [Financial-Times](https://github.com/Financial-Times)
  - [FT-Interactive](https://github.com/ft-interactive)
  - [FTLabs](https://github.com/ftlabs)

Component repositories **should** be public by default, however they **may** be private if there is a compelling reason, e.g. to comply with a font license in the case of `o-fonts-assets`.

Commit messages **should** describe the change that they introduce to a component.


## Code

### Markup

TODO: linting/syntax - do we need new page?

### Styles

TODO: is SCSS not CSS, main.scss, linting/syntax - do we need new page?, theming - deprecate and introduce branding

### Behaviour

TODO: is client-side JavaScript, main.js, linting/syntax - do we need new page?

### Accessibility

TODO: touch/keyboard/mouse, aria, screen-readers, etc


## Testing

### Automated tests

Components **should** include automated tests which at least verify that the component can be built using <a href="https://github.com/Financial-Times/origami-build-tools" class="o-typography-link--external" target="_blank">Origami Build Tools</a>.

A component author **may** additionally test their component however they like, providing that all test-related files **should** be in the `tests` directory, and also ignored as outlined in [Bower ignored files](#bower-ignored-files). A component **may** use Origami Build tools to run the tests for consistency:

<pre><code class="o-syntax-highlight--bash">npx origami-build-tools test</code></pre>

### Linting

Component JavaScript and Sass source code **should** be linted. A component author **may** use <a href="https://github.com/Financial-Times/origami-build-tools" class="o-typography-link--external" target="_blank">Origami Build Tools</a> to do this:

<pre><code class="o-syntax-highlight--bash">npx origami-build-tools verify</code></pre>

### Continuous integration

Components **should** implement CI. If a component does so then it **should** verify that the component can be built using <a href="https://github.com/Financial-Times/origami-build-tools" class="o-typography-link--external" target="_blank">Origami Build Tools</a>, as mentioned in [Automated tests](#automated-tests).

### Browser/manual testing

All components **must** be tested with all the browsers listed in the <a href="https://docs.google.com/document/d/1mByh6sT8zI4XRyPKqWVsC2jUfXHZvhshS5SlHErWjXU/edit" class="o-typography-link--external" target="_blank">FT browser support policy</a>. If a component includes JavaScript, it **must** be error free in all the browsers that fall above the recommended minimum boundary for enhanced experience in that policy.

The versions tested **should** be listed in the component’s documentation, so that when boundary recommendations are changed, it is still possible to determine the support that was designed into an older component.


## Documentation

### README

TODO

### Migration

TODO

### Codedocs

TODO


## Browser support

TODO: also in README? which browsers which component works for


## Demos

TODO: registry visible, hidden for testing, pa11y, link to manifest demos section


## Build Step

TODO: configuration, CI, compatibility with build service, scripts, automated tests


## Component lifecycle

TODO: versioning/releasing/deprecating
