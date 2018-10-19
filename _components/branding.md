---
title: Branding
category: usage

# Navigation config
nav_display: true
nav_label: Branding
nav_order: 50
---

# {{ page.title }}

Origami components may be branded to provide a distinct appearance within different contexts. A brand may be thought of as a theme, but branded components may provide unique features as well as a distinct appearance.

Origami maintained brands include:
- master: FT branding for public ft.com sites and affiliates.
- internal: Style suitable for internal products, tools, and documentation.
- whitelabel: Base, structural styles only to build on (experimental).

## Configure your project's brand

The "master" brand is the default brand, but your project may use any of the provided brands. The brand is configured once and affects all components used by your project.

### Build service
If you are a [build service user](/docs/tutorials/build-service/), append the `brand` parameter to your build service url e.g. `&brand=internal`:

<pre class="o-layout__main__full-span"><code class="o-syntax-highlight--html">&lt;link rel="stylesheet" href="https://www.ft.com/__origami/service/build/v2/bundles/css?modules=o-table@^{{site.data.components.o-table.version}}&brand=internal"/></code></pre>

### Manual build process

As a user with a [manual build process](/docs/tutorials/manual-build/), set the `$o-brand` <abbr title="Sassy Cascading Style Sheets">SCSS</abbr> variable at the start of your root <abbr title="Sassy Cascading Style Sheets">SCSS</abbr> file, before importing any components.

<pre><code class="o-syntax-highlight--scss">$o-brand: "internal";
$o-table-is-silent: false;
@import 'o-table/main';</code></pre>

## Brand a component

To "brand" a component which does not yet support brands, see <a href="https://github.com/Financial-Times/o-brand" class="o-typography-link--external" target="\_blank" rel="noopener">o-brand on Github</a>.
