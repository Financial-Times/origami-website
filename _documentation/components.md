---
title: Components
collection_id: components
---

# {{page.title}}

## WHAT
An Origami component is a collection of styles and functionality. It provides reusable HTML, SCSS and JavaScript for a multitude of different products under the FT umbrella.

## HOW

Should there be a decision tree pointing at tutorials here?
### TUTORIALS


## USAGE
<ul>
	{% for item in site[page.collection_id] %}
		{% if item.category == 'usage' %}
			<li>
				<a href="{{item.url}}">{{item.title}}</a>
			</li>
		{% endif %}
	{% endfor %}
</ul>

## COMPATIBILITY

<ul>
	{% for item in site[page.collection_id] %}
		{% if item.category == 'compatibility' %}
			<li>
				<a href="{{item.url}}">{{item.title}}</a>
			</li>
		{% endif %}
	{% endfor %}
</ul>
