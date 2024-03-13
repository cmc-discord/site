---
tags:

- meta

authors: []

title: Development
summary: Improve the site's structure, style and substance.

prev: meta/writing

---

<script lang="ts">
  import { Folder, File } from "lucide-svelte";
</script>

This website was primarily built using [SvelteKit](https://kit.svelte.dev/), itself built
using [Svelte](https://svelte.dev/).
Svelte is a component-based frontend framework, designed to compile its components to specialised code that manipulates
the DOM directly, minimising the size of the client bundle and producing a more efficient result.

<!--more-->

# Setting Up

## Requirements

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

## Preparation

Before getting started, please ensure the following:

1. The project's dependencies are installed, using `pnpm install`.
2. You're able to build a copy of the site, using `pnpm build`.
3. The development server starts correctly, using `pnpm dev`.

# Contribution Guidelines

When working on and submitting a contribution, you must read this section in full and follow its guidelines.
Failure to do so may result in the rejection of your contributions,
and **repeated violations may result in you being banned from our GitHub organisation.**

## Code Style

Generally speaking, you should follow the code style already established by code that's already part of the project.
However, you should also keep the following points in mind:

- **Readability is king.**

  Don't play golf with our code — add blank lines between (and within) distinct blocks of code and lists of definitions,
  and use longer forms of statements when they're more readable.

- **Don't fight the existing standards,** and remember that consistent styling is more important than adhering to someone
  else's standard.

  We provide a `.editorconfig`, and we expect that your code follows it.
  This is important for many reasons, including accessibility for visually impaired developers.

- **Remember the limitations of your tooling.**

  In particular, be aware of how limitations in the programming languages used by this project may affect how easy it
  is to understand your code.

  Sometimes, it will be impossible to write code that keeps the linters happy.
  In those situations, it is more important your code is functional and readable, rather than strictly matching the
  linters' configuration.

- **Don't fight the framework.**

  Our project works well as-is.
  If you feel a change in our technology stack would significantly improve either the development experience or the
  result, then we'd be happy to talk.

  However, hostile contributions (such as Pull Requests that rewrite our project without prior discussion) aren't
  welcome and **may result in you being banned from our GitHub organisation.**

- **Collaborate with your peers.**

  We believe in working together to achieve common goals, and it is important for everyone to take that approach to
  heart in their work.
  This means you must avoid stepping on other developers' feet, and instead try to communicate and collaborate with
  them.

  In particular, working concurrently with another developer on a separate contribution that addresses the same issue
  is considered hostile, and repeated violations **may result in you being banned from our GitHub organisation.**

## Recommended Tools

We highly recommend you use the following tools:

- [LanguageTool](https://languagetool.org/), a comprehensive spelling, style and grammar checker.
  It is important you format your written content properly, and that you write in proper English, with correct
  spelling and grammar.
  LanguageTool is one of the best tools available for keeping your prose up to our standards.
    - For details on plugins and other tools that integrate with LanguageTool, please
      [see this page](https://dev.languagetool.org/software-that-supports-languagetool-as-a-plug-in-or-add-on.html),
      as it is likely a plugin exists for your favourite editor.

## Restricted Tools

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

# Project Structure

The project follows the following structure:

- `|lucide/folder| /` Configuration files, misc project files.

    - `|lucide/folder| .run/` Intellij platform run configurations.
    - `|lucide/folder| .vscode/` Recommended Visual Studio Code configurations.
    - `|lucide/folder| build/` Project build output folder.
    - `|lucide/folder| src/` The project's source code.

        - `|lucide/folder| arcticles/` Article source code, in the form of Markdown-based Svelte components.
        - `|lucide/folder| lib/` Project libraries and components, imported using the `$lib` alias.

            - `|lucide/folder| components/` General-purpose svelte components that don't fit into the subfolders.

                - `|lucide/folder| head/` Component wrapped with `<svelte:head>` tags, which modify the generated
                   pages' `<head>`.
                - `|lucide/folder| ui/` Components that make up the site's UI, mostly based on
                  [shadcn-svelte](https://www.shadcn-svelte.com/).
                - `|lucide/file| markdown-layout.svelte` Layout file applied to all Markdown-based Svelte
                  components.

            - `|lucide/folder| stores/` Svelte store definitions and their corresponding APIs.
            - `|lucide/folder| types/` TypeScript type definitions.

        - `|lucide/folder| plugins/` Custom Remark and Rehype plugins used by mdsvex.
        - `|lucide/folder| routes/` Svelte API and page routes.
        - `|lucide/file| tags.yaml` YAML file containing descriptions for article tags.

    - `|lucide/folder| static/` Static files to bundle with the project.

# Contribution Flow

We recommend the following workflow to anyone that wishes to contribute to the site's code:

1. Start by forking [the site's repository](https://github.com/cmc-discord/site), and make sure you've done everything
   mentioned in the [requirements section](#requirements).
2. Browse the [issues](https://github.com/cmc-discord/site/issues) and
   [Pull Requests](https://github.com/cmc-discord/site/pulls) to ensure you aren't duplicating someone else's work.
3. If an issue exists regarding what you'd like to contribute, leave a comment on it so that others know you're working
   on it.
    - Otherwise, create an issue and mention that you're handling the task.
      This is especially important for work our staff team hasn't signed off on yet — don't open a Pull Request if you
      haven't talked with us, otherwise you may end up doing work we ultimately decide not to accept.
4. Create a new branch on your fork to encapsulate your work.
   This is important as it allows you to more easily update the `main` branch in your fork whenever we make changes,
   and it means you can manage multiple Pull Requests at the same time if you'd like.
5. Start making changes!
   Remember to test that everything works, and especially ensure that everything looks good at every
   [Tailwind breakpoint](https://tailwindcss.com/docs/screens).
6. Once you've pushed at least one commit,
   [open your Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).
   It is important to open your Pull Request early, so you can receive feedback as you work.
   If you're not ready to receive feedback yet, mark the Pull Request as a
   [draft(https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests)].
7. Once your Pull Request is ready for
   feedback, [mark it as ready for review](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request).
8. Keep an eye on your Pull Request, and ensure that you address and respond to any reviews and comments.
9. Once everyone's happy with your Pull Request, we'll merge it.
   Your changes should appear on the site within 5–10 minutes.

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
  file, you can do little about it.

- When writing Remark and Rehype plugins, you should be aware of the following:

  - It is best to use a Remark plugin when you want to work with the AST used to translate Markdown to HTML.
  - It is best to use a Rehype plugin when you want to work with the HTML that was generated using the Markdown.
  - If you want to modify the AST, you'll need to iterate over and modify the `tree` passed to your plugin's function,
    instead of using the `visit` function from `unist-util-visit`.
    However, the `visit` function is useful for filtering over the `tree` if you don't need to modify it.

    A good example of a simple plugin that modifies the `tree` is the
    [`rehype-color-chips`](https://github.com/shreshthmohan/rehype-color-chips/blob/main/src/index.ts#L10) plugin.

- During development, the search index will quickly become out-of-date.
  To fix this, follow these steps:

    1. Stop the development server if it is running.
    2. Delete the `build/` folder.
    3. Delete the `static/pagefind` folder.
    4. Rebuild your local copy of the site using `pnpm build`.
    5. Start the development server again.
