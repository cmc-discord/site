<script lang="ts">
	import Sidebar from "./"
	import { Separator } from "$lib/components/ui/separator";
	import { Home, MoreHorizontal, Tag, Wrench } from "lucide-svelte";
</script>

<div class="flex flex-col p-2 mt-1 overflow-y-auto h-full">
	<Sidebar.SectionPickerItem href="/">
		<Home size="1.5rem" slot="icon" />

		Home
	</Sidebar.SectionPickerItem>

	<Sidebar.SectionPickerItem href="/tags">
		<Tag size="1.5rem" slot="icon" />

		All Tags
	</Sidebar.SectionPickerItem>

	<!-- TODO: Make some tools!
	<Sidebar.SectionPickerItem href="#" disabled>
		<Wrench size="1.5rem" slot="icon" />

		Tools
	</Sidebar.SectionPickerItem>
	-->

	<Sidebar.SectionPickerItem href="#" disabled>
		<MoreHorizontal size="1.5rem" slot="icon" />

		Coming Soon...
	</Sidebar.SectionPickerItem>

	<Separator class="!my-3" />

	<slot name="content"/>

	<Sidebar.Link href="#" disabled>
		Coming Soon...
	</Sidebar.Link>

	<!-- TODO: We have no content to put here yet.
	<Sidebar.Link href="#" disabled>
		Content 1
	</Sidebar.Link>

	<Sidebar.Link href="#" disabled>
		Content 2

		<svelte:fragment slot="children">
			<Sidebar.Link href="#" disabled>
				Content 3
			</Sidebar.Link>

			<Sidebar.Link href="#" disabled>
				Content 4

				<svelte:fragment slot="children">
					<Sidebar.Link href="#" disabled>
						Content 5
					</Sidebar.Link>

					<Sidebar.Link href="#" disabled>
						Content 6
					</Sidebar.Link>
				</svelte:fragment>
			</Sidebar.Link>

			<Sidebar.Link href="#" disabled>
				Content 7
			</Sidebar.Link>
		</svelte:fragment>
	</Sidebar.Link>

	<Sidebar.Link href="#" disabled>
		Content 8
	</Sidebar.Link>
	-->
</div>
