<script lang="ts">
	import { page } from "$app/stores";

	import { Button } from "$lib/components/ui/button";
	import * as Drawer from "$lib/components/ui/drawer";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import * as Tooltip from "$lib/components/ui/tooltip";
	import { Separator } from "$lib/components/ui/separator";

	import Navbar from "$lib/components/ui/navbar/index";
	import Sidebar from "$lib/components/ui/sidebar/index";

	import { X, Menu, Moon, RefreshCw, Search, Sun, ArrowUpCircle } from "lucide-svelte";
	import { setMode } from "mode-watcher";

	import GitHub from "virtual:icons/simple-icons/github";

	let drawer0pen = false;
</script>

<Drawer.Root direction="bottom" bind:open={drawer0pen}>
	<Drawer.Portal>
		<Drawer.Content style="top: 4em;">
			<div role="presentation"
			     class="flex flex-col h-full"
			     style="padding-bottom: 1em;"
			     on:click|stopPropagation
			>
				<div class="flex flex-row justify-between m-2 mt-0 items-center">
					<p class="p-2 ml-2 text-lg font-semibold">Main Menu</p>

					<div class="flex flex-row space-x-2 mr-2">
						<Navbar.IconLink href="/search">
							<Search />
						</Navbar.IconLink>

						<Navbar.IconLink target="_blank" href="https://github.com/cmc-discord/">
							<GitHub />
						</Navbar.IconLink>

						<Drawer.Close
							class="sm:ml-0 p-2 pr-3 mr-2 flex flex-row justify-between space-x-2 rounded border hover:bg-border">
							<X size="1.5em" />
							<span>Close</span>
						</Drawer.Close>
					</div>
				</div>

				<Separator class="mt-2" />

				<Sidebar.Base bind:open={drawer0pen} />
			</div>
		</Drawer.Content>
	</Drawer.Portal>
</Drawer.Root>

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
			<Tooltip.Root>
				<Tooltip.Trigger>
					<Navbar.IconLink hideOnTinyScreens href="/search">
						<Search />
					</Navbar.IconLink>
				</Tooltip.Trigger>

				<Tooltip.Content>
					<p>Search</p>
				</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger>
					<Navbar.IconLink hideOnTinyScreens target="_blank" href="https://github.com/cmc-discord/">
						<GitHub />
					</Navbar.IconLink>
				</Tooltip.Trigger>

				<Tooltip.Content>
					<p>GitHub</p>
				</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger>
					<Button on:click={() => scroll({top: 0})}
					        variant="outline"
					        size="icon"
					        class="font-medium text-lg transition-colors"
					>
						<ArrowUpCircle />
					</Button>
				</Tooltip.Trigger>

				<Tooltip.Content>
					<p>Scroll to top</p>
				</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger>
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
				</Tooltip.Trigger>

				<Tooltip.Content>
					<p>Switch Theme</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</div>
	</div>
</div>
