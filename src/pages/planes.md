---
title: Planes
layout: base.html
---
# {{ title }}

<div class="page-link-list">
{% for planes in collections.planes %}

[{{ planes.data.title}}]({{ planes.url }})

{% endfor %}
</div>