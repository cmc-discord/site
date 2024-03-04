<script lang="ts">
	import { Button } from "$lib/components/ui/button";

	export let emphasis: boolean = false;
	export let disabled: boolean = false;

	export let href: string;
</script>

<Button {href}
	variant={emphasis ? "secondary" : "ghost"}
	class="font-medium text-left transition-colors flex flex-row items-center content-center w-full self-start justify-start {disabled ? 'text-muted-foreground pointer-events-none' : ''}">
	<span class="sidebar-link-icon"><slot name="icon"></slot></span>
	<span><slot /></span>
</Button>

<div class="flex flex-col pl-3 sidebar-children">
	<slot name="children"></slot>
</div>

