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

	import { ChevronLeft, ChevronRight, Tag, Search } from "lucide-svelte"

	const isDesktop = mediaQuery("(min-width: 768px)");

	type Filters = { tag?: { any: Array<string>} | Array<string> }
	type SearchResult = { url: string, title: string, description: string }
	type SearchResults = Array<SearchResult>

	let queryParams: URLSearchParams = new URLSearchParams()

	if (browser) {
		queryParams = $page.url.searchParams
	}

	let pagefind;

	let tags: Array<string> = [];
	let tagToggles: {[key: string]: boolean} = {}
	let tagAnyToggle = false

	let accordionValue = ""
	let searchQuery: string = ""

	let promise: Promise<any> | null = null

	let count = 0
	let pageNumber = 1

	$: perPage = $isDesktop ? 5 : 3;
	$: siblingCount = $isDesktop ? 2 : 0;

	$: startIndex = Math.max((pageNumber - 1) * perPage, 0)
	$: endIndex = Math.min(pageNumber * perPage, count)

	function resultsForPage(results: Array<any>): Array<any> {
		console.log({
			count: count,
			page: pageNumber,
			perPage: perPage,
			start: startIndex,
			end: endIndex,
		})

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

	async function search(): Promise<Array<any>> {
		let query: string | null = searchQuery
		pageNumber = 1

		if (query.length == 0) {
			query = null
		}

		let tags = []

		for (const key in tagToggles) {
			if (tagToggles[key] === true) {
				tags.push(key)
			}
		}

		const filters: Filters = {}

		if (tags.length > 0) {
			if (tagAnyToggle) {
				filters["tag"] = {
					any: tags
				}
			} else {
				filters["tag"] = tags
			}
		}

		console.log({
			filters: filters,
			query: query,
		})

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

		if (tagAnyToggle) {
			queryParams.set("anyTags", "true")
		} else {
			queryParams.delete("anyTags")
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

		console.log({
			filters: filters,
			tags: Object.keys(filters.tag)
		})

		if (filters?.tag !== undefined) {
			tags = Object.keys(filters.tag)
		}

		tags.forEach((tag: string) => {
			tagToggles[tag] = false
		})

		let doSearch = false

		if (queryParams.has("q")) {
			searchQuery = queryParams.get("q")!

			doSearch = true
		}

		if (queryParams.has("tags")) {
			const queryTags = queryParams.get("tags")!.split(",")

			queryTags.forEach((tag) => {
				if (tags.includes(tag)) {
					tagToggles[tag] = true

					doSearch = true
					accordionValue = "tags"
				}
			})
		}

		if (queryParams.has("anyTags")) {
			tagAnyToggle = queryParams.get("anyTags")! !== "false"

			accordionValue = "tags"
		}

		if (queryParams.has("page")) {
			pageNumber = Number(queryParams.get("page")!)
		}

		if (doSearch) {
			promise = search()
		}
	})
</script>

<div class="m-4 md:flex md:flex-row md:h-full md:items-stretch">
	<div class="flex flex-col space-y-2 order-10 border-b pb-2 md:w-72 md:sticky md:border-b-0 md:pb-0 mb-4 md:mb-0 md:h-full md:items-stretch md:border-l md:pl-4">
		<form class="flex flex-col w-full space-y-2">
			<Input type="search" placeholder="Search" bind:value={searchQuery} class="mb-2" />

			<Accordion.Root bind:value={accordionValue}>
				{#if tags.length > 0}
					<Accordion.Item value="tags">
						<Accordion.Trigger>Tags</Accordion.Trigger>
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
				{/if}
			</Accordion.Root>

			<Button class="order-last" type="submit" on:click={(e) => {promise = search(); e.preventDefault()}}>
				<Search class="mr-2" />

				Search
			</Button>
		</form>
	</div>

	<div class="flex-grow w-full order-1 md:pr-4">
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
								Loading result {index + 1}...
							{:then data}
								<a href={data.url}>
									<div class="flex flex-col space-y-2 p-3 rounded hover:bg-secondary">
										<span class="text-lg font-medium">{index + 1}. {data.meta.title}</span>

										<span>
								<!-- eslint-disable-next-line svelte/no-at-html-tags -->
											{@html data.excerpt}
										</span>
									</div>
								</a>

								{#if index < (results.length - 1)}
									<Separator class="!mt-4" />
								{/if}
							{/await}
						</div>
					{/each}

					{#if results.length > siblingCount}
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
