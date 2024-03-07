<script lang="ts">
	import type { Props } from "./";

	export let orientation: Props["orientation"] = "horizontal"
</script>

<div class="flex items-center my-3 divider divider-{orientation}">
	<span class="divider-start"></span>
	<span class="text-muted-foreground"><slot /></span>
	<span class="divider-end"></span>
</div>

