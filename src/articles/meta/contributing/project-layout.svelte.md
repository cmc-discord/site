---
tags:
- meta

authors: []

title: Project Layout
summary: Learn about the project's structure, and where everything is.
---

Before attempting to work on the project, it is important to understand its structure.

<!--more-->

- `|icon: lucide/folder| /` Configuration files, misc project files.

    - `|icon: lucide/folder| .run/` Intellij Platform run configurations.
    - `|icon: lucide/folder| .vscode/` Recommended Visual Studio Code configurations.
    - `|icon: lucide/folder| build/` Project build output folder.
    - `|icon: lucide/folder| src/` The project's source code.

        - `|icon: lucide/folder| arcticles/` [Article source code,](/a/meta/contributing/writing) in the form of
          Markdown-based Svelte components.

        - `|icon: lucide/folder| lib/` Project libraries and components, imported using the `$lib` alias.

            - `|icon: lucide/folder| components/` General-purpose svelte components that don't fit into the subfolders.

                - `|icon: lucide/folder| head/` Component wrapped with `<svelte:head>` tags, which modify the generated
                  pages' `<head>`.

                - `|icon: lucide/folder| ui/` Components that make up the site's UI, mostly based on
                  [shadcn-svelte](https://www.shadcn-svelte.com/).

                - `|lucide/file| markdown-layout.svelte` Layout file applied to all Markdown-based Svelte
                  components.

            - `|icon: lucide/folder| stores/` Svelte store definitions and their corresponding APIs.
            - `|icon: lucide/folder| types/` TypeScript type definitions.

        - `|icon: lucide/folder| plugins/` Custom Remark and Rehype plugins used by mdsvex.
        - `|icon: lucide/folder| routes/` Svelte API and page routes.
        - `|icon: lucide/file| app.pcss` PostCSS file, containing all the site's styles.
        - `|icon: lucide/file| tags.yaml` YAML file containing
          [descriptions for article tags.](/a/meta/contributing/configuration)

        - `|icon: lucide/file| navigation.yaml` YAML file containing
          [prefix-based navigation trees for articles.](/a/meta/contributing/configuration)

    - `|icon: lucide/folder| static/` Static files to bundle with the project.
      - `|icon: lucide/folder| sponsors/` Images and other assets used by the sponsors segment on [the home page](/).
