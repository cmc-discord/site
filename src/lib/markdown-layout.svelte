<script lang="ts">
	export let tags = ["untagged"]

	$: tagString = tags.map((it) => { return `tag:${it}` }).join(", ")
</script>

<div class="prose dark:prose-invert" data-pagefind-filter="{tagString}">
	<slot />
</div>
