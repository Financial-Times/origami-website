---
title: Origami npm announcement and guides on how to migrate products
description: We have released new versions of Origami components which bring full NPM support and drops support for Bower. This post explains the changes and how to migrate products to the new version.
author: Origami

# Redirect from legacy URLs
redirect_from:
  - /docs/tutorials/npm/
  - /docs/tutorials/bower-to-npm/
---

We are have completed our migration of Origami from Bower onto the [NPM registry](https://www.npmjs.com/). The current versions which are on Bower are now deprecated and we recommend all products migrate to the new implementation to keep up-to-date with future releases to Origami.

The [FT Bower Registry](https://origami-bower-registry.ft.com/) has now been placed into a maintenance only mode for 12 months, after then we will look to decommission the service completely.

Moving Origami from Bower to NPM provides many benefits, such as:
- Aligning our front-end practices with those now most commonly used across the company and the wider industry, which should help the onboarding of new software engineering hires.
- Origami components can now make use of the 1.6 million packages which are on the NPM registry.
- Origami components will be able to use modern tooling instead of the Origami team having to build bespoke tooling ourselves.
- Services such as Snyk, Dependabot, and Renovate will be able to work for the Origami dependencies a project has.

# What has changed for Origami users?

The code for Origami components has remained largely the same, aiming to make the migration simpler for our users. The one change we had to make was making the package name for all components now start with `@financial-times/`, as they are published under the financial-times namespace on npm. This change means that when importing the javascript and/or sass of a component, you will need to prepend `@financial-times/` to the imported package name.

If using Origami components via NPM, it is required to use NPM version 7, this is because version 7 ensures that Origami components are only installed once and no conflicting versions are installed. Origami components do not support using older versions of NPM.

# Plans for the future

Origami used to be versioned only with a major version (Origami 1), this made it hard to track any of the changes being made to Origami which did not warrant incrementing the major version. Now we have incremented the major version, we thought it was a good time to include minors in the versioning scheme. This will make it simpler to make more frequent changes to Origami as a whole and have a record of what thoses changes were and when they were made.

We are looking for people's thoughts on what Origami is missing and/or how Origami could be reimagined to help better achieve it's aim to unify and document the style and experience across the digital products of every FT brand. Some of the parts of Origami we are wanting to improve are around how the documentation and demonstrations for the components are built. Currently they are built in isolation of one another, we would like to see if building them together would lead to a better documented and test set of components.

# First Origami npm-only Origami Component

We've been working on an autocomplete Origami component, which has been requested by several different FT products. By making this an npm-only component, we've been able to benefit from autocomplete packages which already exist on NPM, such as the one made by Gov UK named [accessible-autocomplete](https://github.com/alphagov/accessible-autocomplete). This has greatly reduced the amount of code we would have had to write ourselves and meant we could create a prototype for products to trial in a shorter turnaround then previously possible.

# Migration Guides

## Using Origami via Bower

All Origami components are published to the `@financial-times` namespace of NPM.

1. Run the project locally in its current state, using the version of NPM the project expects right now
1. Upgrade to the latest major versions of any Origami bower components you are using:
    1. Confirm the project is still working correctly
1. If the project is not using NPM version 7:
    1. Clean the directory of node_modules and any built artefacts
    1. Switch to NPM version 7 and install the dependencies
    1. Confirm the project is still working correctly - If it is not working, try deleting the `package-lock.json` and/or `npm-shrinkwrap.json` files and run `npm install` again. There is a known issue with upgrading to NPM version 7 and those files becoming corrupted.
1. Clean the directory of node_modules and any built artefacts
1. Install all origami dependencies as npm dependencies and remove them from the `bower.json` file. All the components are under the `@financialt-times` namespace on NPM. I.E. To install o-table, `npm install @financial-times/o-table`.
1. If there are still dependencies declared in the `bower.json` file, try and find the corresponding package on the NPM registry.
1. Remove the `bower.json` file and `.bowerrc` file if it exists. E.G. `rm -f .bowerrc bower.json`
1. Remove the `bower_components` directory. `rm -rf bower_components`
1. Remove `bower` from the `package.json` file. E.G. `npm uninstall bower`
1. Update the Sass compiler's `includePath` configuration to include `node_modules` and remove `bower_components`
1. Update the Origami Sass imports to include the `@financial-times` namespace. E.G. `@import 'o-icons/main';` becomes `@import '@financial-times/o-icons/main';`
1. Update your Origami JavaScript imports to include the `@financial-times` namespace. E.G. `import oTracking from 'o-tracking';` becomes `import oTracking from '@financial-times/o-tracking';` and `import 'o-layout';` becomes `import '@financial-times/o-layout';`
1. Run the project locally and confirm it is still working correctly
1. The migration to npm Origami components is finished! :tada:



## Using Origami via Origami Build Service

Origami Build Service v3 is the version which supports Origami components on npm.
There is an [Origami Build Service URL Updater](https://www.ft.com/__origami/service/build/url-updater) which will help projects migrate to Origami components on npm.
For Origami Build Service projects, there requires no JavaScript or CSS changes to be made.

1. Run the project locally in its current state and confirm the project is still working correctly
1. Upgrade to the latest major versions of any Origami components you are using, you can do this by using the [Origami Build Service URL Updater](https://www.ft.com/__origami/service/build/url-updater)
    1. Confirm the project is still working correctly
1. Update the Origami Build Service urls to use v3 instead of v2, you can do this by using the [Origami Build Service URL Updater](https://www.ft.com/__origami/service/build/url-updater)
1. Run the project locally and confirm it is still working correctly
1. The migration to npm Origami components is finished! :tada:

## Using Origami via beta NPM

1. Run the project locally in its current state and confirm the project is still working correctly
1. If the project is not using NPM version 7:
    1. Clean the directory of node_modules and any built artefacts
    1. Switch to NPM version 7 and install the dependencies
        1. Confirm the project is still working correctly - If it is not working, try deleting the `package-lock.json` and/or `npm-shrinkwrap.json` files and run `npm install` again. There is a known issue with upgrading to NPM version 7 and those files becoming corrupted.
1. Clean the directory of node_modules and any built artefacts
1. Upgrade to the latest major versions of any Origami components you are using
1. If using `lockspot` or `is-origami-flat`, these should be removed as they are no longer needed when using NPM version 7. `npm uninstall lockspot is-origami-flat`
1. Run the project locally and confirm it is still working correctly
1. The migration to npm-only Origami components is finished! :tada:


# Tracking migrations

We can detect when the relevant repos have been updated to remove Bower. Using that data, once a week we will update:

- This [google spreadsheet](https://docs.google.com/spreadsheets/d/1Pem5e6cR0aiuKpYa7VD08AnSSynzjRtWt_VAHAoyhPQ/edit#gid=0), which contains the projects that are using Origami via Bower.
- The associated [entry in the Risk Register](https://biz-ops.in.ft.com/Risk/origami-components-via-bower) which is linked to all the affected systems that we know of.

Below is a breakdown of how many systems and repositories will need to be migrated, split by group:

| Group                    | Systems to migrate | Repositories to migrate |
| ---------------------------- | ---------------------- | --------------------------- |
| Customer Products            | 25                     | 74                          |
| FT Core                      | 2                      | 10                          |
| FT Professional              | 4                      | 6                           |
| Internal Products            | 4                      | 2                           |
| Operations &amp; Reliability | 3                      | 41                          |
