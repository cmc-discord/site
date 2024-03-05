<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import type { Tag } from "$lib/types/tag";
	import { TagIcon } from "lucide-svelte";
	import { truncateString } from "$lib/utils";

	export let data: { tags: Tag[] };
</script>

<h1 class="title text-3xl">
	All Tags
</h1>

<p class="my-1 mb-6">
	Select a tag to view all relevant articles, or <a class="underline" href="/search">head to the search page</a>
	for more advanced queries.
</p>

<div class="m-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-flow-row gap-4">
	{#each data.tags as tag}
		<a class="h-32 w-full " href="/t/{tag.name}">
			<div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full h-full">
				<div class="m-6">
					<h3 class="text-lg font-semibold leading-none tracking-tight flex flex-row mb-2">
						<TagIcon size="1em" class="mr-2" /> <span class="capitalize">{tag.name}</span>
					</h3>

					<div class="text-sm text-muted-foreground h-16 overflow-y-hidden">
						{truncateString(tag.description)}
					</div>
				</div>
			</div>
		</a>
	{/each}
</div>
