import { h } from "hastscript";
import { defineMDSveXConfig } from "mdsvex";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeColorChips from "rehype-color-chips";
// import rehypePrism from "rehype-prism-plus"
import rehypeShiftHeading from "rehype-shift-heading";
import rehypeSlug from "rehype-slug";

import remarkOembed from "remark-oembed";
import remarkPresetLintConsistent from "remark-preset-lint-consistent";
import remarkPresetLintRecommended from "remark-preset-lint-recommended";

export default defineMDSveXConfig({
	extensions: [".svelte.md", ".md", ".svx"],

	layout: {
		"_": "/src/lib/markdown-layout.svelte",
	},

	rehypePlugins: [
		// Header shifting
		[rehypeShiftHeading, { shift: 1 }],

		// Header linking
		rehypeSlug,
		[
			rehypeAutolinkHeadings,
			{
				content: h("span.header-link-icon", "🔗"),
				behavior: "append",
				properties: { title: "Link to heading", ariaHidden: true, tabIndex: -1, dataPagefindIgnore: "" },
			},
		],

		// Hex code colour chips
		rehypeColorChips,

		// TODO: msdvex provides its own Prism-based highlighting system, and it's impossible to disable it.
		//       However, they planned to remove Prism support in v1 - two years ago.
		//       https://github.com/pngwn/MDsveX/issues/284#issuecomment-916973238

		// Code highlighting
		// [rehypePrism, { ignoreMissing: true, showLineNumbers: true }],
	],

	remarkPlugins: [
		// Link embedding
		remarkOembed,

		// Markdown linting
		remarkPresetLintConsistent,
		remarkPresetLintRecommended,
	],
});
