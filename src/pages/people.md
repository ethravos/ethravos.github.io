---
title: People
layout: people.html
---
# {{ title }}

{% for people in collections.people %}

[{{ people.data.title}}]({{ people.url }})

{% endfor %}