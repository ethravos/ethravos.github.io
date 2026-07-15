---
title: Gods
layout: base.html
---
# {{ title }}

<div class="page-list">
{% for gods in collections.gods %}

- [{{ gods.data.title}}]({{ gods.url }})

{% endfor %}
</div>