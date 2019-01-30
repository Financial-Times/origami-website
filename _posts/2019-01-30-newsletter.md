---
title: Origami Newsletter, January 2019
description: This issue features a new component named o-stepped-progress, a new beta for o-header-services, and the release of the Polyfill Service v3.
author: Rowan Manning
tags:
  - Newsletter
---

_Welcome to the first issue of the Origami Newsletter! We'll be sending out an email like this at the end of each month, keeping people in Product and Technology up-to-date with what we're working on._

**TL;DR:** This issue features a new component named o-stepped-progress, for tracking user progress through a multi-step process; a new beta for o-header-services, including new features and a lot of code improvements; and the release of the Polyfill Service v3, which is faster and more maintainable than ever before.


## Top three things

These are some of the bigger things we've worked on or released over the last month.

### New component: o-stepped-progress

We released the first stable version of o-stepped-progress. This new component is used to help a user track progress through a multi-step process, such as a form. This was developed to be used as part of the signup process on FT.com as well as contract checkpoints on Lodestar. Thanks to Lucinda Vieira-Martins and Olga Shevchenko for their excellent designs. You can view [demos for this component in the Origami registry](https://registry.origami.ft.com/components/o-stepped-progress).

### New beta: o-header-services

o-header-services is a component used by many of our internal products and tools to aid navigation. We've been adding features and making some changes recently which are now available as a beta. Some highlights: reimplementing a drawer that doesn't rely on code from the FT.com header, the option to use dropdowns, and generally improved accessibility. As always, we appreciate feedback if you have it! More detail on what's changed is available on the [v3 pull request here](https://github.com/Financial-Times/o-header-services/pull/51).


### New major version: Polyfill Service v3

We launched v3 of the Polyfill service, which was outlined in a separate launch email. This release includes better polyfills, a faster service, and a more maintainable codebase. There's a [migration guide here](https://github.com/Financial-Times/polyfill-service/blob/master/MIGRATION.md#migrating-from-v2-to-v3), or check out the live service at [polyfill.io](https://polyfill.io/v3/).


## Special thanks

This month’s special thanks goes to Chee Rabbits, who has been helping the team to make Origami components available on npm. They’ve been a lot of fun to work with, and have persevered time and time again with some very complicated technical problems. Thanks Chee 😊


## Broader update

A digest list of other things that have happened over the last month.

  - Lee, Rowan, and Jake's all had birthdays this month 🎂
  - MAJOR: o-stepped-progress v1.0.0 was released, [see the registry for more info](https://registry.origami.ft.com/components/o-stepped-progress@1.0.0)
  - MAJOR: o-loading v3.0.0 was released, [see migration guide](https://github.com/Financial-Times/o-loading/blob/master/MIGRATION.md#migrating-from-2xx-to-3xx)
  - MAJOR: o-video v5.0.0 was released, [see migration guide](https://github.com/Financial-Times/o-video/blob/master/MIGRATION.md#migrating-from-40-to-50)
  - BETA: o-header-services v3.0.0-beta.3 was released, [see PR](https://github.com/Financial-Times/o-header-services/pull/51)
  - MINOR: o-typography v5.8.0 was released, [see the PR for more info](https://github.com/Financial-Times/o-typography/pull/166)
  - MINOR: 7 new faces were published to [our headshot image set](https://registry.origami.ft.com/components/headshot-images)
  - MINOR: 2 new icons were published to [our icon image set](https://registry.origami.ft.com/components/fticons)
  - PATCH: [o-colors v4.7.10](https://registry.origami.ft.com/components/o-colors@4.7.10) was released, adding whitelabel brand support
  - PATCH: [o-layout v2.2.5](https://registry.origami.ft.com/components/o-layout@2.2.5) was released, allowing links to be unstyled
  - PATCH: [o-grid v4.4.5](https://registry.origami.ft.com/components/o-grid@4.4.5) was released, fixing an auto-prefixer issue
  - PATCH: [origami-build-tools v7.12.3](https://github.com/Financial-Times/origami-build-tools) was released
  - PATCH: We did some consistency and maintenance work on:
    - o-icons
    - o-table
    - o-tracking



*[TL;DR]: too long; didn't read