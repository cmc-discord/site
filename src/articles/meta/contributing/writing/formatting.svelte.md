---
tags:
- meta

authors: []

title: Formatting
summary: How to format your content, and the extra options available to you.
---

For those who [work on written content in Markdown](/a/meta/contributing/writing), we provide some extra features
that enable you to use more advanced formatting with minimal effort.

<!--more-->

# Markdown Extensions

## Color Chips

[`|simple-icons/github| rehype-color-chips`](https://github.com/shreshthmohan/rehype-color-chips)

This feature renders a small colour chip alongside code elements containing hex codes, allowing readers to see the
colour at a glance.

<div class="article-markdown-example">
<div>
<span class="text-lg mb-2 font-semibold">Example</span>

```md
`#ef4591`
```

</div>

<div>
<span class="text-lg font-semibold mr-1">Result</span>

`#ef4591`

</div>
</div>

## Excerpts

[`|simple-icons/github| mdsvex-excerpt`](https://github.com/Zielak/mdsvex-excerpt)

Articles tend to contain a lot of information, and thus often end up getting long.
However, on some pages, we don't want to display the entire article, such as on the tag pages.

For this reason, all articles should contain the excerpt token.
When an article includes this token, the site will use the content above the token as the excerpt.

The excerpt token is `<!--more-->`.

<div class="article-markdown-example">
<div>
<span class="text-lg mb-2 font-semibold">Example</span>

```md
<!-- Sample text generated using http://fillerama.io/ -->

You're going back for the Countess, aren't you?
Hey, tell me something.
You've got all this money.
How come you always dress like you're doing your laundry?
Who are you, my warranty?!
Oh sure! Blame the wizards!

<!--more-->

You guys aren't Santa!
You're not even robots.
For one beautiful night I knew what it was like to be a
grandmother.
Subjugated, yet honored.
There, now he's trapped in a book I wrote: a crummy world
of plot holes and spelling errors!
```

</div>

<div>
<span class="text-lg font-semibold mr-1">Result (tag pages)</span>

Lorem ipsum dolor sit amet.

You're going back for the Countess, aren't you?
Hey, tell me something.
You've got all this money.
How come you always dress like you're doing your laundry?
Who are you, my warranty?!
Oh sure! Blame the wizards!**

</div>
</div>

## Header Links

[`|simple-icons/github| rehype-autolink-headings`](https://github.com/rehypejs/rehype-autolink-headings)
[`|simple-icons/github| rehype-slug`](https://github.com/rehypejs/rehype-slug)

The site generates an ID for each header written within articles, adding a clickable link icon to them.
The site's menu also contains links to each header, for easy navigation.

<div class="article-markdown-example">
<div>
<span class="text-lg mb-2 font-semibold">Example</span>

```md
#### Example Header
```

</div>

<div>
    <span class="text-lg font-semibold mr-1">Result</span>
    <h5 id="example-header" data-toc-ignore>
        Example Header
        <a title="Link to heading" aria-hidden="true" tabindex="-1" data-pagefind-ignore="" href="#example-header">
            <span class="header-link-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </g>
                </svg>
            </span>
        </a>
    </h5>
</div>
</div>

## Icons

[`|simple-icons/github| Custom Plugin`](https://github.com/cmc-discord/site/blob/main/src/plugins/rehype/icons/index.js)

We created a custom plugin for this site that allows you to embed icons into your articles, instead of using Svelte
components and potentially breaking your Markdown.

- Insert an icon: `|set-name/icon-name|`
- For set names, [see here](https://iconify.design/docs/icons/icon-set-basics.html#naming).
- For icon names, [see here](https://iconify.design/docs/icons/icon-basics.html#icon-names).
- For a full list of supported sets and icons, [see here](https://icon-sets.iconify.design/).
  We prefer [Lucide icons](https://icon-sets.iconify.design/lucide/), but you may use any icons you like.

**Note:** We haven't finished making changes to this plugin.
In particular, the following limitations exist:

- The plugin always inserts icons at a size of `1em`.
- There's no way to provide any extra styles or otherwise customise the icons.
- While icons line up nicely with text in code blocks, there's more styling work to do.

<div class="article-markdown-example">
<div>
<span class="text-lg mb-2 font-semibold">Example</span>

```md
|lucide/air-vent|
|twemoji/kite|
|simple-icons/discord|

`|lucide/tag| Tag`
`|fa6-solid/user| User`
`|mdi/alert-outline| Warning`
```

</div>

<div>
<span class="text-lg font-semibold mr-1">Result</span>

|lucide/air-vent|
|twemoji/kite|
|simple-icons/discord|

`|lucide/tag| Tag`
`|fa6-solid/user| User`
`|mdi/alert-outline| Warning`

</div>
</div>

## OEmbed

[`|simple-icons/github| remark-oembed`](https://github.com/sergioramos/remark-oembed)

When pasted into an article on their own, the site will embed rich versions of some links.
This only happens if the [OEmbed providers list](https://github.com/iamcal/oembed/tree/master/providers) includes the
site the link is from.

<div class="article-markdown-example">
<div>
<span class="text-lg mb-2 font-semibold">Example</span>

```md
https://x.com/jessiegender/status/1597906890599849986

https://open.spotify.com/track/1sC9aAbpRk362KwmkfFHzy?si=95f7efd754974a9a

https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

</div>

<div>
<span class="text-lg font-semibold mr-1">Result</span>

https://x.com/jessiegender/status/1597906890599849986

https://open.spotify.com/track/1sC9aAbpRk362KwmkfFHzy?si=95f7efd754974a9a

https://www.youtube.com/watch?v=dQw4w9WgXcQ

</div>
</div>
