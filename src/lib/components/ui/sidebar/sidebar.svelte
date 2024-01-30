<script lang="ts">
	import Sidebar from "./"
</script>

<div class="flex flex-col space-y-1 p-2">
	<Sidebar.Link href="/">
		Home
	</Sidebar.Link>

	<Sidebar.Link href="/">
		Home
	</Sidebar.Link>

	<Sidebar.Link href="/">
		Home

		<div slot="children">
			<Sidebar.Link href="/">
				Home
			</Sidebar.Link>
		</div>
	</Sidebar.Link>
</div>
