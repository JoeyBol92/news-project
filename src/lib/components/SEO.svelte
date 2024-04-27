<script>
	export let title = undefined;
	export let description = undefined;
	export let canonical = undefined;
	export let noindex = undefined;
</script>

<svelte:head>
	<title>{title}</title>
	{#if description}
		<meta name="description" content={description} />
	{/if}
	{#if canonical}
		<link rel="canonical" href={canonical} />
	{/if}
	{#if noindex}
		<meta name="robots" content="noindex" />
	{/if}
</svelte:head>
