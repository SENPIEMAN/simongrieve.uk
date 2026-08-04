---
layout: single_tag
title: Personal
tag: Personal
blurb: A collection of posts tagged with "Personal".
permalink: /blog/tags/personal/
---
<div class="cards">

{% for post in site.posts %}

  {% if post.tags contains page.tag %}

    <article class="card">

      <a href="{{ post.url }}">
        <h2>{{ post.title }}</h2>
      </a>

      <p>{{ post.description }}</p>

      <div class="card-meta">
        <span>{{ post.date | date: "%d %B %Y" }}</span>
      </div>

    </article>

  {% endif %}

{% endfor %}

</div>

