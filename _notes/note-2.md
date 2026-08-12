---
layout: note
title: "Note #2"
slug: "note-2"
date: 2026-07-18
description: Automate all the things
tags:
  - Note
  - Ruby
---

## I'm lazy

Actually, let me re-phrase that: I like things uniform.

Having to constantly remember what I need to put in the frontmatter for posts/notes is too much for my brain. So, I now have a Ruby script that does it for me.

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

Now, all I have to do is tell it what I want to include. I have no excuse now.
