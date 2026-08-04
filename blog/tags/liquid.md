---
layout: single_tag
og_type: tag
title: Liquid Posts
tag: Liquid
permalink: /blog/tags/liquid/
blurb: All posts about how I got on with Liquid. 
---

<p>Using Liquid to add a bit of automation to posts and pages on this blog has been eye-opening. I love being able to just put them where I want and the information to be displayed in a uniform way</p>
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
