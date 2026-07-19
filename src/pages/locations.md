---
title: Locations
layout: base.html
---
# {{ title }}

<div class="page-link-list">
{% for locations in collections.locations %}

[{{ locations.data.title}}]({{ locations.url }})

{% endfor %}
</div>