import { error } from "@sveltejs/kit";
import type { Article } from "$lib/types/article";

export async function load({ params }) {
	try {
		// This is ludicrous, but it works around Vite's vile dynamic import requirements.
		const paths = import.meta.glob(
			"/src/articles/**/*.svelte.md",
			{ eager: true },
		);

		const article = paths[`/src/articles/${params.slug}.svelte.md`];

		return {
			// @ts-expect-error This is not properly typed.
			content: article.default,

			// @ts-expect-error This is not properly typed.
			article: article.metadata as Article,
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
