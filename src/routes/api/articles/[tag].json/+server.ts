import type { Article } from "$lib/types/article";
import { equalsIgnoringCase } from "$lib/utils";
import { getGitTimes } from "$lib/utils-server";

import { json } from "@sveltejs/kit";

export const prerender = true;

async function getArticles(tag: string): Promise<Article[]> {
	const articles: Article[] = [];

	const paths = import.meta.glob(
		"/src/articles/**/*.svelte.md",
		{ eager: true },
	);

	for (const path in paths) {
		const file = paths[path] as { metadata: object };

		if (file && typeof file === "object") {
			const slug = path
				.replace("/src/articles/", "")
				.replace(".svelte.md", "");

			if (slug && "title" in file.metadata && "summary" in file.metadata) {
				const data = file.metadata as Omit<Article, "slug">;
				const times = await getGitTimes(path);
				const article = { ...data, ...times, slug } satisfies Article;

				if (article.tags) {
					article.tags = article.tags.sort((first, second) =>
						first.localeCompare(second),
					)
				}

				const hasTag = (value: string) => equalsIgnoringCase(value, tag);

				if (article.tags?.some(hasTag)) {
					articles.push(article);
				}
			}
		}
	}

	return articles.sort((first, second) =>
		first.slug.localeCompare(second.slug),
	);
}

export async function GET({ params }): Promise<Response> {
	const articles = await getArticles(params.tag);

	return json(articles);
}

