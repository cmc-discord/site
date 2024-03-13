import adapter from "@sveltejs/adapter-static";
import mdsvexConfig from "./mdsvex.config.js"
import { mdsvex } from "mdsvex"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import fs from "fs";
import YAML from "yaml";
import process from "process";

function getNavigationIcons() {
	const data = YAML.parse(
		fs.readFileSync(`${process.cwd()}/src/navigation.yaml`, "utf8")
	)

	let icons = []

	for (const key in data) {
		const list = data[key]

		for (const item of list) {
			icons = icons.concat(getIconsForNavigationItem(item));
		}
	}

	return icons.map((value) => `/api/icon/${value}.svg`)
}

function getIconsForNavigationItem(item) {
	/** @type string[] **/
	let icons = []

	if (item.icon) {
		icons.push(item.icon)
	}

	if (item.children) {
		for (const child of item.children) {
			icons = icons.concat(getIconsForNavigationItem(child));
		}
	}

	return icons
}

/** @type {import("@sveltejs/kit").Config} */
const config = {
	extensions: [".svelte", ...(mdsvexConfig.extensions || [])],

	preprocess: [
		vitePreprocess({}),
		mdsvex(mdsvexConfig)
	],

	kit: {
		adapter: adapter(),

		prerender: {
			// @ts-expect-error Can't type this properly.
			entries: ["*", ...getNavigationIcons()]
		}
	},
};

export default config;
