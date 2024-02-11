<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";

	import { Sun, Menu, Moon } from "lucide-svelte";
	import { toggleMode } from "mode-watcher";

	import { Drawer } from "vaul-svelte"
	import GitHub from "virtual:icons/simple-icons/github";
	import Navbar from "$lib/components/ui/navbar/index";
	import Sidebar from "$lib/components/ui/sidebar/index";

	let drawer0pen = false;
</script>

<Drawer.Root direction="left" bind:open={drawer0pen}>
	<Drawer.Portal class="fixed left-0 z-20" style="top: calc(-3px + 4rem)">
		<Drawer.Content>
			<div role="presentation"
			     class="bg-background"
			     style="width: 75vw; height: calc(100vh - (4rem + 1px));"
			     on:click|stopPropagation
			>
				<Sidebar.Base />
			</div>
		</Drawer.Content>
	</Drawer.Portal>
</Drawer.Root>

<div role="presentation"
     class="fixed left-0 bg-black/40 dark:bg-white/20 z-10 transition-opacity {drawer0pen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}"
     style="width: 100vw; height: calc(100vh - (4rem + 1px)); top: calc(4rem + 1px)"
     on:click={() => (drawer0pen = false)}
></div>

<div class="border-b">
	<div class="flex justify-between h-16 items-center px-4">
		<!-- Add navigation items -->
		<div class="flex">
			<Button variant="ghost" class="md:hidden" on:click={() => (drawer0pen = !drawer0pen)}>
				<Menu />
			</Button>

			<div class="flex items-center space-x-1 mr-6">
				<Navbar.Link href="/">Moderation Wiki</Navbar.Link>
			</div>
		</div>

		<div class="flex items-center space-x-2">
			<Navbar.IconLink target="_blank" href="https://github.com/cmc-discord/">
				<GitHub />
			</Navbar.IconLink>

			<Button on:click={toggleMode} variant="outline" size="icon">
				<Sun
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>

				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>

				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
	</div>
</div>
