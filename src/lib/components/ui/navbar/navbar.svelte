<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";

	import { Sun, Menu, Moon } from "lucide-svelte";
	import { toggleMode } from "mode-watcher";

	import GitHub from "virtual:icons/simple-icons/github";
	import Navbar from "$lib/components/ui/navbar/index";
</script>

<div class="border-b">
	<div class="flex justify-between h-16 items-center px-4">
		<!-- Add navigation items -->
		<div class="flex">
			<Button variant="ghost" class="md:hidden">
				<Menu />
			</Button>

			<div class="flex items-center space-x-1 mr-6 invisible md:visible">
				<Navbar.Link href="/">Home</Navbar.Link>
			</div>
		</div>

		<div class="flex items-center space-x-1">
			<Navbar.IconLink href="https://github.com/cmc-discord/">
				<GitHub />
			</Navbar.IconLink>

			<Separator orientation="vertical" class="h-7 !mr-2 !ml-1" />

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
