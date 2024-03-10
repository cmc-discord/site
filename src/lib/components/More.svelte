<script lang="ts">
	import { getContext } from "svelte";

	const onlyExcerpt = getContext("SHOW_ONLY_EXCERPT");
</script>

{#if !onlyExcerpt}
	<div class="article-more m-0 p-0 border-none">
		<slot />
	</div>
{/if}
