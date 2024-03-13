<script lang="ts">

import Metadata from "$lib/components/head/Metadata.svelte";
</script>

<Metadata
	pageTitle="Home"
	description="Welcome to the Moderation Wiki!"
/>

<div class="mb-4">
	<h1 class="mb-0 font-semibold text-3xl">Moderation Wiki</h1>
	<h5 class="text-muted-foreground">By the Community Management Community</h5>
</div>

<section>
	<p>
		Welcome to the Moderation Wiki!
	</p>

	<p class="mb-4">
		This website aims to be a one-stop shop for anyone who helps to maintain a community space, whether their focus
		is on community management, moderation, or advising other members of their staff team.
	</p>

	<p>
		<span class="font-semibold">Note:</span> The site is under heavy development, and isn't ready for use just yet.
		If you're interested in what we're working on, please keep an eye on the site — we'll be updating it as we go!
	</p>
</section>

<section class="mt-4">
	<h2 class="font-semibold text-2xl">Sponsors</h2>

	<p class="mb-4">
		We'd like to thank the following organisations for sponsoring us.
	</p>

	<div class="flex flex-row flex-wrap items-center content-center justify-around">
		<a href="https://sentry.io" style="height: 6em;" class="rounded-lg m-2 bg-accent">
			<img style="height: 6em;" class="p-2" src="/sponsors/sentry.svg" alt="Wordmark logo for Sentry.io" />
		</a>
	</div>
</section>
