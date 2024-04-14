import type { Article } from "$lib/types/article";
import { getGitTimes } from "$lib/utils-server";

import { json } from "@sveltejs/kit";

export const prerender = true;

async function getArticle(slug: string): Promise<Article | null> {
	const paths = import.meta.glob(
		"/src/articles/**/*.svelte.md",
		{ eager: true },
	);

	const path = `/src/articles/${slug}.svelte.md`;

	if (path in paths) {
		// @ts-expect-error This is not properly typed.
		const metadata = paths[path].metadata as Article;
		const times = await getGitTimes(path);

		if (metadata.tags) {
			metadata.tags = metadata.tags.sort((first, second) =>
				first.localeCompare(second),
			)
		}

		return { ...metadata, ...times } satisfies Article;
	} else {
		return null;
	}
}

export async function GET({ params }): Promise<Response> {
	return json(
		await getArticle(params.slug)
	);
}

