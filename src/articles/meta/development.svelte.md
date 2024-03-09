---
tags:
- meta

authors: []

title: Development
summary: Improve the site's structure, style and substance.

prev: meta/writing

---

<script lang="ts">

</script>

This website was primarily built using [SvelteKit](https://kit.svelte.dev/), itself built using [Svelte](https://svelte.dev/).
Svelte is a component-based frontend framework, designed to compile its components to specialised code that manipulates
the DOM directly, minimising the size of the client bundle and producing a more efficient result.

<!--more-->

# Setting Up

## Requirements

Before you can work on the site, you'll need the following:

- A copy of [Git](https://git-scm.com/), and a [GitHub](https://github.com/) account 
  [set up with an SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).
- A [fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) 
  of [this site's GitHub repository](https://github.com/cmc-discord/).
- A code editor that can provide an adequate editing experience for Svelte projects.
  We recommend:

  - [Visual Studio Code](https://code.visualstudio.com/), which we include recommended extensions for.
  - [IntelliJ IDEA Ultimate](https://www.jetbrains.com/idea/), which we include run configurations for.
  
  If you feel we could improve the editing experience in your favourite editor by providing configuration files in
  this repository, please feel free to contact us or submit a Pull Request.
- [NodeJS](https://nodejs.org/), version 20.0.0 or later.
- Corepack enabled for `pnpm` (run the `corepack enable` command in a terminal).

## Preparation

Before getting started, please ensure to do the following:

- Install the project's dependencies using `pnpm install`.
- Ensure you're able to build a copy of this site using `pnpm build`.
- Ensure that the development server starts correctly using `pnpm dev`.

# Project Structure


# Development Notes

When working on the project, you should be aware of the following:

- The development server can be slow, especially if you've just started it.
  The production build will be considerably faster regardless, so try not to focus too much on this.
- During development, the search index will quickly become out-of-date.
  To fix this, follow these steps:

  1. Stop the development server if it is running.
  2. Delete the `build/` folder.
  3. Delete the `static/pagefind` folder.
  4. Rebuild your local copy of this site using `pnpm build`.
  5. Start the development server again.
