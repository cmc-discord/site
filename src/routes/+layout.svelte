<script>
	import "../app.pcss";

	import { ModeWatcher } from "mode-watcher";
	import Navbar from "$lib/components/ui/navbar/index";
</script>

<ModeWatcher />
<Navbar.Base />

<slot></slot>
