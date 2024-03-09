<script lang="ts">
	import { browser } from '$app/environment'
	import { page } from '$app/stores';
	import { onMount } from "svelte"
	import { mediaQuery } from "svelte-legos";

	import * as Accordion from "$lib/components/ui/accordion";
	import * as DropdownMenu from "$lib//components/ui/dropdown-menu";
	import * as Pagination from "$lib/components/ui/pagination";

	import { Button } from "$lib/components/ui/button"
	import { Checkbox } from "$lib/components/ui/checkbox"
	import { Input } from "$lib/components/ui/input"
	import { Label } from "$lib/components/ui/label"
	import { Separator } from "$lib/components/ui/separator"
	import { Switch } from "$lib/components/ui/switch"

	import { ChevronLeft, ChevronRight, Tag, Search, User } from "lucide-svelte";

	const isDesktop = mediaQuery("(min-width: 768px)");

	type Filters = {
		author? : { any: Array<string>} | Array<string>,
		tag?: { any: Array<string>} | Array<string>
	}

	type SearchResult = { url: string, title: string, description: string }
	type SearchResults = Array<SearchResult>

	let queryParams: URLSearchParams = new URLSearchParams()

	if (browser) {
		queryParams = $page.url.searchParams
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let pagefind: any;

	let authors: Array<string> = [];
	let authorToggles: {[key: string]: boolean} = {}
	let authorAnyToggle = false

	let tags: Array<string> = [];
	let tagToggles: {[key: string]: boolean} = {}
	let tagAnyToggle = false

	let authorsAccordionValue = ""
	let tagsAccordionValue = ""
	let searchQuery: string = ""

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let promise: Promise<any> | null = null

	let count = 0
	let pageNumber = 1

	$: perPage = $isDesktop ? 5 : 3;
	$: siblingCount = $isDesktop ? 2 : 0;

	$: startIndex = Math.max((pageNumber - 1) * perPage, 0)
	$: endIndex = Math.min(pageNumber * perPage, count)

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function resultsForPage(results: Array<any>): Array<any> {
		return results.slice(startIndex, endIndex)
	}

	function updatePageNumber(newPageNumber: number) {
		queryParams.set("page", String(newPageNumber))

		if (browser) {
			let queryString: string | null = queryParams.toString()

			if (queryString.length > 0) {
				queryString = "?" + queryString
			}

			window.history.pushState(null, "", "/search" + queryString)
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	async function search(): Promise<Array<any>> {
		let query: string | null = searchQuery
		pageNumber = 1

		if (query.length == 0) {
			query = null
		}

		let authors = []

		for (const key in authorToggles) {
			if (authorToggles[key] === true) {
				authors.push(key)
			}
		}

		let tags = []

		for (const key in tagToggles) {
			if (tagToggles[key] === true) {
				tags.push(key)
			}
		}

		const filters: Filters = {}

		if (authors.length > 0) {
			if (authorAnyToggle) {
				filters["author"] = {
					any: authors
				}
			} else {
				filters["author"] = authors
			}
		}

		if (tags.length > 0) {
			if (tagAnyToggle) {
				filters["tag"] = {
					any: tags
				}
			} else {
				filters["tag"] = tags
			}
		}

		const searchResults = await pagefind.search(
			query,
			{ filters: filters }
		)

		const results: SearchResults = []

		for (const v of searchResults.results) {
			const data = await v.data()

			results.push({
				url: data.url,
				title: data.meta.title,
				description: data.excerpt,
			})
		}

		if (searchQuery.length > 0) {
			queryParams.set("q", searchQuery)
		} else {
			queryParams.delete("q")
		}

		if (tags.length > 0) {
			queryParams.set("tags", tags.join(","))
		} else {
			queryParams.delete("tags")
		}

		if (authors.length > 0) {
			queryParams.set("authors", authors.join(","))
		} else {
			queryParams.delete("authors")
		}

		if (tagAnyToggle) {
			queryParams.set("anyTags", "true")
		} else {
			queryParams.delete("anyTags")
		}

		if (authorAnyToggle) {
			queryParams.set("anyAuthors", "true")
		} else {
			queryParams.delete("anyAuthors")
		}

		queryParams.set("page", String(pageNumber))

		if (browser) {
			let queryString: string | null = queryParams.toString()

			if (queryString.length > 0) {
				queryString = "?" + queryString
			}

			window.history.pushState(null, "", "/search" + queryString)
		}

		count = searchResults.results.length

		return searchResults.results
	}

	onMount(async () => {
		pagefind = await import("/pagefind/pagefind.js")

		pagefind.init()

		const filters = await pagefind.filters()

		if (filters?.author !== undefined) {
			authors = Object.keys(filters.author)
		}

		if (filters?.tag !== undefined) {
			tags = Object.keys(filters.tag)
		}

		authors.forEach((author: string) => {
			authorToggles[author] = false
		})

		tags.forEach((tag: string) => {
			tagToggles[tag] = false
		})

		let doSearch = false

		if (queryParams.has("q")) {
			searchQuery = queryParams.get("q")!

			doSearch = true
		}

		if (queryParams.has("authors")) {
			const authorTags = queryParams.get("authors")!.split(",")

			authorTags.forEach((author) => {
				if (authors.includes(author)) {
					authorToggles[author] = true

					doSearch = true
					authorsAccordionValue = "authors"
				}
			})
		}

		if (queryParams.has("tags")) {
			const queryTags = queryParams.get("tags")!.split(",")

			queryTags.forEach((tag) => {
				if (tags.includes(tag)) {
					tagToggles[tag] = true

					doSearch = true
					tagsAccordionValue = "tags"
				}
			})
		}

		if (queryParams.has("anyAuthors")) {
			authorAnyToggle = queryParams.get("anyAuthors")! !== "false"

			tagsAccordionValue = "authors"
		}

		if (queryParams.has("anyTags")) {
			tagAnyToggle = queryParams.get("anyTags")! !== "false"

			tagsAccordionValue = "tags"
		}

		if (queryParams.has("page")) {
			pageNumber = Number(queryParams.get("page")!)
		}

		if (doSearch) {
			promise = search()
		}
	})
</script>

<div class="m-4 md:flex md:flex-row md:h-full md:items-stretch" data-pagefind-ignore="all">
	<div class="flex flex-col space-y-2 order-10 border-b pb-2 md:w-72 md:sticky md:border-b-0 md:pb-0 mb-4 md:mb-0 md:h-full md:items-stretch md:border-l md:pl-4">
		<form class="flex flex-col w-full space-y-2">
			<Input type="search" placeholder="Search" bind:value={searchQuery} class="mb-2" />

			{#if authors.length > 0}
				<Accordion.Root bind:value={authorsAccordionValue}>
					<Accordion.Item value="authors">
						<Accordion.Trigger><div class="flex flex-row flex-grow"><User size="1.5rem" class="mr-2" /> Authors</div></Accordion.Trigger>
						<Accordion.Content>
							{#each authors as author}
								<div class="my-1 flex items-center space-x-2">
									<Checkbox id="author-{author}" bind:checked={authorToggles[author]} />
									<Label for="author-{author}" class="flex-grow w-full">{author}</Label>
								</div>
							{/each}

							<div class="mt-4 flex items-center space-x-2 pt-2">
								<Label class="flex-grow" for="tag-any-toggle">Match Any</Label>
								<Switch id="tag-any-toggle" bind:checked={authorAnyToggle} />
							</div>
						</Accordion.Content>

					</Accordion.Item>
				</Accordion.Root>
			{/if}

			{#if tags.length > 0}
				<Accordion.Root bind:value={tagsAccordionValue}>
					<Accordion.Item value="tags">
						<Accordion.Trigger><div class="flex flex-row flex-grow"><Tag size="1.5rem" class="mr-2" /> Tags</div></Accordion.Trigger>
						<Accordion.Content>
							{#each tags as tag}
								<div class="my-1 flex items-center space-x-2">
									<Checkbox id="tag-{tag}" bind:checked={tagToggles[tag]} />
									<Label for="tag-{tag}" class="flex-grow w-full capitalize">{tag}</Label>
								</div>
							{/each}

							<div class="mt-4 flex items-center space-x-2 pt-2">
								<Label class="flex-grow" for="tag-any-toggle">Match Any</Label>
								<Switch id="tag-any-toggle" bind:checked={tagAnyToggle} />
							</div>
						</Accordion.Content>

					</Accordion.Item>
				</Accordion.Root>
			{/if}

			<Button class="order-last" type="submit" on:click={(e) => {promise = search(); e.preventDefault()}}>
				<Search class="mr-2" />

				Search
			</Button>
		</form>
	</div>

	<div class="flex-grow w-full order-1 md:pr-4 space-y-2">
		{#if promise == null}
			<div class="text-xl font-bold">Please enter a query and press the "Search" button.</div>
		{:else}
			{#await promise}
				<div class="text-xl font-bold">Loading...</div>
			{:then results}
				<div class="text-xl font-bold mb-2">Search Results</div>

				{#if results.length > 0}
					{#each resultsForPage(results) as r, index}
						<div class="flex flex-col space-y-2">
							{#await r.data()}
								Loading result...
							{:then data}
								<a href={data.url.replace(".html", "")}>
									<div class="flex flex-col space-y-2 p-4 rounded-md hover:bg-secondary">
										<span class="text-lg font-medium">{data.meta.title}</span>

										<span>
								<!-- eslint-disable-next-line svelte/no-at-html-tags -->
											{@html data.excerpt}
										</span>
									</div>
								</a>

								{#if index < (r.length - 1)}
									<Separator class="!mt-4" />
								{/if}
							{/await}
						</div>
					{/each}

					{#if results.length > perPage}
						<div class="border-t mt-4 pt-4">
							<Pagination.Root onPageChange={updatePageNumber} count={count} {perPage} {siblingCount} bind:page={pageNumber} let:pages let:currentPage>
								<Pagination.Content>
									<Pagination.Item>
										<Pagination.PrevButton>
											<ChevronLeft class="h-4 w-4" />

											<span class="hidden sm:block">Previous</span>
										</Pagination.PrevButton>
									</Pagination.Item>

									{#each pages as page (page.key)}
										{#if page.type === "ellipsis"}
											<Pagination.Item>
												<Pagination.Ellipsis />
											</Pagination.Item>
										{:else}
											<Pagination.Item>
												<Pagination.Link {page} isActive={currentPage === page.value}>
													{page.value}
												</Pagination.Link>
											</Pagination.Item>
										{/if}
									{/each}

									<Pagination.Item>
										<Pagination.NextButton>
											<span class="hidden sm:block">Next</span>

											<ChevronRight class="h-4 w-4" />
										</Pagination.NextButton>
									</Pagination.Item>
								</Pagination.Content>
							</Pagination.Root>
						</div>
					{/if}
				{:else}
					<span class="text-lg font-medium">No results.</span>
				{/if}
			{:catch error}
				<div class="text-xl font-bold">Error</div>

				<span class="text-lg font-medium">Search failed due to an error: {error}</span>
			{/await}
		{/if}
	</div>
</div>
