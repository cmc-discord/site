<script lang="ts">
	export let width: string = "17rem";
</script>

<div class="flex flex-row items-stretch h-full">

	<!--
		TODO: Sticky sidebar. Approach so far works, but makes the sidebar too short (so the border
					doesn't reach the bottom of the screen), and it seems impossible to make the contents
					scrollable. Help, please!

		class: sticky h-full overflow-y-auto
		top: calc(4em + 1px)
	-->
	<div class="border-r hidden md:block md:w-72" style="width: {width}">
		<slot name="sidebar" />
	</div>

	<div class="flex-grow w-full pt-2 !mx-4">
		<slot />
	</div>
</div>
