<script lang="ts">
	import "../app.pcss";

	import { page } from "$app/stores";
	import { afterNavigate } from "$app/navigation";

	import Containers from "$lib/components/ui/containers";
	import Navbar from "$lib/components/ui/navbar";
	import Sidebar from "$lib/components/ui/sidebar";

	import { type RichNavigationListWithPrefix } from "$lib/data";

	import * as TocStore from "$lib/stores/tocStore";
	import * as NavigationStore from "$lib/stores/navigationStore";
	import type { Heading } from "$lib/stores/tocStore";

	import { ModeWatcher } from "mode-watcher";

	let mainElement: HTMLElement | undefined;
	let excerptMode: boolean = false;
	let path: string = ""

	$: excerptMode = !path.startsWith("/a/");

	page.subscribe((it) => {
		path = it.url.pathname
	});

	async function getNavigationTree() {
		const response = await fetch(`/api/navigation${path}.json`)
		const data: RichNavigationListWithPrefix | null = await response.json()

		console.log(data)

		NavigationStore.set(data)
	}

	function getPageHeaders() {
		if (!mainElement) {
			return;
		}

		const headings: Heading[] = [];

		const elements = excerptMode
			? mainElement.querySelectorAll("h1")
			: mainElement.querySelectorAll("h2, h3, h4, h5, h6");

		let previous: Heading | undefined;

		elements.forEach((e) => {
			if (e.hasAttribute("data-toc-ignore")) {
				return;
			}

			const elem = e as HTMLHeadElement;
			const id = elem.id || elem.firstChild?.textContent?.trim()
				?.replaceAll(/[^a-zA-Z0-9 ]/g, "")
				?.replaceAll(" ", "-")
				?.toLowerCase() || "";

			const current: Heading = {
				children: [],
				level: parseInt(e.tagName.substring(1)),
				id: id,
				title: elem.firstChild?.textContent?.trim() || "",
			};

			if (previous) {
				if (current.level > previous.level) {
					// Child
					current.parent = previous;
					previous.children.push(current);
				} else if (current.level == previous.level) {
					// Sibling
					if (previous.parent) {
						previous = previous.parent;
						current.parent = previous;
						previous.children.push(current);
					}
				} else {
					// Sibling further up
					while (current.level != previous.level) {
						if (!previous.parent) {
							// We're at the top
							break;
						}

						previous = previous.parent;
					}

					if (previous.parent) {
						// current level == previous level; store on parent as sibling
						previous = previous.parent;
						current.parent = previous;
						previous.children.push(current);
					} else {
						// current level == previous level; we're at the top, do nothing
					}
				}
			}

			if ((excerptMode && current.level == 1) || current.level == 2) {
				headings.push(current);
			}

			previous = current;
		});

		TocStore.set(headings);
	}

	/**
	 * Inspired by Skeleton.
	 * https://github.com/skeletonlabs/skeleton/blob/dev/packages/skeleton/src/lib/utilities/TableOfContents/crawler.ts
	 */
	afterNavigate(async () => {
		await getNavigationTree()
		getPageHeaders()
	});
</script>

<Navbar.Base />
<ModeWatcher />
<Containers.Sidebar>
	<Sidebar.Base slot="sidebar"></Sidebar.Base>

	<!-- class="prose dark:prose-invert" -->
	<main bind:this={mainElement}>
		<slot></slot>
	</main>
</Containers.Sidebar>
