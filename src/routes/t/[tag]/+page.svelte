<script lang="ts">
	import type { Article } from "$lib/types/article";

	export let data: { articles: Article[], tag: string };
</script>

<h1 class="title text-3xl">
	Tag: <span class="capitalize">{data.tag}</span>
</h1>

<div class="ml-5 mt-2">
	<ul class="list-disc">
		{#each data.articles as article}
			<li class="list-item">
				<div class="flex flex-col">
					<a class="capitalize anchor-link underline text-blue-500" href="/a/{article.slug}">{article.title}</a>
					<span>{article.summary}</span>
				</div>
			</li>
		{/each}
	</ul>
</div>

