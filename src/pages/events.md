---
title: Events
layout: layouts/page.html
tag:
    - pages
---
# {{ title }}

{% for events in collections.events %}

[{{ events.data.title}}]({{ events.url }})

{% endfor %}