---
tags:
- meta

authors: []

title: Writing
summary: Contribute articles and other written content.
---

<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs/index.js";

    let tabValue = "one";
</script>

While we created this site with a static site generator in mind, we understand that many people aren't developers,
and thus wouldn't know how to create their own Svelte pages or components.
For that reason, all articles on this site are written using a markup language known as
[Markdown](https://www.markdownguide.org/basic-syntax/).

If you've ever used Slack, Discord or GitHub, then you likely already know how to use
[Markdown](https://www.markdownguide.org/basic-syntax/)!

<!--more-->

# Documentation

Be sure to also read the following articles:

- [Contribution Guidelines](/a/meta/contributing/guidelines)
- [Submitting Work](/a/meta/contributing/submission)
- [Project Layout](/a/meta/contributing/project-layout)
- [Tooling](/a/meta/contributing/tooling)
- [Configuration](/a/meta/contributing/configuration)

# Format and Structure

You'll find all of this site's articles in the `|icon: lucide/folder| src/articles` folder.
Each file represents a single article, and all article files must end with `.svelte.md`.
You may place article files directly within `|icon: lucide/folder| /src/articles` or nest them within any number of
folders.

While each article is written using [Markdown](https://www.markdownguide.org/basic-syntax/), they're also valid Svelte
components, supporting `<script>` tags, Svelte components and variable substitution.

Each article must follow a specific structure, as defined below.

## Front Matter

The first thing in your article must be the front matter, which contains your article's metadata.
This is a block of [YAML](https://learnxinyminutes.com/docs/yaml/), surrounded by three dashes (`---`) above and below.

Make sure you add a blank line after the front matter, to visually separate it from the rest of your article's content.

### Required Keys

- `|icon: lucide/user| authors` List of authors who contributed to this article.
  - You must format this according to the author's preference, matching the format used for any other articles.
- `|icon: lucide/text| summary` A short, single-line summary of the article.
  - This will be visible at the top of every article page, as well as within link embeds.
- `|icon: lucide/tag| tags` List of tags to apply to this article.
  - Check `|icon: lucide/file| /src/tags.yaml` before applying tags,
    and try to use existing tags that best match your article.

    For more information on tag descriptions,
    see [the Configuration page](/a/meta/contributing/configuration#tag-descriptions).

- `|icon: lucide/heading-1| title` The article's title.
  - This will be visible at the top of every article page, the tag pages, as well as within link embeds.

### Optional Keys

- `|icon: lucide/heading-1| navigationTitle` The title shown in the navigation sidebar.
  - The title used to represent this article in the navigation sidebar,
    [if configured](/a/meta/contributing/configuration#navigation-trees).
    Useful when the sidebar title should be shorter than the article title.

### Example

```yml
---
tags:
- meta

authors:
- John Doe

title: Writing
summary: Contribute articles and other written content.

prev: meta
next: meta/development
---
```

## Svelte Script (Optional)

If you need dynamic content or access to the project's Svelte components, your article may contain a Svelte script tag.
Make sure you add a blank line after the Svelte script, to visually separate it from the rest of your article's content.

However, note that using components (or HTML in general) requires careful thought when using spacing and indentation.
Additionally, the Markdown parser will skip over blocks of Markdown placed within components or HTML without a blank
line above and below.

<div class="article-markdown-example">

<div>
    <span class="text-lg mb-2 font-semibold">Example</span>

```svelte
<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs";

    let tabValue = "one"
</script>

<Tabs.Root bind:value={tabValue}>
<Tabs.List>
    <Tabs.Trigger value="one">Tab one!</Tabs.Trigger>
    <Tabs.Trigger value="two">Tab two!</Tabs.Trigger>
</Tabs.List>

<Tabs.Content value="one">

Content for tab one!

With **Markdown!**

</Tabs.Content>

<Tabs.Content value="two">
Content for tab two! No **Markdown** here!
</Tabs.Content>
</Tabs.Root>
```

</div>

<div>

<span class="text-lg font-semibold mr-1">Result</span>
<span class="text-lg mb-2 text-muted-foreground">(Tab: {tabValue})</span>

<Tabs.Root bind:value={tabValue} class="mt-2 !h-[136px]">
<Tabs.List>
    <Tabs.Trigger value="one">Tab one!</Tabs.Trigger>
    <Tabs.Trigger value="two">Tab two!</Tabs.Trigger>
</Tabs.List>

<Tabs.Content value="one">

Content for tab one!

With **Markdown!**

</Tabs.Content>

<Tabs.Content value="two">
Content for tab two! No **Markdown** here!
</Tabs.Content>
</Tabs.Root>
</div>

</div>

## Article Content

Place the article's content after the above sections.

As mentioned above, articles are written using [Markdown](https://www.markdownguide.org/basic-syntax/).

For more information on additional formatting and writing style, read the following articles:

- [Additional Formatting](/a/meta/contributing/writing/formatting)
- [Writing Guidelines](/a/meta/contributing/guidelines/#writing-style)
