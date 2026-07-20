---
title: Sessions
layout: layouts/page.html
tag:
    - pages
---
# {{ title }}

{% for sessions in collections.sessions %}

[{{ sessions.data.title}}]({{ sessions.url }})

{% endfor %}