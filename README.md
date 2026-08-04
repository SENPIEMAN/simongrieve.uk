# My Lil Corner of the Internet

This site was a placeholder for a while. I originally only bought the domain name because I wanted to move to a more personal email address. I somehow ended up building a landing page, which only contained minimal info about myself, and a good place to store my CV for distriubution when applying for jobs.

## Adding Jekyll

After playing around for a while, I eventually ended up implementing Jekyll in to it, with the intention of making the up-keep of the site a bit easier. Frontmatter delegation etc for each page to keep it all uniform.

Two hours later I'd inexplicably added a blog...

Anyway, this has now evolved in to a proper little home for me online.
I've since added:

- A blog
- A catalogue of all my LEGO builds *(because, why not?)*
- A Projects portfolio.

The last two being just YAML lists.

### YAML

For example, the LEGO catalogue is structured as:

```YAML
- kit: Millennium Falcon™
  id: 75375
  pieces: 921
  collection: Star Wars™
  date: 2026-05-06
  thumb: Falcon.png
  ```

And called in to the page with:

```Liquid
{% for lego in site.data.lego %}
```

- `kit` is the Kit name
- `id` is the Kits ID number
- `pieces` is the number of pieces in the Kit
- `collection` is the Collection it belongs to (obviously)
- `date` is taken from my LEGO insiders profile of when I built it. *(The Speed Champions Kits were all added to my profile on the same day. I don't remember the exact dates I built each one.)*
- `thumb` is the link to the thumb nail image
Thumbnails are added as a cover to the Kit listing and called via

```HTML
<img class="lego-cover" src="/assets/images/lego/{{ lego.thumb }}" alt="{{ lego.kit }}">
```

Eventually I will get around to categorising each build by `Collection`, but I've not had the brain to do that yet.

Similarly, Projects are stuctured roughly the same way. They follow the exact same pattern and inculsion on the site as LEGO.

```YAML
- name: Duck Butter Podcast
  type: podcast
  role: Podcast Host
  description: Started during the Pandemic, we talked mostly about Video Games.
  date: 2020-2021
  image: duckbutter.png
  ```

---

# The Blog

I honestly didn't intend on starting a blog. I've had many over the years, that were just angsty "posting for the sake of posting" kind of entries - which I did a lot of in my younger days.

I have agreed with myself that I will only add posts now, for my journey through learning Web Development and COMPSCI. As well as general experiences (General Experiences 🫡 *- iykyk*)

## The Ruby Tool

With the help of AI, I created a Ruby tool that I could run that woiuld aid me in creating a new post - with the aim of being able to keep every entry uniform.

Running `ruby tools/new_post.rb` will help me to add the YAML frontmatter for each post:

```RUBY
puts "It looks like you want to create a new blog post. Let's get started!"
puts "============="
puts 

print "Title: The One Where Simon... (required) "
title = gets.chomp

abort("Title is required.") if title.empty?

print "Description (required): "
description = gets.chomp

abort("Description is required.") if description.empty?

print "Emoji (required): "
emoji = gets.chomp

abort("Emoji is required.") if emoji.empty?

print "Blurb (required): "
blurb = gets.chomp

abort("Blurb is required.") if blurb.empty?

print "Currently Listening To (optional): "
currently_song = gets.chomp

print "By? (optional): "
currently_artist = gets.chomp


print "Category (required): "
category = gets.chomp

abort("Category is required.") if category.empty?

print "Tags (comma separated): "
tags = gets.chomp
          .split(",")
          .map(&:strip)
          .reject(&:empty?)

slug = slugify(title)
date = Time.now.strftime("%Y-%m-%d")

post_file = "_posts/#{date}-#{slug}.md"

front_matter = <<~YAML
```

Running this in the Terminal will walk me through adding each YAML frontmatter elements for every post, and output it in a new file.

```YAML
---
layout: post
title: The One Where #{title}
description: #{description}
emoji: #{emoji}
category: #{category}
blurb: #{blurb}
currently_song: #{currently_song}
currently_artist: #{currently_artist}
tags:
#{tags.map { |t| "  - #{t}" }.join("\n")}
---
```

## The Archive

As I plan on having this site for a while now *(I've actually commited and bought it for a few years, normally I buy domains on a yearly rolling contract)*  I decided one Saturday afternoon to go through the Wayback Machine and find some of my old domains that had Blogs on them, as well as my Blogger account.

I literally added every entry that had a decent amount of content to the site under `_archive`. Giving it relevant frontmatter and stripping the content of external links and images.

I also added a banner to the `posts.html` layout for entries tagged as

```YAML
archived: true
```

that will inform the reader that they are reading an imported article:

```Liquid
{% if page.archived %}
```

```HTML
  <div class="archive-notice">
    <h4>🗃️ Archived Article</h4>
    <p><i>"{{ page.description }}"</i> was originally posted in {{ page.date | date: "%b %Y" }}. It has been imported from a previous blog of mine.
    The article itself has been purged of all links and images, but the rest of its content remains unedited. Bad grammar and all.</p>
</div>
{% endif %}
```

The current blog will include articles posted over a two year timeline *(so at time of writing 2026-27)* before they are added to the archive.

| Date Range | Archived |
|:----------:|:--------:|
| 2006 - 2013 |   ✅    |
| 2026 onward |   ❌    |

## Notes

Notes will be used as a form of micro-blogging for me to document how I got on developing the website.

As with a regular Blog entry, I have created a similar Ruby tool to generate these. It is basically the same tool, just modified.

---

# Styling

I always build overly complicated stylesheets for my websites. Recently I started working with SCSS, which I have found a much simplified way of managing my styling. As somone who is more focussed on UI/UX, this made sense to me. Styling is broken down as:

```tree
assets/scss
├── abstracts
│   ├── _animations.scss
│   ├── _functions.scss
│   ├── _mixins.scss
│   ├── _placeholders.scss
│   ├── _themes.scss
│   └── _variables.scss
├── base
│   ├── _layout.scss
│   ├── _reset.scss
│   └── _typography.scss
├── components
│   ├── _blog.scss
│   ├── _breadcrumbs.scss
│   ├── _cards.scss
│   ├── _footer.scss
│   ├── _hero.scss
│   ├── _lego.scss
│   ├── _search.scss
│   ├── _tables.scss
│   └── _theme-switch.scss
└── utilities
    ├── _grid.scss
    └── _helpers.scss
```

Basically, the main `style.css` file imports from the `style.scss` file:

```SCSS
@import "abstracts/variables";
@import "abstracts/functions";
@import "abstracts/mixins";
@import "abstracts/placeholders";
@import "abstracts/animations";
@import "abstracts/themes";
[...]
```

And Jekyll compiles it in to `style.css` at build.

---

# The Bones

The main scaffolding of the site itself works like this:

| Element |  Directory | Pages | Description |
| :-----: |  :-------: | :---: | :---------: |
| Layouts |   `_layouts` | `category.html`, `default.html`, `note.html`, `post.html`, `single_tag.html` and `tags.html` | Each type of page has it's own layout |
| Includes |  `_includes` | `breadcrumbs.html`, `footer.html`, `head.html`, `hero.html`, `meta.html`, `note.html`, `scripts.html` and `toggle.html` | Elements of each page have an include to simplify structure |
| Drafts |  `_drafts` | *Any posts not yet ready to be added to the blog* | Blog Posts that aren't ready for publishing yet |
| YAML |  `_data` |`about.yml`, `lego.yml`, `nav.yml` and `projects.yml` | YAML lists for things like LEGO and Projects as well as navigation |
| Assets |  `/assets` | `/css`, `/fonts`, `/images`, `/js` `/og` and `/scss` | Images used on the site, the styling (including fonts) and JS scripts - all self-explainatory |
| Posts  | `_posts` | *Any public blog post entry* | Contains all the blog posts that are ready to be published. Each post is a Markdown file with YAML frontmatter |

## Infrastructure

While Github Pages worked for a short time, it made more sense to use Cloudflare Pages for hosting this site.

| Domain |  Functions as | Built On  | Distribution | Cost (p/a) |
| :------------:  | :-------------: | :-------: | :-----: | :----: |
| [simongrieve.uk](https://simongrieve.uk)  | Main Site | Jekyll, SCSS and Ruby | Cloudflare/GitHub | £3.99 |
| [160905.xyz](https://160905.xyz)  | CDN | R2 Bucket | Cloudflare  | £0.84 |

Moving everything from being hosted on GitHub and the domain being registered on a reseller just made the overall management and administration much simpler - and transfering was free because the site has a `.uk` TLD (renewal is also 50p cheaper p/a...)
