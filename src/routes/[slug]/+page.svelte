<script>
	export let data;
	const options = { hour: 'numeric', minute: '2-digit' };
	const optionsDate = { day: '2-digit', month: 'long', year: 'numeric' };
</script>

<section class="max-w-7xl max-[768px]:px-[25px] mx-auto py-16 relative">
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
