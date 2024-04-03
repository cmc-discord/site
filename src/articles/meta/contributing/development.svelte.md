---
tags:
- meta

authors: []

title: Development
summary: Improve the site's structure, style and substance.
---

<script lang="ts">
  import { Folder, File } from "lucide-svelte";
</script>

You need to consider several things to think about before you can work on a code-based contribution.
This article has the basics, but you should also read all the other articles in this section.

<!--more-->

# Setting Up

Before you can work on the site, you'll need the following:

- A copy of [Git](https://git-scm.com/), and a [GitHub](https://github.com/) account
  [set up with an SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

- A [fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
  of [the site's GitHub repository](https://github.com/cmc-discord/site).

- A code editor that can provide an adequate editing experience for Svelte projects.
  We recommend:

    - [Visual Studio Code](https://code.visualstudio.com/), which we include recommended extensions for.
    - [IntelliJ IDEA Ultimate](https://www.jetbrains.com/idea/), which we include run configurations for.

  If you feel we could improve the editing experience in your favourite editor by providing configuration files in
  this repository, please feel free to contact us or submit a Pull Request.

- [NodeJS](https://nodejs.org/), version 20.0.0 or later.
- Corepack enabled for `pnpm` (run the `corepack enable` command in a terminal).

Once you've finished setting up the project requirements, please ensure the following:

1. The project's dependencies are installed, using `pnpm install`.
2. You're able to build a copy of the site, using `pnpm build`.
3. The development server starts correctly, using `pnpm dev`.

# Documentation

Be sure to also read the following articles:

- [Contribution Guidelines](/a/meta/contributing/guidelines)
- [Submitting Work](/a/meta/contributing/submission)
- [Project Layout](/a/meta/contributing/project-layout)
- [Tooling](/a/meta/contributing/tooling)
- [Configuration](/a/meta/contributing/configuration)

# Development Notes

When working on the project, you should be aware of the following:

- The development server can be slow, especially if you've just started it.
  The production build will be considerably faster regardless, so try not to focus too much on this.
- If things aren't rendering how you expect, the development server may still be optimising dependencies.
  This can take a while, and you may need to refresh the page a few times before it finishes.
- While we do use TypeScript everywhere, it still exists on top of JavaScript, a weakly typed language.
  This means that, occasionally, you'll run into issues with the type system.
  Try your best to solve any typing issues that crop up, but remember that it isn't a requirement to get the site
  building.
- The `markdown-layout.svelte` file is special, and a little broken.
  mdsvex, which handles components and pages written in Markdown, doesn't support TypeScript.
  This means that you'll run into errors if you try to use type hints or `import type` in the `markdown-layout.svelte`
  file, and you can do little about it other than suppressing the errors.

- When writing Remark and Rehype plugins, you should be aware of the following:

  - It is best to use a Remark plugin when you want to work with the AST used to translate Markdown to HTML.
  - It is best to use a Rehype plugin when you want to work with the HTML that was generated using the Markdown.
  - If you want to modify the AST, you'll need to iterate over and modify the `tree` passed to your plugin's function,
    instead of using the `visit` function from `unist-util-visit`.
    However, the `visit` function is useful for filtering over the `tree` if you don't need to modify it.

    A good example of a simple plugin that modifies the `tree` is the
    [`|icon: simple-icons/github| rehype-color-chips`](https://github.com/shreshthmohan/rehype-color-chips/blob/main/src/index.ts#L10)
    plugin.

- During development, the search index will quickly become out-of-date.
  To fix this, follow these steps:

    1. Stop the development server if it is running.
    2. Delete the `build/` folder.
    3. Delete the `static/pagefind` folder.
    4. Rebuild your local copy of the site using `pnpm build`.
    5. Start the development server again.
