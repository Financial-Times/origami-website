---
title: Origami Newsletter, April 2020
description: This issue features the Origami Component Survey, Automating Visual Testing of Origami Components and moving from CircleCI to GitHub Actions
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

### Origami Components Survey

This quarter we are aiming to find out what our users know about Origami, how much of Origami they use and how we can improve our products for all of our users.

Our first survey has already gone out, it was to find out how we can help teams build their own Origami Components. You can read more about the survey results [on our blog](https://origami.ft.com/blog/2020/04/20/origami-survey-results/).

### Automated Visual Regression Testing

When reviewing changes made to an Origami Component, we have to view the component in multiple browsers, at mulitple resolutions and mulitple different configurations for the component. This is to check if any visual bugs have been introduced accidentally as part of the change. It is a rather taxing and manual piece of work.

We've automated all of that manual work now. Now when a change is made to an Origami Component, if the change has caused any of the visual aspects of the component to be different we are made aware of those changes and can quickly review and approve the work.

This work has already proved to be useful by immediately finding a visual regression for a change in o-teaser, which we were able to fix before it went live on any website.

<img width="980" alt="Screenshot which shows the visual regression tooling working on the o-teaser component" src="https://user-images.githubusercontent.com/1569131/80602987-bc8df900-8a27-11ea-84b2-1329c45a3d3b.png">

### Moved from CircleCI to GitHub Actions

We've moved all of our automated tooling which was on CircleCI to GitHub Actions. This should shorten the size of the CircleCI queue for every FT project, making everyone's feedback loop shorter.

Moving to GitHub Actions has helped us manage all our repositories by making it simple to automate types of work such as releasing changes and adding tickets to our project board.

As part of this work we've also made a [GitHub Action for the Operations & Reliability Change API](https://github.com/Financial-Times/change-api-action/).


## Special Thanks

This months special thanks goes to TODO

## Broader Update

A digest list of other things that have happened since our last update:

TODO
