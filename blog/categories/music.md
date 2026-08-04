---
layout: category
title: Music
category: Music
permalink: /blog/categories/music/
---

<main>
  <header class="hero">
    <div class="avatar" role="img" aria-label="Simon Grieve"></div>
    <div class="hero-text">
        <h1>{{ page.category }} Posts</h1>
        <p>A collection of all the <strong>{{ page.category }}</strong> related posts.</p>
    </div>
  </header>
{% include breadcrumbs.html %}

<div class="cards">

{% for post in site.posts %}

  {% if post.category contains page.category %}

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
