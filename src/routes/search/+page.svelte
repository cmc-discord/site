<script lang="ts">
	import { onMount } from "svelte";

	import * as Accordion from "$lib/components/ui/accordion";
	import * as DropdownMenu from "$lib//components/ui/dropdown-menu";

	import { Button } from "$lib/components/ui/button"
	import { Checkbox } from "$lib/components/ui/checkbox"
	import { Input } from "$lib/components/ui/input"
	import { Label } from "$lib/components/ui/label"
	import { Separator } from "$lib/components/ui/separator"
	import { Switch } from "$lib/components/ui/switch"

	import { ChevronDown, Tag, Search } from "lucide-svelte"
	import { goto } from '$app/navigation';

	type Filters = { tag?: { any: Array<string>} | Array<string> }
	type SearchResult = { url: string, title: string, description: string }
	type SearchResults = Array<SearchResult>

	let pagefind;
	let tags: Array<string>;
	let tagToggles: {[key: string]: boolean} = {}

	let tagAnyToggle = false

	let searchQuery: string = ""

	let promise: Promise<SearchResults> | null = null

	async function search(): Promise<SearchResults> {
		let query: string | null = searchQuery

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

		return results
	}

	onMount(async () => {
		pagefind = await import("/pagefind/pagefind.js")

		pagefind.init()

		const filters = await pagefind.filters()
		tags = filters?.tags?.keys() || ["one", "two"]

		tags.forEach((tag: string) => {
			tagToggles[tag] = false
		})
	})
</script>

<div class="m-4 md:flex md:flex-row md:h-full md:items-stretch">
	<div class="flex flex-col space-y-2 order-10 border-b pb-2 md:w-72 md:sticky md:border-b-0 md:pb-0 mb-4 md:mb-0 md:h-full md:items-stretch md:border-l md:pl-4">
		<form class="flex flex-col w-full space-y-2">
			<Input type="search" placeholder="Search" bind:value={searchQuery} class="mb-2" />

			<Accordion.Root>
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
			</Accordion.Root>

			<Button class="order-last" type="submit" on:click={() => {promise = search()}}>
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
				<div class="text-xl font-bold">Search Results</div>

				{#if results.length > 0}
					{#each results as r, index}
						<div class="flex flex-col space-y-2">
							<a href={r.url}>
								<div class="flex flex-col space-y-2 p-3 rounded hover:bg-secondary">
									<span class="text-lg font-medium">{index + 1}. {r.title}</span>

									<span>
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
										{@html r.description}
						</span>
								</div>
							</a>

							{#if index < (results.length - 1)}
								<Separator class="!mt-4" />
							{/if}
						</div>
					{/each}
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
