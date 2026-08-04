---
layout: single_tag
og_type: tag
title: Jekyll Posts
tag: Jekyll
permalink: /blog/tags/jekyll/
blurb: All posts about how I built the blog with Jekyll
---


<p>Learning how to build this blog with Jekyll has been an interesting journey. 
Here are all the posts I've made about the adventure so far.</p>

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


