---
layout: single_tag
title: Shows
tag: Shows
blurb: A collection of posts tagged with "Shows".
permalink: /blog/tags/shows/
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

