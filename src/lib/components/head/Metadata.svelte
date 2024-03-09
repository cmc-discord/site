<script lang="ts">
	import { page } from "$app/stores";
	import type { Article } from "$lib/types/article";

	export let pageTitle: string;
	export let description: string;

	export let article: Article | undefined = undefined;
	export let image: string | undefined = undefined;
	export let imageAlt: string | undefined = undefined;

	export let type: string | undefined = undefined;

	let fullPageTitle = `Moderation Wiki | ${pageTitle}`;

	let pageType = type
		? type
		: article
			? "article"
			: "website";
</script>

<svelte:head>
	<title>{fullPageTitle}</title>

	<meta property="og:title" content={fullPageTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={pageType} />
	<meta property="og:url" content="https://moderation.wiki${$page.url.pathname}" />

	{#if article}
		{#if article.authors}
			{#each article.authors as author}
				<meta property="og:article:author:username" content={author} />
			{/each}
		{/if}

		{#if article.tags}
			{#each article.tags as tag}
				<meta property="og:article:tag" content={tag} />
			{/each}
		{/if}

		{#if article.createdDate}
			<meta property="og:article:published_time" content={article.createdDate.toISOString()} />
		{/if}

		{#if article.modifiedDate}
			<meta property="og:article:modified_time" content={article.modifiedDate.toISOString()} />
		{/if}
	{/if}

	{#if image}
		<meta property="og:image" content={image} />

		{#if imageAlt}
			<meta property="og:image:alt" content={imageAlt} />
		{/if}
	{/if}
</svelte:head>
