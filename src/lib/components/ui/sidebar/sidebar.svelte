<script lang="ts">
	import Sidebar from "./"
	import { Home } from "lucide-svelte"
	import { Separator } from "$lib/components/ui/separator";
</script>

<div class="flex flex-col p-2">
	<Sidebar.Link href="/">
		<Home size="1.5rem" slot="icon" />
		Home
	</Sidebar.Link>

	<Separator class="!my-1 !mb-3" />

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
		</svelte:fragment>
	</Sidebar.Link>
</div>
