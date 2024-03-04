<script lang="ts">
	import Sidebar from "./"
	import { Separator } from "$lib/components/ui/separator";
	import { Home, Tag, Wrench } from "lucide-svelte";
</script>

<div class="flex flex-col p-2 mt-1 overflow-y-auto h-full">
	<Sidebar.SectionPickerItem href="/">
		<Home size="1.5rem" slot="icon" />

		Home
	</Sidebar.SectionPickerItem>

	<Sidebar.SectionPickerItem href="#">
		<Wrench size="1.5rem" slot="icon" />

		Tools
	</Sidebar.SectionPickerItem>

	<Sidebar.SectionPickerItem href="/tags">
		<Tag size="1.5rem" slot="icon" />

		All Tags
	</Sidebar.SectionPickerItem>

	<Separator class="!my-3" />

	<slot name="content"/>

	<Sidebar.Link href="#">
		Content 1
	</Sidebar.Link>

	<Sidebar.Link href="#">
		Content 2

		<svelte:fragment slot="children">
			<Sidebar.Link href="#">
				Content 3
			</Sidebar.Link>

			<Sidebar.Link href="#">
				Content 4

				<svelte:fragment slot="children">
					<Sidebar.Link href="#">
						Content 5
					</Sidebar.Link>

					<Sidebar.Link href="#">
						Content 6
					</Sidebar.Link>
				</svelte:fragment>
			</Sidebar.Link>

			<Sidebar.Link href="#">
				Content 7
			</Sidebar.Link>
		</svelte:fragment>
	</Sidebar.Link>

	<Sidebar.Link href="#">
		Content 8
	</Sidebar.Link>
</div>
