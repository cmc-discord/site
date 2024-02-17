<script lang="ts">
	export let width: string = "17rem";
</script>

<div class="flex flex-row items-stretch h-full">
	<div class="border-r hidden md:block md:w-72" style="width: {width}">
		<slot name="sidebar" />
	</div>

	<div class="flex-grow w-full pt-2 !mx-4">
		<slot />
	</div>
</div>
