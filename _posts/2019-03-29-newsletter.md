---
title: Origami Newsletter, March 2019
description: This issue features the new Origami website, a quantitative change in the Polyfill Service's capacity and a clarification on a problem we introduced—and promptly recitified—regarding our components
author: Gabrielle von Koss
tags:
  - Newsletter
---

**TL;DR:** This issue features the new Origami website with a new design and new documentation, a highlight of the improved service that the Polyfill Service provides, and an explanation of how ECMAScript Modules broke our components.

## Top three things

These are some of the bigger things we've worked on or released over the last month.

### Origami Website Launch

This month we've successfully launched the [new Origami website](https://origamit.ft.com). It is officially out of beta, and implements all of the new features of o-layout, which has unified the design across our documentation and our registry. 

In addition to the visual changes, this launch is packed full of new documentation and a more digestible specification. You can find more detailed information about the launch in [this blog post](https://origami.ft.com/blog/2019/03/11/site-update)

As always, we welcome any feedback or questions you might have about the new website's content and UI.

### Polyfills served

Three years ago, the [Polyfill Service](https://polyfill.io) served 400 million polyfills per month. Today, it serves **800 million** _every day_ 💪.

### ECMAScript Modules vs CommonJS

The problem: We attempted to replace CommonJS with ECMAScript Modules across some of our components.

The aim was to align our components' JavaScript more closely to the standard of JavaScript that is used in web browsers, which is ECMAScript Modules. 

We also wanted to update our tooling infrastructure to avoid relying on `babel-plugin-add-module-exports`. The intention is to get to a place where teams would not need to compile Origami components' JavaScript in order to use it.

This shift caused a breaking change as it brought about client-side JavaScript errors for some projects and users. 

We have since reverted those changes and are working on a different approach. If there is anything that we might have missed or any questions you might have, please get in touch with the team.

## Special thanks

Special thanks to the BizOps team for implementing the most recent version of <a href="https://registry.origami.ft.com/components/o-layout?brand=internal" target="_blank">o-layout</a> so quickly after its release, and flagging small bugs for us 🙌.

## Broader update

A digest list of other things that have happened over the last month.

  - MAJOR: [o-lazy-load v1.0.0](https://registry.origami.ft.com/components/o-lazy-load@1.0.0) is no longer in beta and is ready for use on production websites.
  - MAJOR: [origami-build-tools v8.0.0](https://github.com/Financial-Times/origami-build-tools#migrating-from-7xx-to-8xx) was released, dropping support for Node.js 6
  - MAJOR: o-date v3.0.0 was released, removing server-side support. [See migration guide](https://github.com/Financial-Times/o-date#migrating-from-v2-to-v3)
  - BETA: o-table v7.3.0-beta.1 was released, adding in table filtering. [See the registry for demos](https://registry.origami.ft.com/components/o-table@7.3.0-beta.1)
  - MINOR: [o-chat v3.1.0](https://registry.origami.ft.com/components/o-chat@3.1.0) deprecates o-chat. If you have any questions about this component, please speak to the team.
  - MINOR: 17 new faces were published to [our headshot image set](https://registry.origami.ft.com/components/headshot-images).

*[TL;DR]: too long; didn't read
