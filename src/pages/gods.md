---
title: Gods
layout: layouts/page.html
tag:
    - pages
---
# {{ title }}

{% for gods in collections.gods %}

[{{ gods.data.title}}]({{ gods.url }})

{% endfor %}