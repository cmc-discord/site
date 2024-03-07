<script lang="ts">
	import { cn } from "$lib/utils";

	import { Button } from "$lib/components/ui/button";

	import type { Heading } from "$lib/stores/tocStore"

	import type { HTMLAttributes } from "svelte/elements";
	import { ChevronRight } from "lucide-svelte";

	type Props = HTMLAttributes<HTMLDivElement>;
	let className: Props["class"] = undefined;

	export let heading: Heading;
	export let open: boolean = false;

	export { className as class };
</script>

<Button
	href="#{heading.id}"
	variant="ghost"
	class={cn(
		"font-medium text-left transition-colors flex flex-row items-center content-center w-full self-start justify-start",
		className
	)}

	on:click={() => open = false}
>
	<span class="sidebar-link-icon"><ChevronRight size="1.5em" /></span>
	<span>{ heading.title }</span>
</Button>

<div class="flex flex-col pl-3 sidebar-children">
	{#each heading.children as child}
		<svelte:self heading={child} class={className} bind:open />
	{/each}
</div>

