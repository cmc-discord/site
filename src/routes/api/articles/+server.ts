import type { Article } from "$lib/types/article";
import { json } from "@sveltejs/kit";

async function getArticles(): Promise<Article[]> {
	const articles: Article[] = [];

	const paths = import.meta.glob(
		"/src/posts/*.svelte.md",
		{ eager: true },
	);

	for (const path in paths) {
		const file = paths[path];

		if (file && typeof file === "object") {
			const slug = path.split("/").at(-1)?.replace(".svelte.md", "");

			if (slug && "title" in file.metadata && "summary" in file.metadata) {
				const data = file.metadata as Omit<Article, "slug">;
				const article = { ...data, slug } satisfies Article;

				articles.push(article);
			}
		}
	}

	return articles.sort((first, second) =>
		first.title.localeCompare(second.title),
	);
}

export async function GET(): Promise<Response> {
	const articles = await getArticles();

	return json(articles);
}
