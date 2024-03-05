import type { Article } from "$lib/types/article";

export async function load({ fetch, params }) {
	const response = await fetch(`/api/articles/${params.tag}.json`)
	const articles: Article[] = await response.json()

	for (const article of articles) {
		const document = await import(
			// TODO: Figure out how to support subdirectories, Vite requires that the import start with "./" or "../".
			`../../../articles/${article.slug}.svelte.md`
			);

		article.content = document.default
	}

	console.log(`Loaded ${articles.length} articles tagged with "${params.tag}".`)

	return {
		articles,
		tag: params.tag
	}
}
