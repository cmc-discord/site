import { promises as fs } from "fs";

import { h } from "hastscript";

import { locate } from "@iconify/json";
import { getIconData, iconToHTML, iconToSVG, replaceIDs } from "@iconify/utils";

import { defineMDSveXConfig } from "mdsvex";

import remarkExcerpt from "mdsvex-excerpt";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeColorChips from "rehype-color-chips";
import rehypeIcons from "./src/plugins/rehype/icons/index.js";
// import rehypePrism from "rehype-prism-plus"
import rehypeShiftHeading from "rehype-shift-heading";
import rehypeSlug from "rehype-slug";

import remarkOembed from "remark-oembed";

import remarkPresetLintConsistent from "remark-preset-lint-consistent";
import remarkPresetLintRecommended from "remark-preset-lint-recommended";

import { fromHtml } from "hast-util-from-html";

const lucidePath = locate("lucide");
const lucideData = JSON.parse(await fs.readFile(lucidePath, "utf8"));
const iconData = getIconData(lucideData, "link");

const linkIcon = iconToSVG(
	iconData,
	{ height: "1.1em", width: "1.1em" },
);

const link = iconToHTML(
	replaceIDs(linkIcon.body),
	linkIcon.attributes,
);

const linkElement = fromHtml(link, { fragment: true })
const linkContainer = h(
	"span.header-link-icon",
	linkElement
)

export default defineMDSveXConfig({
	extensions: [".svelte.md", ".md", ".svx"],
	smartypants: false,

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
				content: linkContainer,
				behavior: "append",
				properties: {
					title: "Link to heading",
					ariaHidden: true,
					tabIndex: -1,
					dataPagefindIgnore: "",
				},
			},
		],

		// Hex code colour chips
		rehypeColorChips,

		// Icon components via Iconify: |set/icon-name| in Markdown
		rehypeIcons,

		// TODO: msdvex provides its own Prism-based highlighting system, and it's impossible to disable it.
		//       However, they planned to remove Prism support in v1 - two years ago.
		//       https://github.com/pngwn/MDsveX/issues/284#issuecomment-916973238

		// Code highlighting
		// [rehypePrism, { ignoreMissing: true, showLineNumbers: true }],
	],

	remarkPlugins: [
		// Link embedding
		[remarkOembed, { syncWidget: true }],

		// Markdown linting
		remarkPresetLintConsistent,
		remarkPresetLintRecommended,

		// Excertps
		remarkExcerpt,
	],
});
