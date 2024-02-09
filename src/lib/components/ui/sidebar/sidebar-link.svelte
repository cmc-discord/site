<script lang="ts">
	import { Button } from "$lib/components/ui/button";

	export let emphasis: boolean = false;

	export let href: string;
</script>

<Button variant={emphasis ? "secondary" : "ghost"} class="w-full self-start justify-start">
	<a href={href}
	   class="font-medium text-left transition-colors flex flex-row items-center content-center"
	>
		<span class="sidebar-link-icon"><slot name="icon"></slot></span>
		<span><slot /></span>
	</a>
</Button>

<div class="flex flex-col pl-3 sidebar-children">
	<slot name="children"></slot>
</div>

<style>
	.sidebar-children {
	  margin-top: 8px;
	}

	.sidebar-link-icon {
		margin-right: 0.7rem;
	}

	.sidebar-link-icon:empty {
		margin-right: 0;
	}
</style>
