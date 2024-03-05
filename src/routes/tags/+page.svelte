<script lang="ts">
	import type { Tag } from "$lib/types/tag";

	export let data: { tags: Tag[] };
</script>

<h1 class="title text-3xl">
	All Tags
</h1>

<div class="ml-5 mt-2">
	<ul class="list-disc">
		{#each data.tags as tag}
			<li class="list-item">
				<div class="flex flex-col">
					<a class="capitalize anchor-link underline text-blue-500" href="/t/{tag.name}">{tag.name}</a>
					<span>{tag.description}</span>
				</div>
			</li>
		{/each}
	</ul>
</div>
