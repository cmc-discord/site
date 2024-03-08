import type { Article } from "$lib/types/article";

export async function load({ fetch, params }) {
	const response = await fetch(`/api/articles/${params.tag}.json`);
	const articles: Article[] = await response.json();

	// This is ludicrous, but it works around Vite's vile dynamic import requirements.
	const paths = import.meta.glob(
		"/src/articles/**/*.svelte.md",
		{ eager: true },
	);

	for (const article of articles) {
		// @ts-expect-error This is not properly typed.
		article.content = paths[`/src/articles/${article.slug}.svelte.md`].default;
	}

	console.log(`Loaded ${articles.length} articles tagged with "${params.tag}".`);

	return {
		articles,
		tag: params.tag,
	};
}
