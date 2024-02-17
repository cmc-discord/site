<script lang="ts">
	export let tags = ["untagged"]
	export let title = ""

	import { Tag } from "lucide-svelte"

	$: tagString = tags.length > 0
		? tags.map((it) => { return `tag:${it}` }).join(", ")
		: null
</script>

<div class="prose dark:prose-invert"
     data-pagefind-body data-pagefind-filter="{tagString}"
>
	<h1 class="mb-2">{title}</h1>

	{#if tags.length > 0}
		<div class="flex flex-row flex-nowrap overflow-x-auto space-x-2 mb-3 pb-2">
			{#each tags as tag}
				<div class="flex flex-row text-sm items-center rounded bg-secondary capitalize p-2">
					<Tag size="1rem" class="mr-2" /> {tag}
				</div>
			{/each}
		</div>
	{/if}

	<slot />
</div>
