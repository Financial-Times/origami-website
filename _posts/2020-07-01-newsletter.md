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



## Special Thanks

TODO

## Broader Update

A digest of other things that have happened since our last update:

TODO