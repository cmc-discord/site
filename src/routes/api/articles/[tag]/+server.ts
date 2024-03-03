import type { Article } from "$lib/types/article";
import { json } from "@sveltejs/kit";
import { equalsIgnoringCase } from "$lib/utils";

async function getArticles(tag: string): Promise<Article[]> {
	const articles: Article[] = [];

	const paths = import.meta.glob(
		"/src/posts/*.md",
		{ eager: true },
	);

	for (const path in paths) {
		const file = paths[path];

		if (file && typeof file === "object") {
			const slug = path.split("/").at(-1)?.replace(".svelte.md", "");

			if (slug && "title" in file.metadata && "summary" in file.metadata) {
				const data = file.metadata as Omit<Article, "slug">;
				const article = { ...data, slug } satisfies Article;

				const hasTag = (value: string) => equalsIgnoringCase(value, tag);

				if (article.tags?.some(hasTag)) {
					articles.push(article);
				}
			}
		}
	}

	return articles.sort((first, second) =>
		first.title.localeCompare(second.title),
	);
}

export async function GET({ params }): Promise<Response> {
	const articles = await getArticles(params.tag);

	return json(articles);
}

