<script>
	import { page } from '$app/stores';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO title="404: Niet gevonden" />

<section class="max-w-7xl px-[25px] mx-auto text-center py-36">
	<h1 class="font-bold md:text-5xl">{$page.status}: {$page.error.message}</h1>
	<a
		class="inline-flex items-center gap-x-2 my-8 rounded-md border border-gray-200 p-2 text-gray-700 hover:border-gray-900 hover:text-gray-900 focus:border-gray-900 focus:text-gray-900 focus:outline-none mb-4"
		href="/"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			class="h-5 w-5"
		>
			<path
				fill-rule="evenodd"
				d="M7.793 2.232a.75.75 0 0 1-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 0 1 0 10.75H10.75a.75.75 0 0 1 0-1.5h2.875a3.875 3.875 0 0 0 0-7.75H3.622l4.146 3.957a.75.75 0 0 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 0 1 1.06.025Z"
				clip-rule="evenodd"
			/>
		</svg>
		Terug naar homepage</a
	>
</section>
