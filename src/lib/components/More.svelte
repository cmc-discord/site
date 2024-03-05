<script lang="ts">
	import { getContext } from "svelte";

	const onlyExcerpt = getContext("SHOW_ONLY_EXCERPT");
</script>

{#if !onlyExcerpt}
	<slot />
{/if}
