---
title: Sessions
layout: base.html
---
# {{ title }}

{% for sessions in collections.sessions %}

[{{ sessions.data.title}}]({{ sessions.url }})

{% endfor %}