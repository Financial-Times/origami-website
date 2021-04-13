---
title: Origami Newsletter, March 2021
description: Updated Origami workshops. Work has begun to migrate Origami to npm. Reminder, we deprecate FT's Bower Registry in July. 2021 and plan to decomission in July 2022.
author: Jake Champion
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


### Update on the migration to npm (dropping Bower support)

During January we announced our plan to [decommission the FT Bower Registry and migrate to the public npm registry](https://origami.ft.com/blog/2021/01/18/deprecating-bower-and-origami-via-npm/#who-does-this-affect).

Work has now started on migrating the Origami components onto npm, 8 out of 66 of our component are now ready to be migrated. We aim to have all components, including documentation/guidance for how to migrate your products, complete by the start of Q3.

As a reminder, below is a copy of our planned timeline to decommission the FT Bower Registry.

1st July 2021 - Origami Components moved from Bower to npm and guides to migrate are written

1st July 2021 - Deprecate the FT Bower Registry

1st July 2022 - Decommission the FT Bower Registry



### New “Introduction to Origami components”workshop dates announced

This workshop is great for people who are new to Origami or want a refresher on how to build with Origami.

The workshop contents has had a revamp, it has been rewritten to be better suited for a remote audience and includes xyz and abc

The dates we plan to run the workshop on are:
- 42nd of borktober (include link to the Google Calendar entry)
- 57th of Coffeeuary (include link to the Google Calendar entry)


### Guidance on how to customise an Origami component

We now have a page to help our users decide if they need to customise an Origami component, and if so, how to go about it in a safe, supported way which should reduce the chance of the customisation breaking in the future.

Please [have a read through the page](https://origami.ft.com/docs/components/customisation/) and let us know of any feedback you may have or suggestions for other topics we could write guidance for.


## Special thanks

We recently had an uptick in the amount of security researchers wanting to submit reports about potential issues on [polyfill.io](https://polyfill.io). We'd like to thank the Cyber Security team for communicating with the security researchers and reviewing their reports for us.

## Broader update

A digest of other things that have happened this month:

- [Financial-Times/origami-build-service](https://api.github.com/repos/Financial-Times/origami-build-service)
   - Deprecated the use of `modules` for anything that's not in the allow-list.
   - Error message "check your typos" updated to "check for typos".
   - Added autoprefixer for css and using the same browser config as origami-build-tools.
   - Only allows @financial-times namespaced components to be requested in v3.
   - Renamed the modules and module query parameters to components and component in v3.
   - Implemented the /v3/demo and /v3/demo/html endpoints.

- [Financial-Times/o-layout](https://api.github.com/repos/Financial-Times/o-layout)
   - Add master brand support for default, bleed, documentation layouts.
   - Support `figure` in the `o-layout-typography` wrapper.

- [Financial-Times/origami-build-tools](https://api.github.com/repos/Financial-Times/origami-build-tools)

   - Add validation for package.json.browser field
   - Add validation for package.json.name field
   - Improve tests for verify-package-json
   - Remove unused component fixture
   - Verify package.json manifest has description and keywords
   - Make `obt test --debug` watch for changes and rebuild tests.
   - expect origamiVersion to be the "2.0" string

- [Financial-Times/o-tracking](https://api.github.com/repos/Financial-Times/o-tracking)
   - Duplicate click events from multiple browser contexts
   - Fix bug where loading spoor-id from the cookie would silently fail

- [Financial-Times/origami-repo-data](https://api.github.com/repos/Financial-Times/origami-repo-data)
   - Only read `keywords` property from the package.json manifest and not origami.json or bower.json
   - Allow origami version to be the "2.0" string
   - spec v2 component `Version`s have no `languages`, when they do
   - Correct the languages property of spec v2 component versions
   - Move `Version.createFromIngestion` logic.
   - use v3 of the build service for spec v2 components

- [Financial-Times/o-fonts](https://api.github.com/repos/Financial-Times/o-fonts)
   - Add FinancierDisplayWeb Light/Semibold support.

- [Financial-Times/create-origami-component](https://api.github.com/repos/Financial-Times/create-origami-component)
   - Move description and keywords to the package.json
   - Update v2 workflows to current impl

- [Financial-Times/origami-image-service](https://api.github.com/repos/Financial-Times/origami-image-service)
   - mention the ECONNREFUSED error so it appears when grepping

- [Financial-Times/polyfill-library](https://api.github.com/repos/Financial-Times/polyfill-library)
   - Update Intl.DateTimeFormat browser config to match MDN
   - Element.prototype.getAttributeNames

- [Financial-Times/o-table](https://api.github.com/repos/Financial-Times/o-table)
   - Allow for multiple filters to be declared declaratively

- [Financial-Times/o-message](https://api.github.com/repos/Financial-Times/o-message)
   - Match padding left and right given a close button and centred message
   - Align feedback notices centre when there is one line of copy.

- [Financial-Times/o-forms](https://api.github.com/repos/Financial-Times/o-forms)
   - Allow multi-line box-style radio button copy, making them taller.
   - Transparent radio buttons can make them look inactive
   - Add a white background to internal brand radio inputs.

- [Financial-Times/o-topper](https://api.github.com/repos/Financial-Times/o-topper)
   - Include default link style for toppers with colour

- [Financial-Times/o-grid](https://api.github.com/repos/Financial-Times/o-grid)
   - Restore snappy mode (de-deprecate)

- [Financial-Times/o-share](https://api.github.com/repos/Financial-Times/o-share)
   - Make the new corporate icon from fticons available in o-share