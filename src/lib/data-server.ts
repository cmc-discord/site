import fs from "fs";
import process from "process";
import YAML from "yaml";
import { trimString } from "$lib/utils";
import type {
	ArticleModule, NavigationItem,
	NavigationList,
	NavigationListWithPrefix,
	NavigationRoot, RichNavigationItem, RichNavigationList,
	RichNavigationListWithPrefix,
	TagInfo,
} from "./data";

let navigationCache: NavigationRoot | undefined = undefined
let tagInfoCache: TagInfo | undefined = undefined

export const articleModules = import.meta.glob(
	"/src/articles/**/*.svelte.md",
	{ eager: true },
)

export function getArticleModule(slug: string): ArticleModule | undefined {
	let trimmedSlug = trimString(slug, "/")

	if (slug.startsWith("a/")) {
		trimmedSlug = slug.substring(2)
	}

	return articleModules[`/src/articles/${trimmedSlug}.svelte.md`] as (ArticleModule | undefined)
}

export function getAllTagDescriptions(): TagInfo {
	if (tagInfoCache === undefined) {
		tagInfoCache = YAML.parse(
			fs.readFileSync(`${process.cwd()}/src/tags.yaml`, "utf8")
		)
	}

	return tagInfoCache!
}

export function getTagDescription(tag: string): string | null {
	return getAllTagDescriptions()[tag] ?? null
}

export function getNavigationRoot(): NavigationRoot {
	if (navigationCache === undefined) {
		navigationCache = YAML.parse(
			fs.readFileSync(`${process.cwd()}/src/navigation.yaml`, "utf8")
		)
	}

	return navigationCache!
}

export function getPrefixNavigation(prefix: string): NavigationList | null {
	return getNavigationRoot()[prefix] ?? null
}

export function findNavigationForPath(path: string): NavigationListWithPrefix | null {
	let current: string = trimString(path, "/")
	const parts: string[] = current.split("/");

	while (parts.length > 0) {
		const navigation = getPrefixNavigation(`/${current}`)

		if (navigation !== null) {
			return {
				prefix: current,
				list: navigation
			}
		}

		parts.pop()
		current = parts.join("/")
	}

	return null
}

export function transformNavigationList(data: NavigationListWithPrefix): RichNavigationListWithPrefix {
	const prefix = data.prefix;
	const entries = data.list
	const richEntries: RichNavigationItem[] = []

	for (const entry of entries) {
		const richEntry = transformNavigationItem(prefix, entry)

		richEntries.push(richEntry)
	}

	return  { prefix: data.prefix, list: richEntries}
}

export function transformNavigationItem(
	prefix: string,
	item: NavigationItem,
): RichNavigationItem {
	let path: string = prefix
	const children: RichNavigationList = []

	if (item.path !== ".") {
		path = `${path}/${item.path}`
	}

	const module = getArticleModule(path)!

	if (item.children) {
		for (const child of item.children) {
			children.push(transformNavigationItem(path, child))
		}
	}

	return {
		path: prefix,
		article: module.metadata,
		slug: `/${path}`,

		children
	};
}
