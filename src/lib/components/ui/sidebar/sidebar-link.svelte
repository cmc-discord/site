<script lang="ts">
	import { Button } from "$lib/components/ui/button";

	export let emphasis: boolean = false;

	export let href: string;
</script>

<Button variant={emphasis ? "secondary" : "ghost"} class="w-full self-start justify-start">
	<a href={href}
	   class="font-medium text-left transition-colors"
	>
		<slot />
	</a>
</Button>

<div class="flex flex-col space-y-1 pl-3">
	<slot name="children"></slot>
</div>
