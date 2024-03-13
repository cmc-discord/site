<script lang="ts">
	import Sidebar from "./";

	import { page } from "$app/stores";

	import { Separator } from "$lib/components/ui/separator";

	import type { RichNavigationListWithPrefix } from "$lib/data";
	import { transformNavigationList } from "$lib/data";

	import { tocStore } from "$lib/stores/tocStore";
	import { navigationStore } from "$lib/stores/navigationStore";

	import { Home, Info, MoreHorizontal, Tag } from "lucide-svelte";
	import { onMount } from "svelte";

	export let open: boolean = false;

	let navigation: RichNavigationListWithPrefix | null = null

	navigationStore.subscribe((value) => {
		navigation = value
	});
</script>

<div
	class="p-2 mt-1 overflow-y-auto w-full"
	style="height: calc(100vh - (4em + 6px))">
	<Sidebar.SectionPickerItem href="/" bind:open>
		<Home size="1.5rem" slot="icon" />

		Home
	</Sidebar.SectionPickerItem>

	<Sidebar.SectionPickerItem href="/tags" emphasis={$page.url.pathname === "/tags"} bind:open>
		<Tag size="1.5rem" slot="icon" />

		All Tags
	</Sidebar.SectionPickerItem>

	<Sidebar.SectionPickerItem href="/a/meta" emphasis={$page.url.pathname.startsWith("/a/meta")} bind:open>
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

	{#if navigation && navigation.list.length > 0}
		<Separator class="!my-3" />

		<Sidebar.Header>Section Navigation</Sidebar.Header>

		{#each navigation.list as navigationEntry}
			<Sidebar.NavigationItem item={navigationEntry} bind:open />
		{/each}
	{/if}

	<slot name="content" />

	{#if $tocStore.length > 0}
		<Separator class="!my-3" />

		<Sidebar.Header>Page Contents</Sidebar.Header>

		{#each $tocStore as heading}
			<Sidebar.PageHeading {heading} bind:open />
		{/each}
	{/if}
</div>
