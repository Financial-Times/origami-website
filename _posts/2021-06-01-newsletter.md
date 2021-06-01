---
title: Origami Newsletter, May 2021
description: undefined
author: chee rabbits, lee moody
tags:
- Newsletter
---

<abbr title="Too long; didn't read">
<strong>
TL;DR:
</strong>
</abbr> {{page.description}}

## Top things

Some of the bigger Origami news from the last month:


### The Origami specification is no more

The team spent most of the month revisiting the Origami Specification. We were trying to separate the parts of it that were developer advice from the parts that were relied on by our tools and services. After reducing the specification from 35 pages to 3, we had one last meeting in which we ultimately decided to retire the specification entirely.

### What do people mean when they say Origami?

When other teams say Origami, they tend to mean either the FT’s design or our team.

When we say Origami we tend to mean our reference implementation of the brand guidelines.

### What is the benefit of the specification?

Origami was originally conceived as a series of specifications for components and services. There was an expectation that people all over the company and at external agencies would be building new Origami components and services all the time. In that context, a shared contract made a lot of sense.

But that’s not how it ended up. Origami components are mostly built by our team, and we’re always in the loop when other teams build Origami components. 

Teams don't trust the specification, they trust **us**.

The specification wasn't what kept our components working in all the environments they were used in: we did!

We've always been vigilant about not breaking things for people, and that will never change. Breaking changes will _always_ happen in major versions.

Retiring the specification gives us the opportunity to create better, faster, more modern components and to make sure that Design are a leading part of the process.

We'll be going into a lot more detail about our plans in a blog post at the end of Q2.



### 




### 




## Special thanks

This issues special thanks goes to Nick Ramsbottom! Nick worked with us on a component update to support New Product Development work, and enthusiastically got involved in the development. Together we were able to avoid project-specific overrides for a more reliable, consistent user interface.

If your team are looking to customise an Origami component for a project, checkout our [guide to component customisation](https://origami.ft.com/docs/components/customisation/) or contact the team for support.

## Broader update

A digest of other things that have happened this month:


