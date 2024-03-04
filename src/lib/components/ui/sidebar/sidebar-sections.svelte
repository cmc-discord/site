<script lang="ts">
	import Sidebar from "./"

	import { Button } from "$lib/components/ui/button";
	import { ChevronRight, Home, Tag, Wrench } from "lucide-svelte";
	import { Separator } from "$lib/components/ui/separator";

	let open = false;

	function toggleSections() {
		open = !open;
	}
</script>

<div class="w-full flex flex-col font-medium text-left section-picker transition-all space-y-2 {open ? 'open' : ''}">
	<Button variant="ghost" class="flex flex-row items-center content-center justify-start section-picker-top"
	        on:click={toggleSections}
	>
		<span class="section-picker-arrow">
			<ChevronRight size="1.5rem" />
		</span>

		<span>Sections</span>
	</Button>

	<Separator class="!mb-1 !mt-3 transition-all" />

	<Sidebar.SectionPickerItem href="/">
		<Home size="1.5rem" slot="icon" />

		Home
	</Sidebar.SectionPickerItem>

	<Sidebar.SectionPickerItem href="/">
		<Wrench size="1.5rem" slot="icon" />

		Tools
	</Sidebar.SectionPickerItem>

	<Sidebar.SectionPickerItem href="/tags">
		<Tag size="1.5rem" slot="icon" />

		All Tags
	</Sidebar.SectionPickerItem>
</div>

<Separator class="!my-3" />
