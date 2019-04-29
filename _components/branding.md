---
title: Branding
description: Documentation on using branded Origami components, which provide a distinct appearance for different areas of the FT.
cta: Read more about how to use branding

# Navigation config
nav_display: true
nav_label: Branding
nav_order: 50
---

# {{ page.title }}

Origami components may be branded to provide a distinct appearance within different contexts. A brand may be thought of as a theme, but branded components may provide unique features as well as a distinct appearance.

## Supported brands

Origami maintained brands include:
- master: FT branding for public ft.com sites and affiliates.
- internal: Style suitable for internal products, tools, and documentation.
- whitelabel: Base, structural styles only to build on and customise.

## An example component

Taking `o-table` as an example, the "master" brand version offers a "row stripes" feature, which uses "master" brand colours such as "paper" and "wheat":
{% include demo.html component="o-table" demo="row-stripes" brand="master" %}

The "internal" brand version also supports "row stripes" but uses a different colour palette:
{% include demo.html component="o-table" demo="row-stripes" brand="internal" %}

The "whitelabel" brand does not support "row stripes" and therefore outputs no styles to support that feature:
{% include demo.html component="o-table" demo="basic" brand="whitelabel" %}

## Configure your project's brand

The "master" brand is the default brand, but your project may use any of the provided brands. The brand is configured once and affects all components used by your project.

To select a brand within your project, see the tutorial for your method of including Origami components:

- [Build service tutorial](/docs/tutorials/build-service/#selecting-a-brand)
- [Manual build tutorial](/docs/tutorials/manual-build/#selecting-a-brand)
