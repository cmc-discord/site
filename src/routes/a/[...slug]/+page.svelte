<script lang="ts">
	import type { Article } from "$lib/types/article";

	export let data: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		content: any,
		article: Article
	};
</script>

<svelte:component this={data.content} article={data.article} />
