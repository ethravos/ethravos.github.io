---
title: Continents
layout: base.html
---
# {{ title }}

{% for continents in collections.continents %}

[{{ continents.data.title}}]({{ continents.url }})

{% endfor %}