---
title: Gods
layout: base.html
---
# {{ title }}

{% for gods in collections.gods %}

[{{ gods.data.title}}]({{ gods.url }})

{% endfor %}