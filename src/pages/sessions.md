---
title: Sessions
layout: base.html
---
# {{ title }}

<div class="page-link-list">
{% for sessions in collections.sessions %}

[{{ sessions.data.title}}]({{ sessions.url }})

{% endfor %}
</div>