---
title: Origami Documentation
description: TODO
permalink: /docs/

# Navigation config
nav_display: true
nav_label: Documentation
nav_order: 10
---


# {{page.title}}

## Documents

<ul>
	<li>
		<a href="/docs/principles/">Principles</a>
		{% assign documents = site.principles | sort: 'nav_order', 'last' %}
		<ul>
			{% for item in documents %}
				<li><a href="{{item.url}}">{{item.title}}</a></li>
			{% endfor %}
		</ul>
	</li>
	<li>
		<a href="/docs/components/">Components</a>
		{% assign documents = site.components | sort: 'nav_order', 'last' %}
		<ul>
			{% for item in documents %}
				<li><a href="{{item.url}}">{{item.title}}</a></li>
			{% endfor %}
		</ul>
	</li>
	<li>
		<a href="/docs/services/">Services</a>
		{% assign documents = site.services | sort: 'nav_order', 'last' %}
		<ul>
			{% for item in documents %}
				<li><a href="{{item.url}}">{{item.title}}</a></li>
			{% endfor %}
		</ul>
	</li>
	<li>
		<a href="/docs/tutorials/">Tutorials</a>
		{% assign documents = site.tutorials | sort: 'nav_order', 'last' %}
		<ul>
			{% for item in documents %}
				<li><a href="{{item.url}}">{{item.title}}</a></li>
			{% endfor %}
		</ul>
	</li>
</ul>
