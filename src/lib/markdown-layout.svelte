<script lang="ts">
	/* eslint-disable no-import-assign */

	import { User, Tag, ArrowLeft, ArrowRight, CalendarPlus, Scale, CalendarClock } from "lucide-svelte";
	import { getContext } from "svelte";
	import Time from "svelte-time";
	import twemoji from "twemoji";

	import { page } from "$app/stores";
	import { afterNavigate } from "$app/navigation";

	import { truncateString } from "$lib/utils";

	import Metadata from "$lib/components/head/Metadata.svelte";
	import { Separator } from "$lib/components/ui/separator";

	export let authors = ["Unknown"];
	export let tags = ["untagged"];
	export let title = "";
	export let summary = "";

	// Note: mdsvex breaks typescript parsing, we can't specify types nor `import type { ... } from "..."`

	// @ts-expect-error See note in source code
	export let article = undefined;
	// @ts-expect-error See note in source code
	export let prev_article = article?.prev_article;
	// @ts-expect-error See note in source code
	export let next_article = article?.next_article;

	// Whether we're rendering the excerpt embedded in another page.
	let excerptMode = getContext("SHOW_ONLY_EXCERPT");

	let mainElement;
	let usePagefind = excerptMode ? undefined : true;

	afterNavigate(() => {
		twemoji.parse(mainElement, {
			ext: ".svg",
			folder: "svg",
			className: "emoji",
			size: "1em",
		});
	});
</script>

{#if !excerptMode}
	<a href="/api/navigation{$page.url.pathname}.json" class="hidden" data-pagefind-ignore>
		<!-- Included because Svelte won't generate API JSON files otherwise. -->
	</a>

	<Metadata
		pageTitle={title}
		description={summary}

		{article}
	/>

	<div class="my-1 w-full sm:w-auto">
		{#if prev_article || next_article}
			<div class="block mx-auto left-0 right-0 mb-2 sm:mb-0 sm:space-x-4 sm:flex sm:flex-row sm:justify-center sm:items-start">
				{#if prev_article}
					<a
						href="/a/{prev_article.slug}"

						class="flex flex-row justify-start items-center shrink space-x-2
									 py-2 px-4 mx-auto mb-4 w-full
									 bg-card text-card-foreground text-lg font-semibold whitespace-nowrap
									 border rounded-lg shadow-sm
									 sm:mb-2 sm:w-1/2 sm:mx-2
									 max-w-80"
					>
						<ArrowLeft size="1em" class="mr-2" />
						<span class="text-muted-foreground">{prev_article.title}</span>
					</a>
				{:else}
					<div
						class="flex flex-row justify-start items-center shrink space-x-2
									 py-2 px-4 mx-auto mb-4 w-full
									 bg-card text-card-foreground text-lg font-semibold
									 border rounded-lg shadow-sm
									 sm:mb-2 sm:w-1/2 sm:mx-2
									 max-w-80
									 pointer-events-none cursor-not-allowed"
					>
						<ArrowLeft size="1em" class="mr-2" />
						<span class="text-muted-foreground">Back</span>
					</div>
				{/if}

				{#if next_article}
					<a
						href="/a/{next_article.slug}"
						class="flex flex-row justify-end items-center shrink space-x-2
									 py-2 px-4 mx-auto mb-0 w-full
									 bg-card text-card-foreground text-lg font-semibold
									 border rounded-lg shadow-sm
									 sm:mb-2 sm:w-1/2 sm:mx-2
									 max-w-80"
					>
						<span class="text-muted-foreground">{next_article.title}</span>
						<ArrowRight size="1em" class="ml-2" />
					</a>
				{:else}
					<div
						class="flex flex-row justify-end items-center shrink space-x-2
									 py-2 px-4 mx-auto mb-0 w-full
									 bg-card text-card-foreground text-lg font-semibold
									 border rounded-lg shadow-sm
									 sm:mb-2 sm:w-1/2 sm:mx-2
									 max-w-80
									 pointer-events-none cursor-not-allowed"
					>
						<span>Next</span>
						<ArrowRight size="1em" class="ml-2" />
					</div>
				{/if}
			</div>
		{/if}
	</div>
{/if}

<div
	class={excerptMode ? undefined : "flex flex-col box-border"}
	style={excerptMode ? undefined : "min-height: calc(100vh - (4em + 9px))"}
	bind:this={mainElement}
>
	<header class="grow-0 shrink-0">
		<h1 class="mb-0 font-semibold text-3xl">{title}</h1>
		<h5 class="mb-4 text-muted-foreground" data-toc-ignore>{summary}</h5>

		{#if tags.length > 0 || authors.length > 0}
			<div class="flex flex-row flex-nowrap overflow-x-auto space-x-2 mb-3 pb-2" data-pagefind-ignore>
				{#if authors.length > 0}
					{#each authors as author}
						<a href="/search?authors={author}" class="!decoration-0 !no-underline border rounded-md">
							<div class="flex flex-row text-sm items-center rounded bg-accent text-accent-foreground capitalize p-2 whitespace-nowrap">
								<User size="1rem" class="mr-2" />

								{#if excerptMode}
									<span data-pagefind-ignore>{author}</span>
								{:else}
									<span data-pagefind-filter="author">{author}</span>
								{/if}
							</div>
						</a>
					{/each}
				{/if}

				{#if tags.length > 0 }
					{#each tags as tag}
						<a href="/t/{tag}" class="!decoration-0 !no-underline border rounded-md">
							<div class="flex flex-row text-sm items-center rounded bg-secondary capitalize p-2 whitespace-nowrap">
								<Tag size="1rem" class="mr-2" />

								{#if excerptMode}
									<span data-pagefind-ignore>{tag}</span>
								{:else}
									<span data-pagefind-filter="tag">{tag}</span>
								{/if}
							</div>
						</a>
					{/each}
				{/if}
			</div>
		{/if}
	</header>

	<article class="prose dark:prose-invert grow"
	         data-pagefind-body={usePagefind}
	>
		<slot />
	</article>

	{#if !excerptMode}
		<div class="mb-1 mt-4 w-full sm:w-auto grow-0 shrink-0">
			{#if prev_article || next_article}
				<div class="block mx-auto left-0 right-0 mb-2 sm:mb-0 sm:space-x-4 sm:flex sm:flex-row sm:justify-center sm:items-start">
					{#if prev_article}
						<a
							href="/a/{prev_article.slug}"

							class="flex flex-row justify-start items-center shrink space-x-2
										 py-2 px-4 mx-auto mb-4 w-full
										 bg-card text-card-foreground text-lg font-semibold whitespace-nowrap
										 border rounded-lg shadow-sm
										 sm:mb-2 sm:w-1/2 sm:mx-2
										 max-w-80"
						>
							<ArrowLeft size="1em" class="mr-2" />
							<span class="text-muted-foreground">{prev_article.title}</span>
						</a>
					{:else}
						<div
							class="flex flex-row justify-start items-center shrink space-x-2
										 py-2 px-4 mx-auto mb-4 w-full
										 bg-card text-card-foreground text-lg font-semibold
										 border rounded-lg shadow-sm
										 sm:mb-2 sm:w-1/2 sm:mx-2
										 max-w-80
										 pointer-events-none cursor-not-allowed"
						>
							<ArrowLeft size="1em" class="mr-2" />
							<span class="text-muted-foreground">Back</span>
						</div>
					{/if}

					{#if next_article}
						<a
							href="/a/{next_article.slug}"
							class="flex flex-row justify-end items-center shrink space-x-2
										 py-2 px-4 mx-auto mb-0 w-full
										 bg-card text-card-foreground text-lg font-semibold
										 border rounded-lg shadow-sm
										 sm:mb-2 sm:w-1/2 sm:mx-2
										 max-w-80"
						>
							<span class="text-muted-foreground">{next_article.title}</span>
							<ArrowRight size="1em" class="ml-2" />
						</a>
					{:else}
						<div
							class="flex flex-row justify-end items-center shrink space-x-2
										 py-2 px-4 mx-auto mb-0 w-full
										 bg-card text-card-foreground text-lg font-semibold
										 border rounded-lg shadow-sm
										 sm:mb-2 sm:w-1/2 sm:mx-2
										 max-w-80
										 pointer-events-none cursor-not-allowed"
						>
							<span>Next</span>
							<ArrowRight size="1em" class="ml-2" />
						</div>
					{/if}
				</div>
			{/if}

			<div class="ml-4 mb-2">
				<Separator class="mb-2 mt-4 sm:mt-2" />

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
		</div>
	{/if}
</div>
