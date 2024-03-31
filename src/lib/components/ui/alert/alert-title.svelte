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
	export { className as class };
</script>

<h5
	class={cn("mb-1 font-medium text-xl leading-none tracking-tight ml-0 flex-row !items-center", className)}
	data-toc-ignore
	{...$$restProps}
>
	{#if warning}
		<MessageCircleWarning />

		<span class="ml-2">
			<slot />
		</span>
	{:else}
		<slot />
	{/if}


</h5>
