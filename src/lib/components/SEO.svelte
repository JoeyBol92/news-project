<script>
	export let title = undefined;
	export let description = undefined;
	export let canonical = undefined;
	export let robots = undefined;
</script>

<svelte:head>
	<title>{title}</title>
	{#if description}
		<meta name="description" content={description} />
	{/if}
	{#if canonical}
		<link rel="canonical" href={canonical} />
	{/if}
	{#if robots}
		<meta name="robots" content={robots} />
	{/if}
</svelte:head>
