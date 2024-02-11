<script lang="ts">
	import { Separator } from "$lib/components/ui/separator";

	import { searchStore, resultStore } from "$lib/components/ui/search"
</script>

<span class="text-xl font-bold">Search Results</span>
<h2 class="text-lg mb-4">Query: {$searchStore}</h2>

{#if $resultStore.length > 0}
	{#each $resultStore as r, index}
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

			{#if index < ($resultStore.length - 1)}
				<Separator class="!mt-4" />
			{/if}
		</div>
	{/each}
{:else}
	<span class="text-lg font-medium">No results.</span>
{/if}
