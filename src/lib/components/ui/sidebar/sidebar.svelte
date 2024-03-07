<script lang="ts">
	import Sidebar from "./"

	import { Divider } from "$lib/components/ui/divider"
	import { Separator } from "$lib/components/ui/separator";

	import type { Heading } from "$lib/stores/tocStore";
	import * as TocStore from "$lib/stores/tocStore"
	import { store } from "$lib/stores/tocStore"

	import { Home, Info, MoreHorizontal, Tag } from "lucide-svelte";

	let headings: Heading[] = []

	TocStore.store.subscribe((value) => {
		headings = value
	})
</script>

<div class="flex flex-col p-2 mt-1 overflow-y-auto h-full">
	<Sidebar.SectionPickerItem href="/">
		<Home size="1.5rem" slot="icon" />

		Home
	</Sidebar.SectionPickerItem>

	<Sidebar.SectionPickerItem href="/tags">
		<Tag size="1.5rem" slot="icon" />

		All Tags
	</Sidebar.SectionPickerItem>

	<Sidebar.SectionPickerItem href="/info">
		<Info size="1.5rem" slot="icon" />

		Site Information
	</Sidebar.SectionPickerItem>

	<!-- TODO: Make some tools!
	<Sidebar.SectionPickerItem href="#" disabled>
		<Wrench size="1.5rem" slot="icon" />

		Tools
	</Sidebar.SectionPickerItem>
	-->

	<Sidebar.SectionPickerItem href="#" disabled>
		<MoreHorizontal size="1.5rem" slot="icon" />

		Coming Soon...
	</Sidebar.SectionPickerItem>

	<Separator class="!my-3" />

	<slot name="content"/>

	<Sidebar.Link href="#" disabled>
		Coming Soon...
	</Sidebar.Link>

	{#if headings.length > 0}
		<Separator class="!my-3" />

		<Sidebar.Header>Page Contents</Sidebar.Header>

		{#each $store as heading}
			<Sidebar.PageHeading {heading} />
		{/each}
	{/if}
</div>
