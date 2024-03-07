<script lang="ts">
	import Sidebar from "./"

	import { Divider } from "$lib/components/ui/divider"
	import { Separator } from "$lib/components/ui/separator";

	import type { Heading } from "$lib/stores/tocStore";
	import * as TocStore from "$lib/stores/tocStore"
	import { store } from "$lib/stores/tocStore"

	import { Home, Info, MoreHorizontal, Tag } from "lucide-svelte";

	export let open: boolean = false;

	let headings: Heading[] = [];

	TocStore.store.subscribe((value) => {
		headings = value
	})
</script>

<div class="p-2 mt-1 overflow-y-auto" style="height: calc(100vh - (4em + 6px))">
	<Sidebar.SectionPickerItem href="/" bind:open>
		<Home size="1.5rem" slot="icon" />

		Home
	</Sidebar.SectionPickerItem>

	<Sidebar.SectionPickerItem href="/tags" bind:open>
		<Tag size="1.5rem" slot="icon" />

		All Tags
	</Sidebar.SectionPickerItem>

	<Sidebar.SectionPickerItem href="/info" bind:open>
		<Info size="1.5rem" slot="icon" />

		Site Information
	</Sidebar.SectionPickerItem>

	<!-- TODO: Make some tools!
	<Sidebar.SectionPickerItem href="#" disabled>
		<Wrench size="1.5rem" slot="icon" />

		Tools
	</Sidebar.SectionPickerItem>
	-->

	<Sidebar.SectionPickerItem href="#" bind:open disabled>
		<MoreHorizontal size="1.5rem" slot="icon" />

		Coming Soon...
	</Sidebar.SectionPickerItem>

	<Separator class="!my-3" />

	<slot name="content"/>

	<Sidebar.Link href="#" bind:open disabled>
		Coming Soon...
	</Sidebar.Link>

	{#if headings.length > 0}
		<Separator class="!my-3" />

		<Sidebar.Header>Page Contents</Sidebar.Header>

		{#each $store as heading}
			<Sidebar.PageHeading {heading} bind:open />
		{/each}
	{/if}
</div>
