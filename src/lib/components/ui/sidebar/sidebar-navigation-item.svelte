<script lang="ts">
	import { page } from "$app/stores";
	import { cn } from "$lib/utils";

	import { Button } from "$lib/components/ui/button";
	import type { RichNavigationItem } from "$lib/data";

	import { Dot } from "lucide-svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type Props = HTMLAttributes<HTMLDivElement>;
	let className: Props["class"] = undefined;

	export let item: RichNavigationItem;
	export let open: boolean = false;

	export { className as class };

	let iconPromise: Promise<string> | undefined;
	let active: boolean = false

	page.subscribe((value) => {
		active = value.url.pathname === item.slug
	})

	async function getIcon(icon: string) {
		const response = await fetch(`/api/icon/${icon}.svg`)

		if (response.ok) {
			return await response.text();
		} else {
			throw new Error("Icon not found.")
		}
	}

	if (item.icon) {
		iconPromise = getIcon(item.icon)
	}
</script>

<Button
	href={item.slug}
	variant={active ? "secondary" : "ghost"}
	class={cn(
		"sidebar-navigation-item",
		"font-medium text-left transition-colors flex flex-row items-center content-center w-full self-start justify-start my-1",
		className
	)}

	on:click={() => open = false}
>

	{#if item.icon}
		<a class="hidden" href="/api/icon/{item.icon}.svg" data-pagefind-ignore>/api/icon/{item.icon}.svg</a>
	{/if}

	{#if iconPromise }
		{#await iconPromise}
			<span class={active ? "sidebar-icon" : "sidebar-link-icon"}><Dot strokeWidth="4" /></span>
		{:then result}
			<span class={active ? "sidebar-icon" : "sidebar-link-icon"}>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html result }
			</span>
		{:catch _}
			<span class={active ? "sidebar-icon" : "sidebar-link-icon"}><Dot strokeWidth="4" /></span>
		{/await}
	{:else}
		<span class={active ? "sidebar-icon" : "sidebar-link-icon"}><Dot strokeWidth="4" /></span>
	{/if}

	<span>{ item.article.title }</span>
</Button>

<div class="flex flex-col ml-3 sidebar-children">
	{#each item.children as child}
		<svelte:self item={child} class={className} bind:open />
	{/each}
</div>
