<script lang="ts">
	export let width: string = "17rem";
</script>

<div class="flex flex-row space-x-4 items-stretch h-full">
	<div class="border-r hidden md:block" style="width: {width}">
		<slot name="sidebar" />
	</div>

	<div class="flex-grow pt-2">
		<slot />
	</div>
</div>
