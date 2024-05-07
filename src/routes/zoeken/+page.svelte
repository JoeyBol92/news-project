<script>
	import SEO from '$lib/components/SEO.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

	export let data;
	const options = { hour: 'numeric', minute: '2-digit' };
	const optionsDate = { day: '2-digit', month: 'long', year: 'numeric' };
</script>

<SEO title={`Zoekresultaten voor "${data.query}" - News Project`} noindex />

<section class="max-w-7xl px-[25px] mx-auto py-16 border-b">
	<h1 class="text-4xl font-bold pb-4 text-center">Zoeken</h1>
	<form class="mt-8 mb-16" method="POST">
		<input
			class="mx-auto block w-full rounded-md sm:w-1/2 py-2 px-4"
			type="text"
			name="query"
			bind:value={data.query}
		/>
		<button
			class="mx-auto mt-4 block w-full rounded-md bg-gray-300 px-4 py-2 hover:opacity-75 sm:w-1/2"
			>Zoek</button
		>
	</form>
	{#if data.posts}
		<div class="col-span-3 md:col-span-2 max-w-[810px] mx-auto">
			<h2 class="font-bold text-3xl text-center pb-16">
				Zoekresultaten voor: {data.query}
			</h2>
			<ul class=" flex flex-col gap-y-4">
				{#each data.posts as article}
					<a href={article.slug}>
						<li
							class="grid grid-cols-4 items-center bg-white rounded-[24px] shadow-lg transition ease-in-out hover:-translate-y-1 cursor-pointer"
						>
							<div class="col-span-1 max-[550px]:hidden">
								<img
									src={article._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large
										.source_url}
									alt={article._embedded['wp:featuredmedia'][0].alt_text}
									class="rounded-tl-[24px] rounded-bl-[24px] w-[200px] h-[150px] object-cover"
									style={`view-transition-name:img-news2-${article.id}`}
								/>
							</div>
							<div
								class="max-w-[500px] align-center px-6 col-span-3 max-[550px]:col-span-4 max-[550px]:p-8"
							>
								<h2 class="font-bold text-xl">
									{article.title.rendered}
								</h2>
								<p>
									{@html article.excerpt.rendered}
								</p>
								<div class="italic pt-2">
									<p>
										{new Date(article.date).toLocaleDateString('nl', optionsDate)}
										{new Date(article.date).toLocaleTimeString('nl', options)}
									</p>
								</div>
							</div>
						</li>
					</a>
				{/each}
			</ul>
		</div>
	{/if}
	<div class="mt-12 md:mt-14">
		<Pagination currentPage={data.currentPage} pagination={data.pagination} />
	</div>
</section>
