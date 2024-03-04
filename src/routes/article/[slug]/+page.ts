import { error } from "@sveltejs/kit"
import type { Article } from "$lib/types/article";

export async function load({ params }) {
	try {
		const article = await import(`../../../articles/${params.slug}.svelte.md`)

		return {
			content: article.default,
			article: article as Article
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}
