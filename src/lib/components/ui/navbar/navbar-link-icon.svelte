<script lang="ts">
	import { Button } from "$lib/components/ui/button";

	export let emphasis: boolean = false;

	export let href: string;
	export let target: string = "_self"
	export let hideOnTinyScreens: boolean = false
</script>

<Button {href} {target}
	variant={emphasis ? "secondary" : "ghost"}
	size="icon"
	class="font-medium text-lg transition-colors {hideOnTinyScreens ? 'hidden sm:flex' : 'sm:hidden'}"
>
		<slot />
</Button>
