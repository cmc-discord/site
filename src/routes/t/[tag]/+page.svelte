<script lang="ts">
	import type { Article } from "$lib/types/article";
	import { tags as _tagInfo } from "$lib/../taginfo.json";

	import { setContext } from "svelte";

	let tagInfo = _tagInfo as { [key: string]: string | undefined };

	setContext("SHOW_ONLY_EXCERPT", true);

	export let data: { articles: Article[], tag: string };
</script>

<div data-pagefind-ignore>
	<h1 class="title font-semibold text-3xl" data-toc-ignore>
		Tag: <span class="capitalize">{data.tag}</span>
	</h1>

	<p class="mt-1">
		{#if tagInfo[data.tag]}
			{tagInfo[data.tag]}
		{:else}
			No tag description found.
		{/if}
	</p>

	<p class="mt-1 mb-6">
		Select an article to view it, or <a class="underline" href="/search?tags={data.tag}">head to the search page</a>
		for more advanced queries.
	</p>

	<hr class="mb-2" />

	<div class="flex flex-col space-y-4 mb-2">
		{#each data.articles as article}
			<a class="p-4 rounded-md hover:bg-secondary no-header-links" href="/a/{article.slug}">
				<svelte:component this={article.content} />

				<p class="mb-2">
					<a class="underline" href="/a/{article.slug}">Read more...</a>
				</p>
			</a>
		{/each}
	</div>
</div>
