import { error } from "@sveltejs/kit";
import type { Article } from "$lib/types/article";

export async function load({ params, fetch }) {
	const response = await fetch(`/api/article/${params.slug}.json`);
	const serverMetadata: Article | undefined = await response.json()

	try {
		// This is ludicrous, but it works around Vite's vile dynamic import requirements.
		const paths = import.meta.glob(
			"/src/articles/**/*.svelte.md",
			{ eager: true },
		);

		const article = paths[`/src/articles/${params.slug}.svelte.md`];

		// @ts-expect-error This is not properly typed.
		const metadata = serverMetadata || article.metadata

		if (
			metadata.createdDate &&
			(metadata.createdDate instanceof String || typeof metadata.createdDate === "string")
		) {
			metadata.createdDate = new Date(metadata.createdDate)
		}

		if (
			metadata.modifiedDate &&
			(metadata.modifiedDate instanceof String || typeof metadata.modifiedDate === "string")
		) {
			metadata.modifiedDate = new Date(metadata.modifiedDate)
		}

		if (metadata.prev) {
			// @ts-expect-error This is not properly typed.
			metadata.prev_article = paths[`/src/articles/${metadata.prev}.svelte.md`].metadata as Article;
			metadata.prev_article.slug = metadata.prev
		}

		if (metadata.next) {
			// @ts-expect-error This is not properly typed.
			metadata.next_article = paths[`/src/articles/${metadata.next}.svelte.md`].metadata as Article;
			metadata.next_article.slug = metadata.next
		}

		return {
			// @ts-expect-error This is not properly typed.
			content: article.default,
			article: metadata,
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
