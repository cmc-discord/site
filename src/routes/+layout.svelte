<script lang="ts">
	import "../app.pcss";

	import * as Tooltip from "$lib/components/ui/tooltip";

	import { ModeWatcher } from "mode-watcher";
	import Containers from "$lib/components/ui/containers";
	import Navbar from "$lib/components/ui/navbar";
	import Sidebar from "$lib/components/ui/sidebar"
	import { ArrowUp } from "lucide-svelte";
</script>

<div class="fixed right-10 bottom-10">
	<Tooltip.Root>
		<Tooltip.Trigger>
			<button on:click={() => scroll({top: 0})}
			        class="rounded-full bg-background cursor-pointer w-10 h-10 border-2"
			>
				<ArrowUp class="m-auto" />
			</button>
		</Tooltip.Trigger>
		<Tooltip.Content side="top" align="center">
			<p>Scroll to top</p>
		</Tooltip.Content>
	</Tooltip.Root>
</div>




<Navbar.Base />
<ModeWatcher />

<Containers.Sidebar>
	<Sidebar.Base slot="sidebar"></Sidebar.Base>

	<!-- class="prose dark:prose-invert" -->
	<div>
		<slot></slot>
	</div>
</Containers.Sidebar>
