<script>
	import Pagination from '$lib/components/Pagination.svelte';
	import SEO from '$lib/components/SEO.svelte';

	let contentRef;
	// Function for Editor's pick scroll
	const scrollTo = (scrollOffset) => {
		if (contentRef) {
			contentRef.scrollBy({
				left: scrollOffset,
				behavior: 'smooth' // Add smooth scrolling behavior
			});
		}
	};

	export let data;
	const options = { hour: 'numeric', minute: '2-digit' };
	const optionsDate = { day: '2-digit', month: 'long', year: 'numeric' };
</script>

<SEO title={data.seo.title} description={data.seo.description} canonical={data.seo.canonical} />

<section class="max-w-7xl px-[25px] mx-auto py-16 border-b">
	<header>
		<!-- Desktop -->
		<!-- <h1 class="text-4xl font-bold pb-4">De beste nieuwssite evah</h1> -->
		<div class="max-[767px]:hidden grid md:grid-cols-3 gap-x-12 justify-around">
			<div
				class="md:col-span-2 relative transition ease-in-out hover:-translate-y-1 cursor-pointer"
			>
				<a href={data.acf.berichten_header[0].selecteer_bericht.slug}>
					<div class="absolute inset-0">
						<img
							style={`view-transition-name:img-news-${data.acf.berichten_header[0].selecteer_bericht.id}`}
							src={data.acf.berichten_header[0].selecteer_bericht._embedded['wp:featuredmedia'][0]
								.media_details.sizes.medium_large.source_url}
							alt={data.acf.berichten_header[0].selecteer_bericht._embedded['wp:featuredmedia'][0]
								.alt_text}
							class="rounded-[24px] w-full h-full object-cover"
						/>
					</div>
					<div
						class="absolute inset-x-0 bottom-0 py-4 px-8 bg-gradient-to-t from-black to-transparent rounded-b-[24px]"
					>
						<h2 class="text-white text-4xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
							{@html data.acf.berichten_header[0].selecteer_bericht.title.rendered}
						</h2>
						<p class="text-white italic pt-2">
							{new Date(data.acf.berichten_header[0].selecteer_bericht.date).toLocaleDateString(
								'nl',
								optionsDate
							)}
							{new Date(data.acf.berichten_header[0].selecteer_bericht.date).toLocaleTimeString(
								'nl',
								options
							)}
						</p>
					</div>
				</a>
			</div>
			<div class="hidden md:block col-span-1">
				<div class="flex flex-col gap-y-4">
					<a href={data.acf.berichten_header[1].selecteer_bericht.slug}>
						<div class="relative transition ease-in-out hover:-translate-y-1 cursor-pointer">
							<img
								src={data.acf.berichten_header[1].selecteer_bericht._embedded['wp:featuredmedia'][0]
									.media_details.sizes.medium_large.source_url}
								alt={data.acf.berichten_header[1].selecteer_bericht._embedded['wp:featuredmedia'][0]
									.alt_text}
								class="rounded-[24px] w-full"
								style={`view-transition-name:img-news-${data.acf.berichten_header[1].selecteer_bericht.id}`}
							/>
							<div
								class="absolute inset-x-0 bottom-0 py-4 px-8 bg-gradient-to-t from-black to-transparent rounded-b-[24px]"
							>
								<h2
									class="text-white text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
								>
									{@html data.acf.berichten_header[1].selecteer_bericht.title.rendered}
								</h2>
								<p class="text-white italic pt-2">
									{new Date(data.acf.berichten_header[1].selecteer_bericht.date).toLocaleDateString(
										'nl',
										optionsDate
									)}
									{new Date(data.acf.berichten_header[1].selecteer_bericht.date).toLocaleTimeString(
										'nl',
										options
									)}
								</p>
							</div>
						</div>
					</a>
					<a href={data.acf.berichten_header[2].selecteer_bericht.slug}>
						<div class="relative transition ease-in-out hover:-translate-y-1 cursor-pointer">
							<img
								src={data.acf.berichten_header[2].selecteer_bericht._embedded['wp:featuredmedia'][0]
									.media_details.sizes.medium_large.source_url}
								alt={data.acf.berichten_header[2].selecteer_bericht._embedded['wp:featuredmedia'][0]
									.alt_text}
								class="rounded-[24px] w-full"
								style={`view-transition-name:img-news-${data.acf.berichten_header[2].selecteer_bericht.id}`}
							/>
							<div
								class="absolute inset-x-0 bottom-0 py-4 px-8 bg-gradient-to-t from-black to-transparent rounded-b-[24px]"
							>
								<h2
									class="text-white text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
								>
									{@html data.acf.berichten_header[2].selecteer_bericht.title.rendered}
								</h2>
								<p class="text-white italic pt-2">
									{new Date(data.acf.berichten_header[2].selecteer_bericht.date).toLocaleDateString(
										'nl',
										optionsDate
									)}
									{new Date(data.acf.berichten_header[2].selecteer_bericht.date).toLocaleTimeString(
										'nl',
										options
									)}
								</p>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>

		<!-- Mobile -->
		<div class="min-[768px]:hidden relative flex flex-col">
			<div
				class="editor-wrapper max-[768px]:flex max-[768px]:overflow-x-auto scrollbar-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-0"
				bind:this={contentRef}
			>
				<a
					href={data.acf.berichten_header[0].selecteer_bericht.slug}
					class="relative flex flex-col justify-between max-[768px]:min-w-[400px] max-[768px]:pb-[1px]"
				>
					<div class=" inset-0 justify-between space-y-4 h-full mt-8 flex flex-col">
						<img
							src={data.acf.berichten_header[0].selecteer_bericht._embedded['wp:featuredmedia'][0]
								.media_details.sizes.medium_large.source_url}
							alt={data.acf.berichten_header[0].selecteer_bericht._embedded['wp:featuredmedia'][0]
								.alt_text}
							class="rounded-[24px] w-full"
							style={`view-transition-name:img-news-${data.acf.berichten_header[2].selecteer_bericht.id}`}
						/>
					</div>
					<div
						class="absolute inset-x-0 bottom-0 py-4 px-8 bg-gradient-to-t from-black to-transparent rounded-b-[24px]"
					>
						<h2 class="text-white text-2xl font-bold">
							{@html data.acf.berichten_header[0].selecteer_bericht.title.rendered}
						</h2>
						<p class="text-white italic pt-2">
							{new Date(data.acf.berichten_header[0].selecteer_bericht.date).toLocaleDateString(
								'nl',
								optionsDate
							)}
							{new Date(data.acf.berichten_header[0].selecteer_bericht.date).toLocaleTimeString(
								'nl',
								options
							)}
						</p>
					</div>
				</a>
				<a
					href={data.acf.berichten_header[1].selecteer_bericht.slug}
					class="relative flex flex-col justify-between max-[768px]:min-w-[400px] max-[768px]:pb-[1px]"
				>
					<div class=" inset-0 justify-between space-y-4 h-full mt-8 flex flex-col">
						<img
							src={data.acf.berichten_header[1].selecteer_bericht._embedded['wp:featuredmedia'][0]
								.media_details.sizes.medium_large.source_url}
							alt={data.acf.berichten_header[1].selecteer_bericht._embedded['wp:featuredmedia'][0]
								.alt_text}
							class="rounded-[24px] w-full"
							style={`view-transition-name:img-news-${data.acf.berichten_header[2].selecteer_bericht.id}`}
						/>
					</div>
					<div
						class="absolute inset-x-0 bottom-0 py-4 px-8 bg-gradient-to-t from-black to-transparent rounded-b-[24px]"
					>
						<h2 class="text-white text-2xl font-bold">
							{@html data.acf.berichten_header[1].selecteer_bericht.title.rendered}
						</h2>
						<p class="text-white italic pt-2">
							{new Date(data.acf.berichten_header[1].selecteer_bericht.date).toLocaleDateString(
								'nl',
								optionsDate
							)}
							{new Date(data.acf.berichten_header[1].selecteer_bericht.date).toLocaleTimeString(
								'nl',
								options
							)}
						</p>
					</div>
				</a>
				<a
					href={data.acf.berichten_header[2].selecteer_bericht.slug}
					class="relative flex flex-col justify-between max-[768px]:min-w-[400px] max-[768px]:pb-[1px]"
				>
					<div class=" inset-0 justify-between space-y-4 h-full mt-8 flex flex-col">
						<img
							src={data.acf.berichten_header[2].selecteer_bericht._embedded['wp:featuredmedia'][0]
								.media_details.sizes.medium_large.source_url}
							alt={data.acf.berichten_header[2].selecteer_bericht._embedded['wp:featuredmedia'][0]
								.alt_text}
							class="rounded-[24px] w-full"
							style={`view-transition-name:img-news-${data.acf.berichten_header[2].selecteer_bericht.id}`}
						/>
					</div>
					<div
						class="absolute inset-x-0 bottom-0 py-4 px-8 bg-gradient-to-t from-black to-transparent rounded-b-[24px]"
					>
						<h2 class="text-white text-2xl font-bold">
							{@html data.acf.berichten_header[2].selecteer_bericht.title.rendered}
						</h2>
						<p class="text-white italic pt-2">
							{new Date(data.acf.berichten_header[2].selecteer_bericht.date).toLocaleDateString(
								'nl',
								optionsDate
							)}
							{new Date(data.acf.berichten_header[2].selecteer_bericht.date).toLocaleTimeString(
								'nl',
								options
							)}
						</p>
					</div>
				</a>
			</div>
			<div class="md:hidden">
				<button
					on:click={() => scrollTo(-430)}
					class="btn-slide flex w-[50px] h-[50px] border-[3px] border-[#dedede] rounded-[50%] absolute content-center justify-center items-center bottom-[-60px] right-[75px]"
					><img class="w-[18px] h-[18px]" src="/img/arrow-left.svg" alt="arrow left" /></button
				>
				<button
					on:click={() => scrollTo(430)}
					class="btn-slide flex w-[50px] h-[50px] border-[3px] border-[#dedede] rounded-[50%] absolute content-center justify-center items-center bottom-[-60px] right-[15px] rotate-180"
					><img class="w-[18px] h-[18px]" src="/img/arrow-left.svg" alt="arrow right" /></button
				>
			</div>
		</div>
	</header>
</section>

<section class="max-w-7xl px-[25px] mx-auto py-16">
	<div class="grid grid-cols-3 gap-x-12 justify-around">
		<div class="col-span-3 md:col-span-2">
			<ul class=" flex flex-col gap-y-4">
				{#each data.article as article}
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
			<div class="mt-12 md:mt-14">
				<Pagination currentPage={data.currentPage} pagination={data.pagination} />
			</div>
		</div>
		<aside class="max-[768px]:hidden sticky top-14 block self-start">
			<h2 class="font-bold text-2xl mb-4">Partners</h2>
			<div class="flex flex-col gap-y-4">
				{#each data.bannerHome as banner}
					<a href={banner.url_banner_home.url} target={banner.url_banner_home.target}>
						<img
							src={banner.afbeelding_banner_home.url}
							alt={banner.afbeelding_banner_home.alt}
							class="rounded-[24px]"
						/>
					</a>
				{/each}
			</div>
		</aside>
	</div>
</section>

<style>
	.scrollbar-hidden {
		scrollbar-width: none;
	}
</style>
