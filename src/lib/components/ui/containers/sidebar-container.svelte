<script lang="ts">

</script>

<div class="flex flex-row items-stretch h-full">
	<div
		class="border-r hidden md:w-[17em] md:min-w-[17em] md:max-w-[17em] md:flex md:flex-col sticky h-full overflow-hidden"
		style="top: calc(4em + 1px);">
		<slot name="sidebar" />
	</div>

	<div class="flex-grow w-full pt-2 !mx-4">
		<slot />
	</div>
</div>
