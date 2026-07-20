---
title: Locations
layout: layouts/page.html
tag:
    - pages
---
# {{ title }}

{% for locations in collections.locations %}

[{{ locations.data.title}}]({{ locations.url }})

{% endfor %}