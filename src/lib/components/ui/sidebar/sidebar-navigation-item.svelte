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
</script>

<Button
	href={item.slug}
	variant={$page.url.pathname === item.slug ? "secondary" : "ghost"}
	class={cn(
		"sidebar-item",
		"font-medium text-left transition-colors flex flex-row items-center content-center w-full self-start justify-start my-1",
		className
	)}

	on:click={() => open = false}
>
	<span class="sidebar-link-icon sidebar-page-heading"><Dot strokeWidth="4" /></span>
	<span>{ item.article.title }</span>
</Button>

<div class="flex flex-col pl-3 sidebar-children">
	{#each item.children as child}
		<svelte:self item={child} class={className} bind:open />
	{/each}
</div>
