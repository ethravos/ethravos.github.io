---
title: Players
layout: layouts/page.html
tag:
    - pages
---
# {{ title }}

{% for players in collections.players %}

[{{ players.data.title}}]({{ players.url }})

{% endfor %}