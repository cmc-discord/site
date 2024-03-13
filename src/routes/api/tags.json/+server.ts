import type { Article } from "$lib/types/article";
import type { Tag } from "$lib/types/tag";

import { json } from "@sveltejs/kit";

import fs from "fs";
import process from "process";
import YAML from "yaml";

export const prerender = true;

const tagInfo: { [key: string]: string } = YAML.parse(
	fs.readFileSync(`${process.cwd()}/src/tags.yaml`, "utf8")
)

async function getTags(): Promise<Tag[]> {
	const tags: { [key: string]: string } = {};

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

				if (data.tags) {
					data.tags.forEach((tag) =>
						tags[tag] = tagInfo[tag] ?? "No tag description found.",
					);
				}
			}
		}
	}

	const tagArray: Tag[] = [];

	for (const tag in tags) {
		tagArray.push(
			{
				name: tag,
				description: tags[tag],
			},
		);
	}

	return tagArray.sort((first, second) =>
		first.name.localeCompare(second.name),
	);
}

export async function GET(): Promise<Response> {
	const tags = await getTags();

	return json(tags);
}
