<script lang="ts">
	import { User, Tag, ArrowLeft, ArrowRight, CalendarPlus, Scale, CalendarClock } from "lucide-svelte";
	import { getContext } from "svelte"
	import Time from "svelte-time";

	import { truncateString } from "$lib/utils";
	import Metadata from "$lib/components/head/Metadata.svelte"
	import { Separator } from "$lib/components/ui/separator";

	export let authors = ["Unknown"]
	export let tags = ["untagged"]
	export let title = ""
	export let summary = ""

	// Note: mdsvex breaks typescript parsing, we can't specify types nor `import type { ... } from "..."`

	// @ts-expect-error See note in source code
	export let article = undefined
	// @ts-expect-error See note in source code
	export let prev_article = article?.prev_article
	// @ts-expect-error See note in source code
	export let next_article = article?.next_article

	// Whether we're rendering the excerpt embedded in another page.
	let excerptMode = getContext("SHOW_ONLY_EXCERPT")
</script>

<Metadata
	pageTitle={title}
	description={summary}

	{article}
/>

<div
	class={excerptMode ? undefined : "flex flex-col box-border"}
	style={excerptMode ? undefined : "min-height: calc(100vh - (4em + 9px))"}
>
	<header class="grow-0 shrink-0">
		<h1 class="mb-0 font-semibold text-3xl">{title}</h1>
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
	</header>

	<article class="prose dark:prose-invert grow"
	     data-pagefind-body
	>
		<slot />
	</article>

	{#if !excerptMode}
		<footer class="mb-1 w-full sm:w-auto grow-0 shrink-0">
			{#if prev_article || next_article}
				<div class="flex flex-col sm:flex-row sm:justify-center mx-auto sm:space-x-4 left-0 right-0 mb-2">
					{#if prev_article}
						<a
							href="/a/{prev_article.slug}"
							class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 mx-2 mb-4 sm:mr-0 sm:mb-0 sm:w-60"
						>
							<div class="flex flex-row sm:block space-x-2 sm:space-x-0 justify-between">
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
						<div class="rounded-lg border bg-muted text-muted-foreground shadow-sm p-6 mx-2 mb-4 sm:mr-0 sm:mb-0 sm:w-60 cursor-not-allowed">
							<p class="sm:text-lg font-semibold leading-none tracking-tight flex flex-row items-center sm:mb-2 mt-1 sm:mt-0 text-ellipsis whitespace-nowrap">
								<ArrowLeft size="1em" class="mr-2" />
								<span>Back</span>
							</p>
						</div>
					{/if}

					{#if next_article}
						<a
							href="/a/{next_article.slug}"
							class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 mx-2 mb-0 sm:mr-0 sm:w-60"
						>
							<div class="flex flex-row sm:block space-x-2 sm:space-x-0 justify-between">
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
						<div class="rounded-lg border bg-muted text-muted-foreground shadow-sm p-6 mx-2 mb-0 sm:mr-0 sm:w-60 cursor-not-allowed">
							<p class="order-last sm:text-lg font-semibold leading-none tracking-tight justify-end text-right flex flex-row items-center mb-2 mt-1 sm:mt-0 text-ellipsis whitespace-nowrap">
								<span>Next</span>
								<ArrowRight size="1em" class="ml-2" />
							</p>
						</div>
					{/if}
				</div>
			{/if}

				<div class="ml-4 mb-2">
					<Separator class="mb-2 mt-4" />

					{#if article && (article.createdDate)}
						<div class="text-muted-foreground flex flex-row items-center">
							<CalendarPlus size="1rem" class="mr-1" />
							<span class="font-medium mr-1">Created:</span>
							<Time timestamp={article.createdDate} format="MMMM D, YYYY [at] HH:mm [(UTC)]" />
						</div>

						{#if article.modifiedDate && !(article.createdDate === article.modifiedDate)}
							<div class="text-muted-foreground flex flex-row items-center">
								<CalendarClock size="1rem" class="mr-1" />
								<span class="font-medium mr-1">Last edited:</span>
								<Time timestamp={article.modifiedDate} format="MMMM D, YYYY [at] HH:mm [(UTC)]" />
							</div>
						{:else}
							<div class="text-muted-foreground">
								&nbsp;
							</div>
						{/if}
					{:else}
						<div class="text-muted-foreground">
							&nbsp;
						</div>
					{/if}

					<div class="text-muted-foreground flex flex-row items-center">
						<Scale size="1rem" class="mr-1"></Scale>
						<span class="font-medium mr-1">License:</span>
						<a class="underline" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
							Creative Commons BY-NC-SA 4.0
						</a>
					</div>
				</div>
		</footer>
	{/if}
</div>
