---
title: Origami Newsletter, June 2020
description: This issue features accessibility fixes for users and improvements for developers.
author: Jake Champion
tags:
  - Newsletter
---

<abbr title="Too long; didn't read">
	<strong>
	TL;DR:
	</strong>
</abbr> {{page.description}}

## Top Things

These are some of the bigger things we've done over the last month.

### Accessibility Improvements

This month Customer Products worked on renewing their Digital Accessibility Certificate, which highlighted some accessibility issues within Origami. Both teams worked together and have fixed all the issues which were brought to our attention.

Thanks goes to Keran Braich, Nick Colley, Tunca Bergman, Matt Hinchliffe, Glynn Phillips, Petr Klus, Chee Rabbits, and Lee Moody for all their help in reporting and fixing the issues.

https://github.com/Financial-Times/o-share/pull/186 - Keran
https://github.com/Financial-Times/o-forms/pull/353 - Chee
https://github.com/Financial-Times/o-comments/pull/172 - Tunca
https://github.com/Financial-Times/o-header-services/issues/142 - Matt
https://github.com/Financial-Times/o-comments/pull/171 - Glynn
https://github.com/Financial-Times/o-footer/pull/142 - Nick
https://github.com/Financial-Times/o-comments/pull/170 - Glynn

### Another New Font Format

Last month we announced a [new font format (woff2)](https://origami.ft.com/blog/2020/06/01/newsletter/#a-new-font-format). This month we have another font format, we've worked with the Design team and the Klim type foundry and got a Variable Font commissioned for Financier Display and Text!

These new fonts were commissioned for an experiment between Design and Origami to see whether the website and app can have more typographic design choices available to use without hindering on the performance. In a future newsletter and blog post we will write about how the experiment has gone and whether a future with Variable Fonts is possible for the website and app.

Thanks for the work so far on this goes to Kevin Wilson, Luke Griffiths, Dave Edge, and Sarah Wells for getting the Variable Font commissioned in such a short amount of time.

### Origami Component Developer Improvements

Last month we released version 10 of our tooling for Origami Components, which brought about speed and workflow improvements. This month we've made a new release to the tooling to improve the process of reviewing changes made to Origami Components. Contributors no longer need to try and find the issue within a confusing build log on Circle CI or GitHub. Now when/if a pull-request to a component has an issue such as failing an automated test or an accessibility check, the pull-request will have a comment added to the specific file and line where the issue occurred. This should hopefully make it easier for contributors to find out why their change is not in a state to be approved/merged.

<image src="https://user-images.githubusercontent.com/1569131/86256449-3f5e3c00-bbb0-11ea-9b53-4d09c4b4802e.png" alt="Screenshot of a GitHub Annotation on the line in a pull-request which has is a failing test. The Annotation explains that the test failed because it expected the table to be sorted in ascending order but it was in descending order" />

## Special Thanks

TODO

## Broader Update

A digest of other things that have happened since our last update:

- [Financial-Times/o-video](https://github.com/repos/Financial-Times/o-video)

   - Make @Financial-Times/content-innovation a code owner (opened by: JakeChampion, closed by: JakeChampion)

- [Financial-Times/sass](https://github.com/repos/Financial-Times/sass)

   - update to sass 1.26.9 (opened by: JakeChampion, closed by: JakeChampion)

   - update to the latest version sass - version 1.26.8 (opened by: JakeChampion, closed by: JakeChampion)

- [Financial-Times/o-comments](https://github.com/repos/Financial-Times/o-comments)

   - Use fake UUID for demo (opened by: ker-an, closed by: ker-an)

   - Edit display name dialog a11y (opened by: tbergmen, closed by: tbergmen)

   - Switch edit display name link to be a button (opened by: GlynnPhillips, closed by: GlynnPhillips)

   - Increase the contrast of guideline links (opened by: GlynnPhillips, closed by: GlynnPhillips)

   - Add missing migration guide (opened by: notlee, closed by: notlee)

- [Financial-Times/origami-navigation-data](https://github.com/repos/Financial-Times/origami-navigation-data)

   - chore: update privacy link label (ACC-107) (opened by: alexnaish, closed by: alexnaish)

   - Change How to Spend It URL (opened by: kavanagh, closed by: kavanagh)

- [Financial-Times/origami-website](https://github.com/repos/Financial-Times/origami-website)

   - Replace `request-promise-native` with `axios`. (opened by: notlee, closed by: JakeChampion)

   - Make the svg favicon the default and all the other icons the alternatives (opened by: JakeChampion, closed by: JakeChampion)

   - Update dependencies and prevent warnings (opened by: notlee, closed by: notlee)

- [Financial-Times/polyfill-library](https://github.com/repos/Financial-Times/polyfill-library)

   - Add: {DateTimeFormat,Number}.prototype.formatToParts polyfills (opened by: JakeChampion, closed by: JakeChampion)

   - feat: Add @formatjs/intl-datetimeformat, remove legacy Intl.js (opened by: longlho, closed by: JakeChampion)

   - When is the next minor release? (opened by: longlho, closed by: JakeChampion)

   - Intl.PluralRules not being served to Edge < 18 (opened by: glsignal, closed by: JakeChampion)

   - chore: upgrade formatjs polyfills (opened by: longlho, closed by: JakeChampion)

   - Is there a convention to target the same feature but in later ES versions? (opened by: longlho, closed by: longlho)

   - Intl.NumberFormat with compact notation, Firefox (opened by: bennypowers, closed by: JakeChampion)

   - feat: Add Intl.NumberFormat ES2020 polyfill (opened by: longlho, closed by: JakeChampion)

   - feat: add base version of DateTimeFormat.formatToParts polyfill (opened by: Tasyp, closed by: JakeChampion)

   - Replace ResizeObserver polyfill by a more robust and maintained one (opened by: nicooprat, closed by: JakeChampion)

   - Replace smoothscroll with seamless-scroll-polyfill (opened by: jamesarosen, closed by: JakeChampion)

- [Financial-Times/o-fonts-assets](https://github.com/repos/Financial-Times/o-fonts-assets)

   - Commission a Variable Font for Financier Display and Financier Text by Klim (opened by: JakeChampion, closed by: JakeChampion)

- [Financial-Times/node-health-check](https://github.com/repos/Financial-Times/node-health-check)

   - update lodash and make snyk a development dependency (opened by: JakeChampion, closed by: JakeChampion)

   - remove large deprecated dependency "request" (opened by: chee, closed by: JakeChampion)

   - Remove the reference for the tcp-ip check so that it does not keep the process running if there is no other work needing to be done (opened by: JakeChampion, closed by: notlee)

- [Financial-Times/create-origami-component](https://github.com/repos/Financial-Times/create-origami-component)

   - Add o-brand as a dependency if brand is selected in the prompts (opened by: JakeChampion, closed by: JakeChampion)

- [Financial-Times/o-share](https://github.com/repos/Financial-Times/o-share)

   - CI-183 Add title to the social descriptive link text (opened by: ker-an, closed by: ker-an)

- [Financial-Times/o-spacing](https://github.com/repos/Financial-Times/o-spacing)

   - Add values to named spaces in demo (opened by: chee, closed by: JakeChampion)

- [Financial-Times/o-forms](https://github.com/repos/Financial-Times/o-forms)

   - Hide native radios and checkboxes while leaving them accessible to dragons (opened by: chee, closed by: chee)

   - Make sure disabled text inputs have an opacity of 1. (opened by: JakeChampion, closed by: JakeChampion)

- [Financial-Times/o-table](https://github.com/repos/Financial-Times/o-table)

   - Sort a cell by it's `datetime` attribute if one exists (opened by: JakeChampion, closed by: JakeChampion)

- [Financial-Times/o-header-services](https://github.com/repos/Financial-Times/o-header-services)

   - Add a missing `li` element in dropdown navigation demo. (opened by: notlee, closed by: notlee)

- [Financial-Times/o-buttons](https://github.com/repos/Financial-Times/o-buttons)

   - Only include button sizes which are valid. (opened by: notlee, closed by: notlee)

- [Financial-Times/origami-build-tools](https://github.com/repos/Financial-Times/origami-build-tools)

   - Make obt output GitHub Annotations for errors and warnings (opened by: JakeChampion, closed by: JakeChampion)

   - Use axe instead of htmlcs as axe find more errors (opened by: JakeChampion, closed by: JakeChampion)

- [Financial-Times/o-layout](https://github.com/repos/Financial-Times/o-layout)

   - Fixed Autoprefixer warning (opened by: sentayhuJo, closed by: sentayhuJo)

- [Financial-Times/o-footer](https://github.com/repos/Financial-Times/o-footer)

   - Fix external links focus outline not showing (opened by: nickcolley, closed by: JakeChampion)

   - [accessibility] Update sample markup (headings, roles) (opened by: petrklus, closed by: notlee)

- [Financial-Times/o-header](https://github.com/repos/Financial-Times/o-header)

   - Update drawer menu accessible name for plain english alternative (opened by: nickcolley, closed by: notlee)

   - Revert "Ensure header link buttons work when pressing space." (opened by: JakeChampion, closed by: JakeChampion)

   - Improve accessibility of the 'link buttons' (opened by: JakeChampion, closed by: JakeChampion)

   - Ensure header link buttons work when pressing space. (opened by: nickcolley, closed by: JakeChampion)

- [Financial-Times/o-footer-services](https://github.com/repos/Financial-Times/o-footer-services)

   - Add a `oFooterServicesCustomize` mixin. (opened by: notlee, closed by: notlee)

- [Financial-Times/o-banner](https://github.com/repos/Financial-Times/o-banner)

   - Allow no o-banner actions. (opened by: notlee, closed by: notlee)

- [Financial-Times/polyfill-service-url-builder](https://github.com/repos/Financial-Times/polyfill-service-url-builder)

   - [bug]: Generator throws when found feature is only an alias (opened by: tregusti, closed by: JakeChampion)

   - Fix error when featureConfig is not found (opened by: jdeniau, closed by: JakeChampion)

   - allow multiple files to be parsed (opened by: jdeniau, closed by: JakeChampion)

- [Financial-Times/o-toggle](https://github.com/repos/Financial-Times/o-toggle)

   - Ensure toggle anchors work with the spacebar and are not draggable (opened by: nickcolley, closed by: JakeChampion)

- [Financial-Times/is-origami-flat](https://github.com/repos/Financial-Times/is-origami-flat)


- [Financial-Times/origami-screencap-service](https://github.com/repos/Financial-Times/origami-screencap-service)

   - Decommission Origami ScreenCap Service (opened by: notlee, closed by: JakeChampion)

