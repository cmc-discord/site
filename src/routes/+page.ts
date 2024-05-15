import type { Tag } from "$lib/types/tag";
import type { NavigationRoot } from "$lib/data";
import type { Article } from "$lib/types/article";

export async function load({ fetch }) {const response = await fetch("/api/navigation.json");
	const allSections: NavigationRoot = await response.json();
	const foundSections: Array<{path: string, title: string, description: string}> = [];

	for (const [key,] of Object.entries(allSections)) {
		const path = key.slice(2);
		const articleResponse = await fetch(`/api/article${path}.json`);
		const article: Article | null = await articleResponse.json();

		console.log({path, article})

		if (article === null) {
			continue;
		}

		foundSections.push({
			path: key,
			title: article.title,
			description: article.summary
		});
	}

	const sections = foundSections.sort((left, right) => {
		return left.title.toLowerCase().localeCompare(right.title.toLowerCase(), undefined)
	})

	return { sections }
}
