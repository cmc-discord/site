<script lang="ts">
	import { Button } from "$lib/components/ui/button";

	export let emphasis: boolean = false;

	export let href: string;
</script>

<Button variant={emphasis ? "secondary" : "ghost"}>
	<a href={href}
	   class="font-medium text-lg transition-colors"
	>
		<slot />
	</a>
</Button>
