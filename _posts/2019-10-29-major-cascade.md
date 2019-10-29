---
title: Major Cascade 2019
description: We are working on a major release of low level components like o-typography, o-buttons, and o-colors, which will also mean a major release of other components which depend on them. What are we up to? And why?
author: Lee Moody
---

The Origami team maintain around 52 front end components. A component is a shared piece of user-interface which, along with other components, is used to build a webpage.

We are working on a major release of low level components including o-typography, o-buttons, and o-colors which will require a major release of dependent components which use them, and components which use those components, and so on. This is a process we call a major cascade.

In this blog post we'll discuss what a major cascade looks like and what high-level improvements migrating to the latest version of Origami components will bring.

## The Major Cascade

Some components are low level &#8212; fundamental building blocks used to build most pages and lots of other components. o-typography is an example of a low level component.

Other components are high level &#8212; complex components which are used in end products and rarely used to build other components. o-table is an example of a high level component.

As low level components are used to build other components there are more projects between them and the end product. To make major changes to a low level component means upgrading each project in-between step by step.

<figure>
	<img alt="" src="/assets/images/2019-10-31-major-cascade/all-graph.svg?source=origami" />
	<figcaption class="o-typography-caption">
        An example graph of product dependencies. Low level components o-colors and o-typography branch out; they are included in final products directly and indirectly via other components including o-table.
	</figcaption>
</figure>

<figure>
	<img alt="" src="/assets/images/2019-10-31-major-cascade/typography-graph.svg?source=origami" />
	<figcaption class="o-typography-caption">
        Dependencies on o-typography, a low level dependency, are a large portion of the overall graph. Components in-between including o-buttons and o-table must be upgraded before the end products can be upgraded.
	</figcaption>
</figure>

<figure>
	<img alt="" src="/assets/images/2019-10-31-major-cascade/table-graph.svg?source=origami" />
	<figcaption class="o-typography-caption">
        Dependencies on o-table, a high level dependency, are a small portion of the overall graph. If a major version of o-table is released the end projects may be updated immediately.
	</figcaption>
</figure>

## Typography

o-typography is used by every group in Product & Tech in some way: from ft.com, through internal tools, to specialist titles. o-typography includes fundamental Financial Times typographical styles including our fonts and font scale, but also includes more specific styles to present ft.com articles. This creates a huge dependency graph and makes releasing major changes tricky -- it requires coordination between many groups and impacts over 167 projects across the Financial Times, which may or may not be active.

If we want to make major changes to our article typography across ft.com, the app, interactive graphic pages, amp pages, and our content management systems that should not impact our internal tooling. So as part of the major release of o-typography we're splitting specific styles used by ft.com and other "master brand" products from o-typography into two new components. These are o-editorial-typography and o-editorial-layout. These smaller, simpler, higher level components means:

- Faster iteration on article typographical styles.
- Faster websites (through smaller CSS bundle sizes).
- Smaller migration paths when major releases are made.
- A reduced learning curve for developers and designers.

Along with the Product Design team we also audited existing users of editorial styles. Where we discovered design divergence between projects we merged an updated version back into o-editorial-typography to improve design consistency and quality when moving between Financial Times experiences.

<figure>
	<img alt="" src="/assets/images/2019-10-31-major-cascade/blockquote-1.png?source=origami" />
	<figcaption class="o-typography-caption">
        Unique blockquote-like style one.
	</figcaption>
</figure>

<figure>
	<img alt="" src="/assets/images/2019-10-31-major-cascade/blockquote-2.png?source=origami" />
	<figcaption class="o-typography-caption">
        Unique blockquote-like style two.
	</figcaption>
</figure>

<figure>
	<img alt="" src="/assets/images/2019-10-31-major-cascade/blockquote-3.png?source=origami" />
	<figcaption class="o-typography-caption">
        Unique blockquote-like style three.
	</figcaption>
</figure>

With editorial styles moved, we made a host of other changes to simplify o-typography for developers. See more details in the [o-typography v6 proposal](https://github.com/Financial-Times/o-typography/issues).
