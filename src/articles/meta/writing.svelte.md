---
tags:
- meta

authors: []

title: Writing
summary: Contribute articles and other written content.

prev: meta
next: meta/development

---

<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs";
    import { Separator } from "$lib/components/ui/separator";

    let tabValue = "one";
</script>

While we created this website using [Svelte](https://svelte.dev/), we realise that most people don't know how to create
their own Svelte components and pages.
For that reason, all articles on this site are written using a markup language known as
[Markdown](https://www.markdownguide.org/basic-syntax/).

If you've ever used Slack, Discord or GitHub, then you likely already know how to use
[Markdown](https://www.markdownguide.org/basic-syntax/)!

<!--more-->

# Format and Structure

You'll find all of this site's articles in the `|lucide/folder| src/articles` folder.
Each file represents a single article, and all article files must end with `.svelte.md`.
You may place article files directly within `|lucide/folder| /src/articles` or nest them within any number of folders.

While each article is written using [Markdown](https://www.markdownguide.org/basic-syntax/), they're also valid Svelte
components, supporting `<script>` tags, Svelte components and variable substitution.

Each article must follow a specific structure, as defined below.

## Front Matter

The first thing in your article must be the front matter, which contains your article's metadata.
This is a block of [YAML](https://learnxinyminutes.com/docs/yaml/), surrounded by three dashes (`---`) above and below.

Make sure you add a blank line after the front matter, to visually separate it from the rest of your article's content.

### Required Keys

- `|lucide/user| authors` List of authors who contributed to this article.
  - You must format this according to the author's preference, matching the format used for any other articles.
- `|lucide/text| summary` A short, single-line summary of the article.
  - This will be visible at the top of every article page, as well as within link embeds.
- `|lucide/tag| tags` List of tags to apply to this article.
  - Check `|lucide/file| /src/tags.yaml` before applying tags,
    and try to use existing tags that best match your article.

    If you feel like we need a new tag, make sure you add a description for it in `|lucide/file| /src/tags.yaml`

- `|lucide/heading-1| title` The article's title.
    - This will be visible at the top of every article page, the tag pages, as well as within link embeds.

### Optional Keys

- `|lucide/arrow-left| prev` Path to article (from within `|lucide/folder| /src/articles`) to create a "Next" button
   for at the bottom.
- `|lucide/arrow-right| next` Path to article (from within `|lucide/folder| /src/articles`) to create a "Back" button
  for at the bottom.

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
This site provides several customisations, besides the usual Markdown features.

### Color Chips

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

### Excerpts

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

### Header Links

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

#### Example Header

</div>
</div>

### Icons

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

### OEmbed

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

# Recommended Tools

We highly recommend you use the following tools:

- [LanguageTool](https://languagetool.org/), a comprehensive spelling, style and grammar checker.
  It is important you format your written content properly, and that you write in proper English, with correct
  spelling and grammar.
  LanguageTool is one of the best tools available for keeping your prose up to our standards.
    - For details on plugins and other tools that integrate with LanguageTool, please
      [see this page](https://dev.languagetool.org/software-that-supports-languagetool-as-a-plug-in-or-add-on.html),
      as it is likely a plugin exists for your favourite editor.

# Restricted Tools

We restrict the following tools, and you should avoid using them:

- Generative AI tooling, with different types classified as follows.
  Please note that we have no interest in removing this policy, or discussing the merits and demerits of generative AI.

    - **Audio generation:** Discouraged due to
      [likeness theft](https://www.theverge.com/2023/9/21/23836337/music-generative-ai-voice-likeness-regulation),
      [voice cloning scams](https://www.washingtonpost.com/technology/2023/03/05/ai-voice-scam/), and
      [deepfakes](https://fortune.com/2024/02/08/generative-ai-fraud-identity-theft-cybersecurity-risk/).

      We encourage all contributors who submit voice recordings to this project to run them through the following AI
      poisoning tools:

        - [AntiFake](https://github.com/WUSTL-CSPL/AntiFake), an offensive tool to disrupt AI models scraping voice
          samples without consent, causing them to generate audio that doesn't sound like the source material.

      We allow AI-generated audio only when you can prove that it is consensual.
      Otherwise, we prohibit AI-generated audio.

    - **Code generation:** Discouraged due to
      [the generation of unsafe code](https://arstechnica.com/information-technology/2024/01/ai-poisoning-could-turn-open-models-into-destructive-sleeper-agents-says-anthropic/),
      [the theft and monetisation of code](https://sfconservancy.org/blog/2022/jun/30/give-up-github-launch/),
      and [its untested legal status](https://www.theregister.com/2024/01/12/github_copilot_copyright_case_narrowed).

      While no public poisoning tools for source code are available, we encourage our contributors to keep an eye on
      the following developments:

        - [Trojan Puzzle](https://www.bleepingcomputer.com/news/security/trojan-puzzle-attack-trains-ai-assistants-into-suggesting-malicious-code/),
          an offensive approach that disrupts AI models and causes them to generate insecure or malicious code.
        - Microsoft's [code generation poisoning experiment](https://github.com/microsoft/CodeGenerationPoisoning)

      We allow AI-based code assistants that can generate generic boilerplate, provide smart auto-completion of
      symbols, and generate individual lines of code here and there.
      However, we prohibit large blocks of generated code.

    - **Image generation:** Prohibited due to [rampant art theft](https://x.com/JonLamArt/status/1741545927435784424)
      and [deepfakes](https://fortune.com/2024/02/08/generative-ai-fraud-identity-theft-cybersecurity-risk/).

      We encourage all artists who submit assets to this project to run them through the following AI poisoning tools
      before submitting them:

        - [Glaze](https://glaze.cs.uchicago.edu/downloads.html), a defensive tool to prevent style theft.
        - [Nightshade](https://nightshade.cs.uchicago.edu/downloads.html), an offensive tool to disrupt AI models
          scraping
          artwork without consent.

    - **Text generation:** Discouraged due to
      [theft](https://www.theguardian.com/technology/2023/oct/19/music-lawsuit-ai-song-lyrics-anthropic), and
      [hallucinations, delusions and disinformation](https://www.nature.com/articles/s41537-023-00379-4).

      We allow AI-based writing assistants (such as LanguageTool and Grazie), but we prohibit generated blocks of prose.

    - **Video generation:** Prohibited due to
      [deepfakes](https://sc.mp/41ucj), and
      [likeness theft](https://abcnews.go.com/GMA/Family/sharing-photos-kids-after-watch-deepfake-ad/story?id=101730561).

# Contribution Flows

We've come up with several ways to contribute articles, with varying levels of technical difficulty in mind.
We're still working on making this easier, so you can expect that we'll update this section soon!

<Tabs.Root value="local">
<Tabs.List>
    <Tabs.Trigger value="local">Local</Tabs.Trigger>
    <Tabs.Trigger value="web-vsc">Web (VSC)</Tabs.Trigger>
    <Tabs.Trigger value="web-basic">Web (Basic)</Tabs.Trigger>
    <Tabs.Trigger value="discord">Discord</Tabs.Trigger>
</Tabs.List>

<div
    class="rounded-md bg-secondary" style="height: 21em; overflow: auto; margin-top: 1em; padding-left: 1em; padding-right: 1em;"
>
<Tabs.Content value="local">

This is **the most complex approach**.
We only recommend it if you have **lots of experience working with computers.**

1. Install Git by [following these instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
2. Create a GitHub account if you haven't already.
3. Create an SSH key and add it to your GitHub account by
   [following these instructions](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
4. Go to [the site repository](https://github.com/cmc-discord/site).
5. Click/tap the **Fork** button at the top-right of the page.
6. Select an owner and repository name if the default settings aren't satisfactory.
7. Click/tap the **Code** button at the top-right of your fork's page.
8. Ensure you have the **SSH** tab selected, and copy the provided URL.
9. Use Git to clone your repository by opening a terminal and
   [using the `git clone` command](https://github.com/git-guides/git-clone).
10. Use a text editor (such as [VS Code](https://code.visualstudio.com/)) to create your article file in
    `/src/articles` as described earlier.
11. Work on your article, using the structure described earlier.
12. Use Git to commit your changes by opening a terminal and
    [using the `git commit` command](https://github.com/git-guides/git-commit).
13. Use Git to push your changes to GitHub by opening a terminal and
    [using the `git push` command](https://github.com/git-guides/git-push).
14. On GitHub, navigate to your fork, and click/tap the **Compare &amp; pull request** button.
15. When prompted, provide a title and description for your pull request.
16. Click/tap the **Create Pull Request** button.
    If your article is not ready for review yet, click/tap the **Create Draft Pull Request** button instead.
17. A Cloudflare bot should leave a comment on your Pull Request with a link you can click to preview the site with
    your changes.
18. Continue working on your article as needed.
    Your Pull Request will automatically update as you push commits to your fork.
19. Keep an eye on your Pull Request, and address any comments and reviews people make.
20. When everyone's happy with your article, we'll merge your Pull Request.
    It will be available on the site shortly after.

</Tabs.Content>

<Tabs.Content value="web-vsc">

Instead of working directly on your computer, GitHub provides a way to **use the VS Code editor in your browser**.
This is **less complex than the previous approach**, but **still requires intermediate computer experience.**

1. Create a GitHub account if you haven't already.
2. Go to [the site repository](https://github.com/cmc-discord/site).
3. Click/tap the **Fork** button at the top-right of the page.
4. Select an owner and repository name if the default settings aren't satisfactory.
5. Once your fork is ready, press `.` on your keyboard, or edit the URL in your address bar, replacing `github.com`
   with `github.dev`.
6. Install the recommended plugins if the editor prompts you to do so.
7. Under the **Explorer** tab on the left, navigate to `src/articles`.
8. Right-click the `articles` folder, and select **New File...**.
9. Name your article file and hit `Enter`.
10. Work on your article, using the structure described earlier.
11. Under the **Source Control** tab on the left, type a commit message and hit `Ctrl+Enter`.
12. On GitHub, navigate to your fork and Click/tap the **Create Pull Request** button.
    If your article is not ready for review yet, click/tap the **Create Draft Pull Request** button instead.
13. A Cloudflare bot should leave a comment on your Pull Request with a link you can click to preview the site with
    your changes.
14. Continue working on your article as needed.
    Your Pull Request will automatically update as you push commits to your fork.
15. Keep an eye on your Pull Request, and address any comments and reviews people make.
16. When everyone's happy with your article, we'll merge your Pull Request.
    It will be available on the site shortly after.

</Tabs.Content>

<Tabs.Content value="web-basic">

This method allows you to **edit your article directly on GitHub**.
However, **the basic editor lacks many useful features,** and **we don't recommend this approach unless it is your only
option.**

1. Create a GitHub account if you haven't already.
2. Go to [the site repository](https://github.com/cmc-discord/site).
3. Click/tap the **Fork** button at the top-right of the page.
4. Select an owner and repository name if the default settings aren't satisfactory.
5. Once your fork is ready, navigate to `/src/articles`.
6. Click/tap the **Add file** button at the top-right of the page, and select **Create new file**.
7. Name your file as described in the previous section.
8. Work on your article, using the structure described in the next section.
9. Click/tap on the **Commit changes...** button.
10. In the popup that appears, click/tap on the **Commit changes** button.
11. Navigate back to your fork's main page and Click/tap the **Create Pull Request** button.
    If your article is not ready for review yet, click/tap the **Create Draft Pull Request** button instead.
12. A Cloudflare bot should leave a comment on your Pull Request with a link you can click to preview the site with
    your changes.
13. Continue working on your article as needed, by navigating to the article file and clicking/tapping on the button
    that looks like this: `|tabler/pencil|`

    Your Pull Request will automatically update as you push commits to your fork.
14. Keep an eye on your Pull Request, and address any comments and reviews people make.
15. When everyone's happy with your article, we'll merge your Pull Request.
    It will be available on the site shortly after.

</Tabs.Content>

<Tabs.Content value="discord">

If you'd prefer to avoid using Git or GitHub directly, **you may submit your articles to us on Discord.**
However, as of this writing, **we only provide this option to Community Management Community members.**
Information on how you join us will be provided later.

1. Create a post in the **#article-submissions** forum channel, being sure to follow the posting guidelines.
2. Feel free to use your post to gather research and chat with other members about your article.
3. At some point, we'll assign a member of staff to your submission.
   They will review your submission and help you work on it, providing feedback and support.
4. When your article is ready to be contributed, your assigned staff member will create a Pull Request on your behalf.
   You will be responsible for monitoring this Pull Request for comments and reviews.
5. You may submit updates to your Pull Request via your assigned staff member.
6. When everyone's happy with your article, we'll merge the Pull Request.
   It will be available on the site shortly after.

</Tabs.Content>
</div>
</Tabs.Root>
