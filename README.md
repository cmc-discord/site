# Site: moderator.wiki

This repository contains the source for the [moderator.wiki](https://moderation.wiki) site, built as a static site
using [SvelteKit](https://kit.svelte.dev/) and [shadcn-svelte](https://www.shadcn-svelte.com/).

This website (and its content) are licensed under the 
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en).

## Developing

Install dependencies with `pnpm install`, and start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

### Pagefind

[Pagefind](https://pagefind.app/) powers the search for this site.
During development, the search indices will quickly become out of date.
To fix this:

- Stop the development server
- Delete `/static/pagefind`
- Run the `build` script as mentioned below

We build the indices from scratch in production, so they should always be correct.

## Building

To create a production version of the site:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.
