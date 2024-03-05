<script lang="ts">
	export let authors = ["Unknown"]
	export let tags = ["untagged"]
	export let title = ""
	export let summary = ""

	import { User, Tag } from "lucide-svelte"
</script>

<div class="prose dark:prose-invert"
     data-pagefind-body
>
	<h1 class="mb-0">{title}</h1>
	<h5 class="mb-4">{summary}</h5>

	{#if tags.length > 0 || authors.length > 0}
		<div class="flex flex-row flex-nowrap overflow-x-auto space-x-2 mb-3 pb-2" data-pagefind-ignore>
			{#if authors.length > 0}
				{#each authors as author}
					<a href="/search?authors={author}" class="!decoration-0 !no-underline border rounded-md">
						<div class="flex flex-row text-sm items-center rounded bg-accent text-accent-foreground capitalize p-2">
							<User size="1rem" class="mr-2" /> <span data-pagefind-filter="author">{author}</span>
						</div>
					</a>
				{/each}
			{/if}

			{#if tags.length > 0 }
				{#each tags as tag}
					<a href="/search?tags={tag}" class="!decoration-0 !no-underline border rounded-md">
						<div class="flex flex-row text-sm items-center rounded bg-secondary capitalize p-2">
							<Tag size="1rem" class="mr-2" /> <span data-pagefind-filter="tag">{tag}</span>
						</div>
					</a>
				{/each}
			{/if}
		</div>
	{/if}

	<slot />
</div>
