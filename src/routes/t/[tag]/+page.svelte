<script lang="ts">
	import type { Article } from "$lib/types/article";
	import { Tag, User } from "lucide-svelte";
	import { setContext } from "svelte";

	setContext("SHOW_ONLY_EXCERPT", true);

	export let data: { articles: Article[], tag: string };
</script>

<h1 class="title font-semibold text-3xl">
	Tag: <span class="capitalize">{data.tag}</span>
</h1>

<p class="mt-1">
	All articles with the <span class="font-semibold capitalize">"{data.tag}"</span> tag.
</p>

<p class="mt-1 mb-6">
	Select an article to view it, or <a class="underline" href="/search?tags={data.tag}">head to the search page</a>
	for more advanced queries.
</p>

<hr class="mb-2" />

<div class="flex flex-col space-y-4">
	{#each data.articles as article}
		<a class="p-4 rounded-md hover:bg-secondary" href="/a/{article.slug}">
			<svelte:component this={article.content} />

			<p class="mb-2">
				<a class="underline" href="/a/{article.slug}">Read more...</a>
			</p>
		</a>
	{/each}
</div>

