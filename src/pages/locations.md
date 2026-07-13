---
title: Locations
layout: base.html
---
# {{ title }}

{% for locations in collections.locations %}

[{{ locations.data.title}}]({{ locations.url }})

{% endfor %}