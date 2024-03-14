---
tags:
- meta

authors: []

title: Configuration
summary: The site's configuration, where to find config files, and how to use them.
---

We provide several configuration files that the site uses for styling and data display.
All contributors should understand them, and how to edit them.

<!--more-->

# Tag Descriptions

`|lucide/file| /src/tags.yaml`

To ensure it is clear what each tag is for, we require that all tags have a description.
Tag descriptions are short and to-the-point, and you can find them in `|lucide/file| /src/tags.yaml`.

This file is a simple mapping of tag names to their descriptions.

```yaml
meta: Articles and content relating to this website.
```

All descriptions must be written using proper English, and end with a full stop/period (`.`).

# Navigation Trees

`|lucide/file| /src/navigation.yaml`

Sometimes, it may be useful to present articles as part of a tree of links.
You can find the configuration for this in `|lucide/file| /src/navigation.yaml`.

This file contains a set of navigation trees, stored under a prefix.
This prefix refers to the start of a path, wherein all paths that start with the given prefix will show the navigation
tree on the page.

A navigation tree is a set of navigation items.
Each navigation item contains the following keys:

- `path` The path to the article to be linked to, relative to the prefix and any parent navigation items.
  If this is `.` then the parent's path will be used, whether that's the prefix or a parent navigation item.
- `icon` An optional icon to display in the navigation tree.
  Uses the same format as [Markdown icons](/a/meta/contributing/writing/formatting/#icons), without the surrounding `|`
  characters.
- `children` An optional list of navigation nodes to be displayed within this node.

Navigation nodes must point to an article, and the navigation node displays the article's title.

If multiple prefixes match the current URL, then the site will use the longest prefix.

<div class="article-markdown-example">
<div>
<span class="text-lg mb-2 font-semibold">Example</span>

```yaml
# Prefix; all pages starting with /a/meta.
/a/meta:
  # This refers to the article at the prefix, /a/meta.
  - path: .
    icon: lucide/info

    # Articles to display as children of this navigation node.
    children:
      # Refers to the article at /writing under the parent path,
      # so /a/meta/writing.
      - path: writing
        icon: lucide/pencil

      # /a/meta/development.
      - path: development
        icon: lucide/code
```

</div>

<div>
<p class="text-lg font-semibold m-0 mr-1">Result</p>

<p class="text-lg m-0 mr-1 mt-1">
<span class="font-semibold">Section Navigation</span>
(Shown on all pages starting with <code>/a/meta</code>)
</p>

- `|lucide/info| /a/meta` Site Information
    - `|lucide/pencil| /a/meta/writing` Writing
    - `|lucide/code| /a/meta/development` Development

</div>
</div>
