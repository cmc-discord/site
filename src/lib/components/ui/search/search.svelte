<script lang="ts">
	import { onMount } from "svelte";

	import { Button } from "$lib/components/ui/button"
	import { Input } from "$lib/components/ui/input"

	import { Search } from "lucide-svelte"
	import { goto } from '$app/navigation';
	import { get } from "svelte/store";

	import { searchStore, addResult, clearResults } from "./";

	let pagefind;

	onMount(async () => {
		pagefind = await import("/pagefind/pagefind.js")

		pagefind.init()
	})

	async function handleSubmit() {
		await goto("/search")

		clearResults()

		const results = await pagefind.search(get(searchStore));
		console.log(results);

		for (const v of results.results) {
			const data = await v.data()

			addResult({
				url: data.url,
				title: data.meta.title,
				description: data.excerpt,
			})
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="flex w-full space-x-2">
	<Input required type="search" placeholder="Search" bind:value={$searchStore} />
	<Button type="submit"><Search /></Button>
</form>
