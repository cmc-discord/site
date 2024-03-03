import type { Article } from "$lib/types/article";

export async function load({ fetch, params }) {
	const response = await fetch(`/api/articles/${params.tag}`)
	const articles: Article[] = await response.json()

	console.log(`Loaded ${articles.length} articles tagged with "${params.tag}".`)

	return { articles }
}
