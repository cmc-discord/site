<script lang="ts">
	import { cn } from "$lib/utils";
	import { MessageCircleWarning } from "lucide-svelte";

	import type { HTMLAttributes } from "svelte/elements";
	import type { HeadingLevel } from ".";

	type $$Props = HTMLAttributes<HTMLHeadingElement> & {
		level?: HeadingLevel;
	};

	let className: $$Props["class"] = undefined;
	export let warning: boolean = false;
	export let ignoreToc: boolean | undefined = undefined;
	export { className as class };
</script>

<h2
	class={cn("mb-1 !font-bold !text-xl leading-none tracking-tight ml-0 p-0 !mt-0 flex-row !items-center", className)}
	data-toc-ignore={ignoreToc || warning}
	{...$$restProps}
>
	{#if warning}
		<MessageCircleWarning strokeWidth={2.5} class="mr-2" />

		<slot />
	{:else}
		<slot />
	{/if}


</h2>
