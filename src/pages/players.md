---
title: Players
layout: base.html
---
# {{ title }}

{% for players in collections.players %}

[{{ players.data.title}}]({{ players.url }})

{% endfor %}