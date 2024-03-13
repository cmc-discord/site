import type { Article } from "$lib/types/article";
import type { Tag } from "$lib/types/tag";

export async function load({ fetch, params }) {
	const articleResponse = await fetch(`/api/articles/${params.tag}.json`);
	const tagsResponse = await fetch("/api/tags.json")

	const articles: Article[] = await articleResponse.json();

	// This is ludicrous, but it works around Vite's vile dynamic import requirements.
	const paths = import.meta.glob(
		"/src/articles/**/*.svelte.md",
		{ eager: true },
	);

	for (const article of articles) {
		// @ts-expect-error This is not properly typed.
		article.content = paths[`/src/articles/${article.slug}.svelte.md`].default;
	}

	const tags: Tag[] = await tagsResponse.json();
	let tagDescription: string | undefined

	for (const apiTag of tags) {
		if (apiTag.name === params.tag) {
			tagDescription = apiTag.description;
		}
	}

	console.log(`Loaded ${articles.length} articles tagged with "${params.tag}".`);

	return {
		articles,
		tag: params.tag,
		tagDescription: tagDescription,
	};
}
