---
layout: category
og_type: category
title: Development
category: Development
description: "Posts in the Development category."
permalink: /blog/categories/development/
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
  <p>I mainly started this blog because I was looking in to doing some courses in Web Development. The first few posts will mainly relate to my experiences in developing this blog.</p>
{% for post in site.posts %}

  {% if post.category contains page.category %}
<ul>

      <a href="{{ post.url }}">
        <h2>{{ post.title }}</h2>
      </a>

      <p>{{ post.description }}</p>

      <div class="card-meta">
        <span>{{ post.date | date: "%d %B %Y" }} </span>
      </div>


  {% endif %}

{% endfor %}

</ul>
</main>