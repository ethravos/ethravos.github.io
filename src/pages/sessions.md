---
title: Sessions
layout: sessions.html
---
# {{ title }}

{% for sessions in collections.sessions %}

[{{ sessions.data.title}}]({{ sessions.url }})

{% endfor %}