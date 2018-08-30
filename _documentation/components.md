---
title: Components
collection_id: components
---

# {{page.title}}

<ul>
	{% for item in site[page.collection_id] %}
		<li>
			<a href="{{item.url}}">{{item.title}}</a>
		</li>
	{% endfor %}
</ul>
