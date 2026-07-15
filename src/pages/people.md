---
title: People
layout: base.html
---
# {{ title }}

{% for people in collections.people %}

[{{ people.data.title}}]({{ people.url }})

{% endfor %}