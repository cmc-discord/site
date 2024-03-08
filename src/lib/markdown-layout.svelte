<script lang="ts">
	import { truncateString } from "$lib/utils";

	export let authors = ["Unknown"]
	export let tags = ["untagged"]
	export let title = ""
	export let summary = ""

	export let prev_article = undefined
	export let next_article = undefined

	import { User, Tag, ArrowLeft, ArrowRight } from "lucide-svelte";
</script>

<article class="prose dark:prose-invert"
     data-pagefind-body
>
	<h1 class="mb-0 font-semibold">{title}</h1>
	<h5 class="mb-4 text-muted-foreground">{summary}</h5>

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
</article>

{#if prev_article || next_article}
	<div class="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 absolute bottom-0 left-0 right-0 mb-1 sm:mb-4 md:ml-[17em] w-full sm:w-auto">
		{#if prev_article}
			<a
				href="/a/{prev_article.slug}"
				class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 mx-2 mb-2 sm:mr-0 sm:mb-0 sm:w-60"
			>
				<div class="flex flex-row sm:block space-x-2 justify-between">
					<p class="sm:text-lg font-semibold leading-none tracking-tight flex flex-row items-center sm:mb-2 mt-1 sm:mt-0 text-ellipsis whitespace-nowrap">
						<ArrowLeft size="1em" class="mr-2" />
						<span>Back</span>
					</p>

					<div class="flex flex-col sm:block items-end">
						<div class="font-semibold text-muted-foreground overflow-y-hidden">
							{prev_article.title}
						</div>

						<div class="text-sm text-muted-foreground sm:h-10 overflow-y-hidden">
							{truncateString(prev_article.summary)}
						</div>
					</div>
				</div>
			</a>
		{:else}
			<div class="w-52">&nbsp;</div>
		{/if}

		{#if next_article}
			<a
				href="/a/{next_article.slug}"
				class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 mx-2 mb-2 sm:mr-0 sm:mb-0 sm:w-60"
			>
				<div class="flex flex-row sm:block space-x-2 justify-between">
					<p class="order-last sm:text-lg font-semibold leading-none tracking-tight justify-end text-right flex flex-row items-center mb-2 mt-1 sm:mt-0 text-ellipsis whitespace-nowrap">
						<span>Next</span>
						<ArrowRight size="1em" class="ml-2" />
					</p>

					<div class="flex flex-col sm:block items-start">
						<div class="font-semibold sm:text-right text-muted-foreground overflow-y-hidden">
							{next_article.title}
						</div>

						<div class="text-sm sm:text-right text-muted-foreground sm:h-10 overflow-y-hidden">
							{truncateString(next_article.summary)}
						</div>
					</div>
				</div>
			</a>
		{:else}
			<div class="w-52">&nbsp;</div>
		{/if}
	</div>
{/if}
