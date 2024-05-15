<script lang="ts">
	import type { Article } from "$lib/types/article";

	import { setContext } from "svelte";
	import Metadata from "$lib/components/head/Metadata.svelte";

	setContext("SHOW_ONLY_EXCERPT", true);

	export let data: { articles: Article[], tag: string, tagDescription: string | undefined };
</script>

<Metadata
	pageTitle="Tag: {data.tag}"
	description={data.tagDescription || "No tag description found."}
/>

<div data-pagefind-ignore>
	<h1 class="title font-semibold text-3xl" data-toc-ignore>
		Tag: <span class="capitalize">{data.tag}</span>
	</h1>

	<p class="mt-1">
		{data.tagDescription || "No tag description found."}
	</p>

	<p class="mt-1 mb-6">
		Select an article to view it, or <a class="underline" href="/search?tags={data.tag}">head to the search page</a>
		for more advanced queries.
	</p>

	<hr class="mb-2" />

	<div class="flex flex-col space-y-4 mb-2">
		{#if data.articles.length > 0}
			{#each data.articles as article}
				<a class="p-4 rounded-md hover:bg-accent no-header-links" href="/a/{article.slug}">
					<svelte:component this={article.content} />

					<p class="mb-2">
						<a class="underline" href="/a/{article.slug}">Read more...</a>
					</p>
				</a>
			{/each}
		{:else}
			<div class="prose">
				<div>
					We couldn't find any articles tagged with "<span class="capitalize">{data.tag}</span>."
				</div>

				<div>
					Please head to the <a href="/tags">All Tags page</a> for a full list of tags.
				</div>
			</div>
		{/if}
	</div>
</div>
