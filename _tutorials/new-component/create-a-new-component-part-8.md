---
title: Create A New Origami Component - Part 8 Component Lifecycle
description: A step-by-step tutorial which teaches you how to build and deploy a new Origami component.
cta: Learn how to create an Origami component
collection_listing_display: false

---

# {{page.title}}

In part eight we will learn how to publish our component to the Origami registry 🎉, and discuss the lifecycle of a published component.

_We don't actually want to publish an example component `o-example`. If you have been following along so far using `o-example`, rather than working on your own component that should actually be published, read this part of the tutorial as a reference only until you're ready to publish a new component for real._

## Push To Github

The first step of publishing our component to the Origami Registry is to commit our work and push to a new Github repository under the [Financial-Times](https://github.com/Financial-Times/) organisation (or other [supported Github organisation](https://origami.ft.com/spec/v1/components/#source-control)). There is a [new Github repository tutorial](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-new-repository) which might be helpful if you have never created a remote Github repository before. Note Origami repositories are usually public and open-source unless there is a reason not to be (for example [o-fonts-assets](https://github.com/Financial-Times/o-fonts-assets/) is private due to our font license).

When your new component is pushed to Github [update access in the Github settings of your repository](https://docs.github.com/en/github/getting-started-with-github/access-permissions-on-github). Grant these teams the following permissions:
- `@origami-read-only`: **read** - required, for a team of helpful Origami bots
- `@origami-collaborators`: **write** - so engineers from other teams may contribute
- `@origami-core`: **admin** - so Origami team members can help to the fullest

Origami components uses a tool called Dependabot to automatically update developer dependencies. The Dependabot Github user `dependabot-preview` must be allowed to push to the default branch if there are Github branch protections enabled. See the Github tutorial on [how to allow Github users to push to protected branches](https://docs.github.com/en/github/administering-a-repository/enabling-branch-restrictions).

<figure>
	<img alt="" src="/assets/images/tutorial-new-component/hello-world-demo-19-github.png" />
	<figcaption class="o-typography-caption">
        The "dependabot-preview" bot user has access to push to the default, protected branch.
	</figcaption>
</figure>

## Github Actions

You may have noticed that the `obt init` command created a directory `.github`. It contains configuration for Github including `CODEOWNERS` which will automatically assign a Github team to review new pull requests, `ISSUE_TEMPLATE.md` which is used to direct contributors when opening new Github issues, and a nested directory `workflows` which contains configuration for Github Actions.

Origami components use Github Actions for a number of helpful functions including:
- synchronise github [labels](https://github.com/Financial-Times/origami-labels#labels) for issues and pull requests ([learn about Github labels](https://docs.github.com/en/github/managing-your-work-on-github/about-labels))
- run component tests when new commits are made to a pull request
- add a [semver](https://semver.org/) git tag to release a component when a pull request with a [release label](https://github.com/Financial-Times/origami-labels#continuous-delivery-labels) is merged
- build and publish an [npm](https://www.npmjs.com/) package when a release is made with a git tag, so Origami components may be included via [Bower](https://bower.io/) or [npm](https://www.npmjs.com/)

To see these Github Actions in practise let's release our component.

## Initial Release

Lets release the first version our new component. This will display our component in the Origami Registry and send a Slack notification to `#origami-support`.

Our first release will be `1.0.0` following the [semver specification](https://semver.org/). Origami components [do not release versions lower than 1.0.0](https://origami.ft.com/spec/v1/components/#component-release) but you may choose to release a beta `1.0.0-beta.1` again following the [semver specification](https://semver.org/).

Before we release this is a good time to update the components [support status](/spec/v1/manifest/#supportstatus) in `origami.json` according to whether this release of the component will be `experimental` (the component is not ready for production use), or `active` (feature development ongoing, bug reports will be gratefully received and acted upon promptly), etc.

To release an Origami component create a git tag named after the semver version but beginning with a `v` e.g. `v1.0.0`. Add the tag either through the [Github release interface](https://docs.github.com/en/github/administering-a-repository/managing-releases-in-a-repository) or through the command line:

```
git tag v1.0.0
git push origin v1.0.0
```

Within a couple of minutes at most, your component should be visible in the [Origami Registry](https://registry.origami.ft.com/components?module=true&imageset=true&active=true&maintained=true&experimental=true) and should be published to the [npm registry](https://www.npmjs.com/~the-ft) 🎉. If not you may want to confirm that the `obt test` and `obt verify` commands pass without error, check the output of the Github Actions under the 'Actions" tab, or contact the Origami team for support.

## Subsequent Releases

After the first release, Origami components may be released automatically by applying one of the Origami labels `release:patch`, `release:minor`, or `release:major` to pull requests (see [Github instructions on applying labels](https://docs.github.com/en/github/managing-your-work-on-github/applying-labels-to-issues-and-pull-requests)). When a pull request is merged with a release label a Github Action will create a new [semver](https://semver.org/) git tag, according to which label was used. A comment on the PR will let you know what version number was released.

<figure>
	<img alt="" src="/assets/images/tutorial-new-component/hello-world-demo-20-github.png" />
	<figcaption class="o-typography-caption">
        This image shows a component pull request which has been merged and released. The `release:patch` label was first added to the PR. It was then merged. A Github action responded to the release label on merge. It checked the latest release number `v8.1.1` and, as a patch release, calculated the next version should be `v8.1.2`. The Github action then created a new tag `v8.1.2` to release the new version and posted a comment on the pull request.
	</figcaption>
</figure>

The [semver specification](https://semver.org/) documents what constitutes a major, minor, or patch release. There are also some [Origami specific considerations](/docs/components/versioning/#how-components-are-versioned) to keep in mind when versioning a component. For example we may opt to release a major version of a component even with a compatible  <abbr title="application programming interface">api</abbr> if it includes drastic visual change.

## Component Lifecycle

As other teams may depend on Origami components its important to follow the [semver specification](https://semver.org/) when versioning components as discussed previously. It is also important to communicate upcoming changes. The Origami specification includes a section on the [component lifecycle](/spec/v1/components/#component-lifecycle) which includes guidance on how to manage existing components as they mature. The guidance includes how to communicate new releases, the deprecation of component features, and the deprecation of components which are no longer needed.

## @todo

- @todo add a table of contents
- @todo check the intro and outro of each part flows
- @todo setout expectations of prior knowledge and check they are correct
- @todo add percy test note
