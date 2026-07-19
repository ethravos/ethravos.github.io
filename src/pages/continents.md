---
title: Continents
layout: base.html
---
# {{ title }}

<div class="page-link-list">
{% for continents in collections.continents %}

[{{ continents.data.title}}]({{ continents.url }})

{% endfor %}
</div>