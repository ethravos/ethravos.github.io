---
title: People
layout: layouts/page.html
tag:
    - pages
---
# {{ title }}

{% for people in collections.people %}

[{{ people.data.title}}]({{ people.url }})

{% endfor %}