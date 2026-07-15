---
title: Organizations
layout: base.html
page-links: |
    <div class="backlink-footer">
        {% for link in backlinks %}
            <a href="{{ link.url }}">{{link.title}}</a>
        {% endfor %}
    </div>
---
# {{ title }}

<div class="page-list">
{% for organizations in collections.organizations %}

- [{{ organizations.data.title}}]({{ organizations.url }})

{% endfor %}
</div>
