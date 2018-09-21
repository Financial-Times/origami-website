---
title: Origami Specification (Formal)

# Navigation config
nav_display: true
nav_label: Formal Spec
nav_order: 10
---

# {{page.title}}

This is the formal Origami specification. This section of the site defines in detail the requirements for building Origami-compliant components and services. The [specification overview](/spec/v1/) explains the language used across these documents, and we also provide a less verbose [condensed specification](/spec/v1/condensed/) which we recommend for beginners.


## Naming

The name **repository** refers to a collection of files and folders which are stored in version control (such as <a href="https://git-scm.com/" class="o-typography-link--external" target="_blank">Git</a>).

The name **component** refers to a repository that:

  - Provides front end code which can be used as part of a web page
  - Complies with the [component specification](/spec/v1/components/)

The name **service** refers to a repository that:

  - Provides code for a web service which can be interacted with over HTTPS
  - Complies with the [service specification](/spec/v1/services/)

The name **manifest** refers to a file in a repository that:

  - Has the name `origami.json`
  - Sits at the top of the repository's directory structure
  - Complies with the [`origami.json` manifest specification](/spec/v1/manifest/)


## Next steps

Review the individual specifications:

  - Read the [component specification](/spec/v1/components/)
  - Read the [service specification](/spec/v1/services/)
  - Read the [origami.json manifest specification](/spec/v1/manifest/)
