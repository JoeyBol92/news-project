<script>
	export let data;
	const options = { hour: 'numeric', minute: '2-digit' };
	const optionsDate = { day: '2-digit', month: 'long', year: 'numeric' };
</script>

<section class="max-w-7xl px-[25px] mx-auto py-16 relative">
	<a
		class="inline-flex items-center gap-x-2 rounded-md border border-gray-200 p-2 text-gray-700 hover:border-gray-900 hover:text-gray-900 focus:border-gray-900 focus:text-gray-900 focus:outline-none mb-4"
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
		Terug naar nieuwsoverzicht</a
	>
	<div class="grid grid-cols-3 gap-x-8 justify-around">
		<div class="col-span-2 relative">
			<div class="relative">
				<img
					style={`view-transition-name:img-news-${data.post.id}`}
					src={data.post._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large
						.source_url}
					alt={data.post._embedded['wp:featuredmedia'][0].alt_text}
					class="rounded-[24px] w-full h-auto object-cover"
				/>
				<div
					class="absolute inset-0 flex flex-col justify-end py-4 px-8 bg-gradient-to-t from-black from-0% to-transparant to-20% rounded-b-[24px]"
				>
					<h1 class="text-4xl text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
						{@html data.post.title.rendered}
					</h1>
					<p class="text-white italic pt-2">
						{new Date(data.post.date).toLocaleDateString('nl', optionsDate)}
						{new Date(data.post.date).toLocaleTimeString('nl', options)}
					</p>
				</div>
			</div>
			<div
				class="
					mt-16
					prose-h2:text-2xl
					prose-h2:font-bold
					prose-h2:mb-4
					prose-h3:text-xl
					prose-h3:font-bold
					prose-h3:mb-2
					prose-p:mb-4
				"
			>
				{@html data.post.content.rendered}
			</div>
		</div>

		<div class="col-span-1"></div>
	</div>
</section>
