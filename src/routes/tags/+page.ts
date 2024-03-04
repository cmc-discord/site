import type { Tag } from "$lib/types/tag";

export async function load({ fetch }) {
	const response = await fetch("/api/tags.json");
	const tags: Tag[] = await response.json();

	console.log(`Loaded ${tags.length} tags.`);

	return { tags };
}
