export type Article = {
	tags: string[] | undefined,
	authors: string[] | undefined,
	summary: string,
	slug: string,
	title: string,

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	content: any | undefined,
}
