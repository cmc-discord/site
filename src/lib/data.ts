import type { Article } from "./types/article"

export type NavigationItem = { path: string, children: NavigationList | undefined, icon: string | undefined }
export type NavigationList = NavigationItem[]
export type NavigationRoot = { [key: string]: NavigationList }
export type NavigationListWithPrefix = { prefix: string, list: NavigationList }

export type SlugWithArticle = { slug: string, article: Article }
export type RichNavigationItem = SlugWithArticle & { path: string, children: RichNavigationList, icon: string | undefined}
export type RichNavigationList = RichNavigationItem[]
export type RichNavigationListWithPrefix = { prefix: string, list: RichNavigationList }

export type ArticleModule = { metadata: Article }
export type TagInfo = { [key: string]: string}
