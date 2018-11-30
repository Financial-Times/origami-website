---
title: Accessibility

# Navigation config
nav_display: true
nav_label: Accessibility
nav_order: 30
---

# {{ page.title }}

Accessibility is an important aspect of web development at the Financial Times and within Origami. The <abbr title="Financial Times">FT</abbr> website has an AA level <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> accessibility accreditation. This means that we have met certain criteria to make our website more accessible to people with disabilities.

Since FT.com uses Origami extensively, it is also our responsibility to uphold the standards of accessibility that we have been accredited with. In order to do that, we follow a few guidelines when building our components.

- We place a lot of importance on contrast. we maintain a [contrast checker](#todo) to help our designers and other developers to uphold a contrast that will satisfy the minimum criteria (level AA).
- We test our work with screen readers, to assess how the well our disabled users interact with our components.
- We use [`pa11y`](#TODO), a tool that enables us to test the validity and accessibility of our markup.


The <a href="https://www.w3.org/TR/WCAG20/" class="o-typography-link--external" target="_blank" rel="noopener"><abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0</a>
