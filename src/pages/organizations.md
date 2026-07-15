---
title: Organizations
layout: base.html
---
# {{ title }}

<div class="page-list">
{% for organizations in collections.organizations %}

- [{{ organizations.data.title}}]({{ organizations.url }})

{% endfor %}
</div>
