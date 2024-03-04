# Site: moderator.wiki

This repository contains the source for the [moderator.wiki](https://moderation.wiki) site, built as a static site
using [SvelteKit](https://kit.svelte.dev/) and [shadcn-svelte](https://www.shadcn-svelte.com/).

This website (and its content) are licensed under the 
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en).

## Writing

You must place any new articles within the `/src/articles` folder.
Articles must have a filename starting with the date of creation (in `YYYY-MM-DD` format), and ending with `.svelte.md`.
For example: `2024-03-04-test.svelte.md`.

All articles must be written using Markdown.
Additionally, all articles are valid Svelte pages, and may include a script, HTML and substitutions.

### Contributing Articles

As of this writing, the only way to directly contribute articles is by making a Pull Request.
We've provided several options below — pick the approach that suits you best.

#### 1. Local Development

This is **the most complex approach**. 
We only recommend it if you have **lots of experience working with computers.**

1. Install Git by [following these instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
2. Create a GitHub account if you haven't already.
3. Create an SSH key and add it to your GitHub account by
   [following these instructions](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
4. Go to [the site repository](https://github.com/cmc-discord/site).
5. Click/tap the "Fork" button at the top-right of the page.
6. Select an owner and repository name if the default settings aren't satisfactory.
7. Click/tap the "Code" button at the top-right of your fork's page.
8. Ensure you have the "SSH" tab selected, and copy the provided URL.
9. Use Git to clone your repository by opening a terminal and 
   [using the `git clone` command](https://github.com/git-guides/git-clone).
10. Use a text editor (such as [VS Code](https://code.visualstudio.com/)) to create your article file in `/src/articles`,
    named as described in the previous section.
11. Work on your article, using the structure described in the next section.
12. Use Git to commit your changes by opening a terminal and
    [using the `git commit` command](https://github.com/git-guides/git-commit).
13. Use Git to push your changes to GitHub by opening a terminal and
    [using the `git push` command](https://github.com/git-guides/git-push).
14. On GitHub, navigate to your fork, and click/tap the "Compare &amp; pull request" button.
15. When prompted, provide a title and description for your pull request.
16. Click/tap the "Create Pull Request" button.
    If your article is not ready for review yet, click/tap the "Create Draft Pull Request" button instead.
17. A Cloudflare bot should leave a comment on your Pull Request with a link you can click to preview the site with
    your changes.
18. Continue working on your article as needed.
    Your Pull Request will automatically update as you push commits to your fork.
19. Keep an eye on your Pull Request, and address any comments and reviews people make.
20. When everyone's happy with your article, we'll merge your Pull Request.
    Your article will be available on the site shortly after.

#### 2. GitHub Web Editor

Instead of working directly on your computer, GitHub provides a way to **use the VS Code editor in your browser**.
This is **less complex than the previous approach**, but **still requires intermediate computer experience.**

1. Create a GitHub account if you haven't already.
2. Go to [the site repository](https://github.com/cmc-discord/site).
3. Click/tap the "Fork" button at the top-right of the page.
4. Select an owner and repository name if the default settings aren't satisfactory.
5. Once your fork is ready, press `.` on your keyboard, or edit the URL in your address bar, replacing `github.com` 
   with `github.dev`.
6. Install the recommended plugins if the editor prompts you to do so.
7. Under the "Explorer" tab on the left, navigate to `src/articles`.
8. Right-click the `articles` folder, and select "New File...".
9. Name your article file as described in the previous section, and hit `Enter`.
10. Work on your article, using the structure described in the next section.
11. Under the "Source Control" tab on the left, type a commit message and hit `Ctrl+Enter`.
12. On GitHub, navigate to your fork and Click/tap the "Create Pull Request" button.
    If your article is not ready for review yet, click/tap the "Create Draft Pull Request" button instead.
13. A Cloudflare bot should leave a comment on your Pull Request with a link you can click to preview the site with
    your changes.
14. Continue working on your article as needed.
    Your Pull Request will automatically update as you push commits to your fork.
15. Keep an eye on your Pull Request, and address any comments and reviews people make.
16. When everyone's happy with your article, we'll merge your Pull Request.
    Your article will be available on the site shortly after.

#### 3. GitHub Basic Editor

This method allows you to **edit your article directly on GitHub**.
However, **the basic editor lacks many useful features,** and **we only recommend this approach when it is your only 
option.**

1. Create a GitHub account if you haven't already.
2. Go to [the site repository](https://github.com/cmc-discord/site).
3. Click/tap the "Fork" button at the top-right of the page.
4. Select an owner and repository name if the default settings aren't satisfactory.
5. Once your fork is ready, navigate to `/src/articles`.
6. Click/tap the "Add file" button at the top-right of the page, and select "Create new file".
7. Name your file as described in the previous section.
8. Work on your article, using the structure described in the next section.
9. Click/tap on the "Commit changes..." button.
10. In the popup that appears, click/tap on the "Commit changes" button.
11. Navigate back to your fork's main page and Click/tap the "Create Pull Request" button.
    If your article is not ready for review yet, click/tap the "Create Draft Pull Request" button instead.
12. A Cloudflare bot should leave a comment on your Pull Request with a link you can click to preview the site with 
    your changes.
13. Continue working on your article as needed, by navigating to the article file and clicking/tapping on the button 
    that looks like a pencil.
    Your Pull Request will automatically update as you push commits to your fork.
14. Keep an eye on your Pull Request, and address any comments and reviews people make.
15. When everyone's happy with your article, we'll merge your Pull Request.
    Your article will be available on the site shortly after.

#### 4. Discord Article Submissions

If you'd prefer to avoid using Git or GitHub directly, **you may submit your articles to us on Discord.**
However, as of this writing, **we only provide this option to Community Management Community members.**
Information on how you join us will be forthcoming later.

1. Create a post in the `#article-submissions` forum channel, being sure to follow the posting guidelines.
2. Feel free to use your post to gather research and chat with other members about your article.
3. At some point, we'll assign a member of staff to your submission.
   They will review your submission and help you work on it, providing feedback and support.
4. When your article is ready to be contributed, your assigned staff member will create a Pull Request on your behalf.
   You will be responsible for monitoring this Pull Request for comments and reviews.
5. You may submit updates to your Pull Request via your assigned staff member.
6. When everyone's happy with your article, we'll merge the Pull Request.
   Your article will be available on the site shortly after.

### Article Content

When writing your own articles, it is important to follow this structure:

#### 1. Front Matter

The first thing in your article must be the front matter, 
written using YAML and surrounded at the top and bottom by a line containing three dashes (`---`).
The front matter must contain the following:

- `authors`, a list of authors to credit for this article
- `summary`, a short, single-line explanation of what this article is about
- `tags`, a list of tags for this article
- `title`, the title (and this the name) of this article

For example:

```markdown
---
tags:
- a tag

authors:
- John doe

title: Test article

summary: >-
  Test Summary
---
```

Make sure you add a blank line after the front matter, to visually separate it from the rest of your article's content.

##### Tag Descriptions

Before tagging your article, you should check the (`/src/taginfo.json`)[/src/taginfo.json] file.
This file contains all potential tags that you may apply to articles, along with a short description.
Pages such as the [tags page](https://moderation.wiki/tags) show these descriptions alongside the tags.

If you can't find any relevant tags for your article, or you believe that we should add more tags, then please feel free
to update (`/src/taginfo.json`)[/src/taginfo.json] as part of your Pull Request.

#### 2. Svelte Script (Optional)

For advanced use-cases and dynamic content, your article may contain a Svelte script tag.

For example:

```sveltehtml
<script lang="ts">
  let text: string = "Hello, world!"
</script>
```

Make sure you add a blank line after the Svelte script, to visually separate it from the rest of your article's content.

#### 3. Article Content

Finally, place your article's content after everything else.
Articles should be written using Markdown, but they may also use HTML, Svelte components, and everything else normally
available when writing Svelte pages.

For example, an article including the Svelte script described above may use it as follows:

```markdown
Many people's first program will simply print the text: "{text}".
```

### Recommended Tooling

It is important to ensure that you format your articles properly, and that you write in proper English, with correct
spelling and grammar.
To help you with this, we recommend the following tools:

- [LanguageTool](https://languagetool.org/), a comprehensive spelling, style and grammar checker.
  - Apps:
	[iOS/iPadOS](https://apps.apple.com/app/id1534275760),
    [macOS](https://languagetool.org/mac-desktop),
    [Windows](https://languagetool.org/windows-desktop)
  - Browser Extensions: 
    [Chrome](https://chrome.google.com/webstore/detail/grammar-and-spell-checker/oldceeleldhonbafppcapldpdifcinji?utm_source=lt-homepage&utm_medium=referral),
    [Firefox](https://addons.mozilla.org/firefox/addon/languagetool/),
    [Safari](https://apps.apple.com/app/id1534275760)
  - Editor Plugins:
    [Emacs](https://github.com/emacs-languagetool/flycheck-languagetool),
    [IntelliJ Platform Editors](https://plugins.jetbrains.com/plugin/12175-grazie-lite),
    [Obsidian.md](https://github.com/Clemens-E/obsidian-languagetool-plugin),
    [Sublime Text](https://packagecontrol.io/packages/LanguageTool),
    [Vim](https://github.com/PatrBal/vim-textidote),
    [VS Code](https://marketplace.visualstudio.com/items?itemName=davidlday.languagetool-linter)
  - For more information on addons that integrate LanguageTool with other software,
    [see this page](https://dev.languagetool.org/software-that-supports-languagetool-as-a-plug-in-or-add-on.html).

## Development

If you'd like to work on the site directly:

1. Install dependencies using `pnpm install`.
2. Start a development server using `pnpm run dev`.

The site was initially developed using [IntelliJ IDEA Ultimate](https://www.jetbrains.com/idea/), and the repository 
contains run configurations for IntelliJ platform editors.
We've also included recommended plugins for [VS Code](https://code.visualstudio.com/), should you prefer to use that
instead.

If modifying this repository would improve the development experience in your favourite editor, we're happy to accept
Pull Requests with this aim, as long as they don't break the development experience for our regular contributors.

### Pagefind

[Pagefind](https://pagefind.app/) powers the search for this site.
During development, the search indices will quickly become out of date.
If you need to test the search page, you can fix this as follows:

1. Stop the development server if it is running.
2. Delete `/static/pagefind`.
3. Run the `build` script as described below.
4. Start the development server as described above.

We build the indices from scratch in production, so they should always be correct.

## Building

To build a production version of the site:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.
