<script lang="ts">
import * as Tooltip from "$lib/components/ui/tooltip";

import { ArrowUp } from "lucide-svelte";
</script>

<div class="fixed right-4 top-20 z-50">
	<Tooltip.Root>
		<Tooltip.Trigger>
			<button on:click={() => scroll({top: 0})}
			        class="rounded-full bg-background cursor-pointer w-10 h-10 border-2"
			>
				<ArrowUp class="m-auto" />
			</button>
		</Tooltip.Trigger>

		<Tooltip.Content side="left" align="center">
			<p>Scroll to top</p>
		</Tooltip.Content>
	</Tooltip.Root>
</div>
