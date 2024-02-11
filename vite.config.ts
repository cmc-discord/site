import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { pagefind, type PagefindConfig } from "vite-plugin-pagefind";
import Icons from "unplugin-icons/vite"

const pagefindConfig: PagefindConfig = {
	buildDir: "build",
	publicDir: "static",
}

export default defineConfig({
	plugins: [
		sveltekit(),

		Icons({
			compiler: "svelte",
		}),

		pagefind(pagefindConfig),
	],
});
