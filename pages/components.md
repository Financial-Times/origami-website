---
title: Origami Components
description: TODO
permalink: /docs/components/
layout: collection
collection_id: components

# Navigation config
nav_display: true
nav_label: Components
---


# {{page.title}}

An Origami component is a collection of styles and functionality. It provides reusable <abbr title="Hypertext Markup Language">HTML</abbr>, <abbr title="Sassy Cascading Style Sheets">SCSS</abbr> and JavaScript for a multitude of different products under the <abbr title="Financial Times">FT</abbr> umbrella.

## Including Origami components in your project

How you choose to include Origami components in your project will depend on your projects' requirements:

- **Using the Origami Build Service:**

	The Build service is best for quick projects or static sites or things where performance is less of a concern. This build method will fetch the Origami <abbr title="Cascading Style Sheets">CSS</abbr> and JavaScript as external files for your webpage. Be aware that this will indiscriminately fetch all stylistic variations of a component, which will increase your file size.


	If you would like help with this, you can visit the [Build Service tutorial](/docs/tutorials/build-service/).


- **Using a manual build process:**

	In order to customise your page and have more granular control over a components stylistic and behavioural features, you'll want to build Origami components manually. We currently do this with Bower, and install Origami components from the command line. This process relies on a build step, which you may already have in your project. If not, the <a href="https://github.com/Financial-Times/origami-build-tools" class="o-typography-link--external" target="\_blank" rel="noopener">Origami Build Tools</a> provide one.


	If you would like help with this, you can visit the [manual build tutorial](/docs/tutorials/manual-build/).
