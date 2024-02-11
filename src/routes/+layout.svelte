<script lang="ts">
	import "../app.pcss";

	import { ModeWatcher } from "mode-watcher";
	import Containers from "$lib/components/ui/containers";
	import Navbar from "$lib/components/ui/navbar";
	import Sidebar from "$lib/components/ui/sidebar"
</script>

<Navbar.Base />
<ModeWatcher />

<Containers.Sidebar>
	<Sidebar.Base slot="sidebar"></Sidebar.Base>

<!-- class="prose dark:prose-invert" -->
	<div data-pagefind-body>
		<slot></slot>
	</div>
</Containers.Sidebar>
