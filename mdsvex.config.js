import { h } from "hastscript";
import { defineMDSveXConfig } from "mdsvex";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

export default defineMDSveXConfig({
	extensions: [".svelte.md", ".md", ".svx"],
	rehypePlugins: [
		// Header linking
		rehypeSlug,
		[
			rehypeAutolinkHeadings,
			{
				content: h("span.header-link-icon", "🔗"),
				behavior: "append",
				properties: { title: "Link to heading", ariaHidden: true, tabIndex: -1, dataPagefindIgnore: "" }
			}
		],
	],

	layout: {
		"_": "/src/lib/markdown-layout.svelte",
	},
});
