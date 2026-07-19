---
title: Events
layout: base.html
---
# {{ title }}

<div class="page-link-list">
{% for events in collections.events %}

[{{ events.data.title}}]({{ events.url }})

{% endfor %}
</div>