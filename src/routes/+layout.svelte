<script lang="ts">
	import "../app.pcss";

	import { afterNavigate } from "$app/navigation";

	import Containers from "$lib/components/ui/containers";
	import Navbar from "$lib/components/ui/navbar";
	import Sidebar from "$lib/components/ui/sidebar"
	import * as Tooltip from "$lib/components/ui/tooltip";

	import * as TocStore from "$lib/stores/tocStore"
	import type { Heading } from "$lib/stores/tocStore";

	import { ModeWatcher } from "mode-watcher";
	import { ArrowUp } from "lucide-svelte";
	import { getContext } from "svelte";

	let mainElement: HTMLElement | undefined;

	/**
	 * Inspired by Skeleton.
	 * https://github.com/skeletonlabs/skeleton/blob/dev/packages/skeleton/src/lib/utilities/TableOfContents/crawler.ts
	 */
	afterNavigate(() => {
		if (!mainElement) {
			return
		}

		// Whether we're rendering the excerpt embedded in another page.
		const excerptMode = getContext("SHOW_ONLY_EXCERPT")
		const headings: Heading[] = []

		const elements = excerptMode
			? mainElement.querySelectorAll("h2, h3, h4, h5, h6")
			: mainElement.querySelectorAll("h1")

		let previous: Heading | undefined

		elements.forEach((e) => {
			if (e.hasAttribute("data-toc-ignore")) {
				return;
			}

			const elem = e as HTMLHeadElement
			const id = elem.id || elem.firstChild?.textContent?.trim()
				?.replaceAll(/[^a-zA-Z0-9 ]/g, "")
				?.replaceAll(" ", "-")
				?.toLowerCase() || "";

			const current: Heading = {
				children: [],
				level: parseInt(e.tagName.substring(1)),
				id: id,
				title: elem.firstChild?.textContent?.trim() || "",
			}

			if (previous) {
				if (current.level > previous.level) {
					// Child
					current.parent = previous
					previous.children.push(current)
				} else if (current.level == previous.level) {
					// Sibling
					if (previous.parent) {
						previous = previous.parent
						current.parent = previous
						previous.children.push(current)
					}
				} else {
					// Sibling further up
					while (current.level != previous.level) {
						if (!previous.parent) {
							// We're at the top
							break;
						}

						previous = previous.parent
					}

					if (previous.parent) {
						// current level == previous level; store on parent as sibling
						previous = previous.parent
						current.parent = previous
						previous.children.push(current)
					} else {
						// current level == previous level; we're at the top, do nothing
					}
				}
			}

			if (current.level == 2) {
				headings.push(current)
			}

			previous = current
		})

		TocStore.set(headings)
	})
</script>

<div class="fixed right-4 top-20 z-50">
	<Tooltip.Root>
		<Tooltip.Trigger>
			<button on:click={() => scroll({top: 0})}
			        class="rounded-full bg-background cursor-pointer w-10 h-10 border-2"
			>
				<ArrowUp class="m-auto" />
			</button>
		</Tooltip.Trigger>

		<Tooltip.Content side="left" align="center">
			<p>Scroll to top</p>
		</Tooltip.Content>
	</Tooltip.Root>
</div>

<Navbar.Base />
<ModeWatcher />

<Containers.Sidebar>
	<Sidebar.Base slot="sidebar"></Sidebar.Base>

	<!-- class="prose dark:prose-invert" -->
	<main bind:this={mainElement}>
		<slot></slot>
	</main>
</Containers.Sidebar>
