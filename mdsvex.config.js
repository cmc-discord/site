import { defineMDSveXConfig } from "mdsvex";

export default defineMDSveXConfig({
	extensions: [".svelte.md", ".md", ".svx"],
	layout: {
		"_": "/src/lib/markdown-layout.svelte"
	}
})
