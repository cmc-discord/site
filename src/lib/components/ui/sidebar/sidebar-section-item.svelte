<script lang="ts">
	import { Button } from "$lib/components/ui/button";

	export let emphasis: boolean = false;

	export let href: string;
</script>

<a href={href}
   class="font-medium text-left transition-colors flex flex-row items-center content-center"
>
	<Button variant={emphasis ? "secondary" : "ghost"} class="w-full self-start justify-start">
		<span class="sidebar-link-icon"><slot name="icon"></slot></span>
		<span><slot /></span>
	</Button>
</a>

<style>
	.sidebar-link-icon {
		margin-right: 0.7rem;
	}

	.sidebar-link-icon:empty {
		margin-right: 0;
	}
</style>
