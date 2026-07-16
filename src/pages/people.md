---
title: People
layout: base.html
---
# {{ title }}

<div class="page-link-list">
{% for people in collections.people %}

[{{ people.data.title}}]({{ people.url }})

{% endfor %}
</div>