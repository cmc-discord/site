<script lang="ts">
	import { Button } from "$lib/components/ui/button";

	export let emphasis: boolean = false;
	export let disabled: boolean = false;

	export let href: string;
	export let open: boolean = false;
</script>

<Button {href}
        variant={emphasis ? "secondary" : "ghost"}
        class="font-medium text-left transition-colors flex flex-row items-center content-center w-full self-start justify-start {disabled ? 'text-muted-foreground pointer-events-none' : ''}"
        on:click={() => open = false}
>
	<span class="sidebar-link-icon"><slot name="icon"></slot></span>
	<span><slot /></span>
</Button>

<style>
	.sidebar-link-icon {
		margin-right: 0.7rem;
	}

	.sidebar-link-icon:empty {
		margin-right: 0;
	}
</style>
