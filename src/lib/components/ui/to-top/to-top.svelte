<script lang="ts">
	import { page }  from "$app/stores"
	import * as Tooltip from "$lib/components/ui/tooltip";

	import { ArrowLeftCircle, ArrowRightCircle, ArrowUpCircle } from "lucide-svelte";

	export let prev: string | undefined = undefined;
	export let prevText: string | undefined = undefined;
	export let next: string | undefined = undefined;
	export let nextText: string | undefined = undefined;
</script>

<div class="fixed right-4 top-20 z-50 rounded-full p-2 border flex flex-row space-x-1 bg-background">
	{#if prev}
		<Tooltip.Root>
			<Tooltip.Trigger>
				<a href={prev}>
					<ArrowLeftCircle
						class="text-muted-foreground bg-background rounded-full"
						size="2.4em"
					/>
				</a>
			</Tooltip.Trigger>

			<Tooltip.Content side="bottom" align="center">
				<p>{prevText ? `Back: ${prevText}` : "Previous Article"}</p>
			</Tooltip.Content>
		</Tooltip.Root>
	{/if}

	{#if next}
		<Tooltip.Root>
			<Tooltip.Trigger>
				<a href={next}>
					<ArrowRightCircle
						class="text-muted-foreground bg-background rounded-full"
						size="2.4em"
					/>
				</a>
			</Tooltip.Trigger>

			<Tooltip.Content side="bottom" align="center">
				<p>{nextText ? `Next: ${nextText}` : "Next Article"}</p>
			</Tooltip.Content>
		</Tooltip.Root>
	{/if}

	{#if prev || next}
		<div style="height: 2.4em;" class="border-l border-2 rounded-full"></div>
	{/if}

	<Tooltip.Root>
		<Tooltip.Trigger>
			<a on:click|preventDefault={() => scroll({top: 0})}
			   href={$page.url.pathname}
			>
				<ArrowUpCircle
					class="text-muted-foreground bg-background rounded-full"
					size="2.4em"
				/>
			</a>
		</Tooltip.Trigger>

		<Tooltip.Content side="bottom" align="center">
			<p>Scroll to top</p>
		</Tooltip.Content>
	</Tooltip.Root>
</div>
