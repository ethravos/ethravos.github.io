---
title: Planes
layout: base.html
---
# {{ title }}

{% for planes in collections.planes %}

[{{ planes.data.title}}]({{ planes.url }})

{% endfor %}