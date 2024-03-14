---
tags:
- meta

authors: []

title: Project Layout
summary: Learn about the project's structure, and where everything is.
---

Before attempting to work on the project, it is important to understand its structure.

<!--more-->

- `|lucide/folder| /` Configuration files, misc project files.

    - `|lucide/folder| .run/` Intellij Platform run configurations.
    - `|lucide/folder| .vscode/` Recommended Visual Studio Code configurations.
    - `|lucide/folder| build/` Project build output folder.
    - `|lucide/folder| src/` The project's source code.

        - `|lucide/folder| arcticles/` [Article source code,](/a/meta/contributing/writing) in the form of
          Markdown-based Svelte components.

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
        - `|lucide/file| app.pcss` PostCSS file, containing all the site's styles.
        - `|lucide/file| tags.yaml` YAML file containing
          [descriptions for article tags.](/a/meta/contributing/configuration)

        - `|lucide/file| navigation.yaml` YAML file containing
          [prefix-based navigation trees for articles.](/a/meta/contributing/configuration)

    - `|lucide/folder| static/` Static files to bundle with the project.
      - `|lucide/folder| sponsors/` Images and other assets used by the sponsors segment on [the home page](/).
