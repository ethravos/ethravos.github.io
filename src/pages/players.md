---
title: Players
layout: base.html
---
# {{ title }}

<div class="page-link-list">
{% for players in collections.players %}

[{{ players.data.title}}]({{ players.url }})

{% endfor %}
</div>