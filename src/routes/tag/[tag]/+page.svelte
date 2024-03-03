<script lang="ts">
	import type { Article } from "$lib/types/article";

	export let data: { articles: Article[] };
</script>

<ul>
	{#each data.articles as article}
		<li>
			{ article.slug } -> { article.title } [ {article.authors} / {article.tags} ]
		</li>
	{/each}
</ul>
