export type Article = {
	tags: string[] | undefined,
	authors: string[] | undefined,
	previous: string | undefined,
	next: string | undefined,

	createdDate: Date | undefined,
	modifiedDate: Date | undefined,

	summary: string,
	slug: string,
	title: string,

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	content: any | undefined,

	// Set by loading scripts only
	prev_article: unknown | undefined,
	next_article: unknown | undefined,
}
