<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu"
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";

	import { Menu, Moon, RefreshCw, Search, Sun, } from "lucide-svelte";
	import { setMode } from "mode-watcher";

	import { Drawer } from "vaul-svelte"
	import GitHub from "virtual:icons/simple-icons/github";
	import Navbar from "$lib/components/ui/navbar/index";
	import Sidebar from "$lib/components/ui/sidebar/index";

	let drawer0pen = false;
</script>

<Drawer.Root dismissible={false} direction="left" bind:open={drawer0pen} preventScroll={true}>
	<Drawer.Portal class="fixed left-0 z-20 h-full" style="top: calc(-4px + 4rem)">
		<Drawer.Content>
			<!--
				TODO: This menu is not scrollable on mobile, but it is on desktop
							for some reason. Needs investigation.
			-->
			<div role="presentation"
			     class="bg-background flex flex-col h-full"
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

<div class="border-b sticky top-0 bg-background z-50">
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
			<Navbar.IconLink href="/search">
				<Search />
			</Navbar.IconLink>

			<Navbar.IconLink target="_blank" href="https://github.com/cmc-discord/">
				<GitHub />
			</Navbar.IconLink>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button builders={[builder]} variant="outline" size="icon">
						<Sun
							class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
						/>

						<Moon
							class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
						/>

						<span class="sr-only">Change theme</span>
					</Button>
				</DropdownMenu.Trigger>

				<DropdownMenu.Content align="end">
					<DropdownMenu.Item class="cursor-pointer" on:click={() => setMode("light")}>
						<Sun class="mr-2 h-[1.2rem] w-[1.2rem]" />

						Light
					</DropdownMenu.Item>

					<DropdownMenu.Item class="cursor-pointer" on:click={() => setMode("dark")}>
						<Moon class="mr-2 h-[1.2rem] w-[1.2rem]" />

						Dark
					</DropdownMenu.Item>

					<DropdownMenu.Item class="cursor-pointer" on:click={() => setMode("system")}>
						<RefreshCw class="mr-2 h-[1.2rem] w-[1.2rem]" />

						System
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</div>
