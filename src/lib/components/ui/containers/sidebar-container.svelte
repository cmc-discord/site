<script lang="ts">
	export let width: string = "17rem";
</script>

<div class="flex flex-row items-stretch h-full">
	<div class="border-r hidden md:w-72 md:flex md:flex-col sticky h-full overflow-hidden" style="top: calc(4em + 1px); width: {width}">
		<slot name="sidebar" />
	</div>

	<div class="flex-grow w-full pt-2 !mx-4">
		<slot />
	</div>
</div>
