---
title: Origami Newsletter, Feburary 2019
description: This issue features Origami on npm, a new major release of o-layout, and a new major release of o-header-services.
author: Lee Moody
tags:
  - Newsletter
---

**TL;DR:** This issue features Origami components on npm; the release of o-layout v3, which includes two new layouts to help build internal tools and products; and the release of o-header-services v3, which includes new features, customisation, and a lot of code improvements.


## Top three things

These are some of the bigger things we've worked on or released over the last month.

### Origami Components On NPM

Origami components are now available on the npmjs registry as well as the bower registry. This will help teams who have difficulty using bower in their projects. A guide for how to move a project from bower to npmjs is available on origami.ft.com/etc.

If you have any queries/questions, the Origami team are ready to help.

### New major version: o-layout

o-layout provides page layouts and typography as a starting point to create internal tools or products. In addition to the documentation layout we already had, v3 introduces a “query” layout for search and filter pages; and a “landing” layout for homepages or category pages. You can view [demos for o-layout](https://registry.origami.ft.com/components/o-layout) in the Origami registry.

### New major version: o-header-services

o-header-services is a component currently used by many of our tools, both internal and customer facing, to aid navigation. The new major release follows the beta we announced last issue. It reduces code complexity (both internally and from an Origami user's perspective); introduces optional dropdowns for larger navigation structures; and it is now customisable so our specialist titles may choose to make the most of o-header-services. Big thanks to Tom Dew, Carina Huse, Alex Wilson, and the rest of the team at BlueTel for their time and feedback. [Demos and a migration guide](https://registry.origami.ft.com/components/o-header-services) are available via the Origami Registry.


## Special thanks

Special thanks to the Enhanced Experience team who have bought [o-table](https://registry.origami.ft.com/components/o-table) to ft.com and the app. Editorial are now able to add tables to stories which are sortable, expandable, and responsive. In no particular order, thanks again to: Emily Quinn, Peter Clarke, Terry Roberts, Gabor Ottlik, Ludovic Robin, Umberto Babini, Luke Kavanagh, and to the apps team for their support. 👏

## Broader update

A digest list of other things that have happened over the last month.

  - MINOR: To publish them to NPM, we released a minor of **all** components supported by Origami (well done Chee Rabbits and Jake Champion 🙌). Plus some widely used components which other teams maintain such as o-subs-card, o-audio, o-ads (shout out to the ads team for their support).
  - MAJOR: [o-teaser v3.2.1](https://registry.origami.ft.com/components/o-teaser@3.2.1) was released, which upgrades to to the latest version of o-labels ([migration guide](https://registry.origami.ft.com/components/o-teaser@3.2.1/readme#upgrade-from-v2xx-to-v3xx)). The v3 release was quickly followed by other releases which add a speaker icon to audio teasers, and a style improvement for teasers with no tag (thanks to Dawn Budge and Liam Keaton for this).
  - MAJOR: [o-forms v6.0.0](https://registry.origami.ft.com/components/o-forms@6.0.0) was released, which upgrades to to the latest version of o-loading ([migration guide](https://registry.origami.ft.com/components/o-forms@6.0.0/readme#upgrade-from-v5xx-to-v6xx)).
  - MINOR: [o-table v7.2.1](https://registry.origami.ft.com/components/o-table@7.2.1) was released, improving sort and expander performance, and adding a new utility class to apply margin below tables.
  - MINOR: [o-typography v5.10.0](https://registry.origami.ft.com/components/o-typography@5.10.0) was released, adding whitelabel brand customisation for specialist titles, and fixing the icon colour of custom external links.
  - MINOR: [o-autoinit v1.5.0](https://registry.origami.ft.com/components/o-autoinit@1.5.0) was released, removing support for IE8 and below (which will reduce our JS bundle sizes).
  - MINOR: [o-colors  v4.8.4](https://registry.origami.ft.com/components/o-colors@4.8.4) was released, removing some of our more overbearing Sass warnings 🎉.
  - MINOR: [o-tooltip  v3.4.0](https://registry.origami.ft.com/components/o-tooltip@3.4.0) was released, which removes the use of deprecated colour usecases and adds support for internal and whitelabel brands.
  - MINOR: [o-overlay v2.6.0](https://registry.origami.ft.com/components/o-overlay@2.6.0) adds support for the whitelabel brand.
  - MINOR: [o-layers v2.1.0](https://registry.origami.ft.com/components/o-layers@2.1.0) removes o-dom as a dependency to use built-in browser functions instead and reduce bundle sizes.
  - MINOR: [o-tabs v4.3.1](https://registry.origami.ft.com/components/o-tabs@4.3.1) also removes o-dom as a dependency.
  - MINOR: [o-techdocs v7.0.10](https://registry.origami.ft.com/components/o-techdocs@7.0.10) deprecates o-techdocs. We recommend [o-layout](https://registry.origami.ft.com/components/o-layout) instead.
  - MINOR: [o-hoverable v3.2.1](https://registry.origami.ft.com/components/o-hoverable@3.2.1) deprecates o-hoverable. We recommend the [hover media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover) instead.
  - MINOR: [o-hierarchical-nav v5.1.1](https://registry.origami.ft.com/components/o-hierarchical-nav@5.1.1) deprecates o-hierarchical-nav. We recommend [o-header-services](https://registry.origami.ft.com/components/o-header-services) instead.
  - MINOR: [node-health-check v1.7.0](https://registry.origami.ft.com/components/node-health-check@1.7.0), new options to check an API that requires authentication (credit to Kiya Gurmesa for this one), plus documentation improvements (nice one, James Loveridge & Charlie Briggs)
  - MINOR: [polyfill-library v3.30.1](https://github.com/Financial-Times/polyfill-library/releases) now minifies feature detection JS and a fix to support online IDEs such as [repl.it](https://repl.it/) (credit to Kate Beard, who is currently bootcamping with Origami). Plus [multiple other minor releases](https://github.com/Financial-Times/polyfill-library/releases) this month have updated and added new polyfills (Jake Chamion 💪). Including, but not limited to:
    - Array.prototype.flat
    - Array.prototype.flatMap
    - Object.isExtensible
    - Object.isFrozen
    - Object.isSealed
    - Object.preventExtensions
    - Object.seal



*[TL;DR]: too long; didn't read
