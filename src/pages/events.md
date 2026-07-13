---
title: Events
layout: base.html
---
# {{ title }}

{% for events in collections.events %}

[{{ events.data.title}}]({{ events.url }})

{% endfor %}