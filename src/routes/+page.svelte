<script>
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
</script>

<section class="max-w-7xl max-[768px]:px-[25px] mx-auto py-16 border-b">
	<header>
		<!-- Desktop -->
		<h1 class="text-4xl font-bold py-8">De beste nieuwssite evah</h1>
		<div class="max-[767px]:hidden grid md:grid-cols-3 gap-x-8 justify-around">
			<div class="md:col-span-2 relative transition ease-in-out hover:-translate-y-1 cursor-pointer">
				<div class="absolute inset-0">
					<img
						src="https://r.testifier.nl/Acbs8526SDKI/resizing_type:fill/watermark:proshots/width:1110/height:624/plain/https%3A%2F%2Fs3-newsifier.ams3.digitaloceanspaces.com%2Fwww.ajaxshowtime.com%2Fimages%2F2024-04%2Fajax-fc-twente-661c467eca907.jpg"
						alt=""
						class="rounded-[24px] w-full h-full object-cover"
					/>
				</div>
				<div
					class="absolute inset-x-0 bottom-0 py-4 px-8 bg-gradient-to-t from-black to-transparent rounded-b-[24px]"
				>
					<h2 class="text-white text-4xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Ajax weet het nog slechter te zijn dan dat ze het hele seizoen zijn geweest</h2>
					<p class="text-white italic pt-2">24 april 16:53</p>
				</div>
			</div>
			<div class="hidden md:block col-span-1">
				<div class="flex flex-col gap-y-4">
					<div class="relative transition ease-in-out hover:-translate-y-1 cursor-pointer">
						<img
							src="https://r.testifier.nl/Acbs8526SDKI/resizing_type:fill/watermark:proshots/width:555/height:312/plain/https%3A%2F%2Fs3-newsifier.ams3.digitaloceanspaces.com%2Fwww.ajaxshowtime.com%2Fimages%2F2024-04%2Fajax-fc-twente-661c467eca907.jpg"
							alt=""
							class="rounded-[24px] w-full"
						/>
						<div
							class="absolute inset-x-0 bottom-0 py-4 px-8 bg-gradient-to-t from-black to-transparent rounded-b-[24px]"
						>
							<h2 class="text-white text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Middendorp nieuwe coach: assistent Bol aangesteld</h2>
							<p class="text-white italic pt-2">24 april 16:53</p>
						</div>
					</div>

					<div class="relative transition ease-in-out hover:-translate-y-1 cursor-pointer">
						<img
							src="https://r.testifier.nl/Acbs8526SDKI/resizing_type:fill/watermark:proshots/width:555/height:312/plain/https%3A%2F%2Fs3-newsifier.ams3.digitaloceanspaces.com%2Fwww.ajaxshowtime.com%2Fimages%2F2024-04%2Fajax-fc-twente-661c467eca907.jpg"
							alt=""
							class="rounded-[24px] w-full"
						/>
						<div
							class="absolute inset-x-0 bottom-0 py-4 px-8 bg-gradient-to-t from-black to-transparent rounded-b-[24px]"
						>
							<h2 class="text-white text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Nieuwe ballenjongen Frank onderdeel technische staf</h2>
							<p class="text-white italic pt-2">24 april 16:53</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Mobile -->
		<div class="min-[768px]:hidden grid grid-cols-1 justify-around">
			<div class="col-span-1 relative">
				<div class=" inset-0">
					<img
						src="https://r.testifier.nl/Acbs8526SDKI/resizing_type:fill/watermark:proshots/width:1110/height:624/plain/https%3A%2F%2Fs3-newsifier.ams3.digitaloceanspaces.com%2Fwww.ajaxshowtime.com%2Fimages%2F2024-04%2Fajax-fc-twente-661c467eca907.jpg"
						alt=""
						class="rounded-[24px] w-full h-full object-cover"
					/>
				</div>
				<div
					class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-[24px]"
				>
					<h2 class="text-white text-4xl font-bold text-center">Title 1</h2>
				</div>
			</div>
		</div>
	</header>
</section>

<section class="max-w-7xl max-[768px]:px-[25px] mx-auto py-16">
	<div class="grid grid-cols-3 gap-x-8 justify-around">
		<div class="col-span-2">
			<ul class=" flex flex-col gap-y-4">
				<li class="flex items-center bg-white rounded-[24px] shadow-lg transition ease-in-out hover:-translate-y-1 cursor-pointer">
					<div class="mr-6">
						<img
							src="https://r.testifier.nl/Acbs8526SDKI/resizing_type:fill/watermark:proshots/width:555/height:312/plain/https%3A%2F%2Fs3-newsifier.ams3.digitaloceanspaces.com%2Fwww.ajaxshowtime.com%2Fimages%2F2024-04%2Fajax-fc-twente-661c467eca907.jpg"
							alt=""
							class="rounded-tl-[24px] rounded-bl-[24px] w-[200px] h-[150px] object-cover"
						/>
					</div>
					<div class="max-w-[500px] align-center">
						<h2 class="font-bold">Koen verbaasd dat Ajax geen kampioen gaat worden: ze zijn toch altijd de beste?</h2>
						<p>Lorem ipsum something nice. This is the excerpt of the news article. Read more here. </p>
						<div class="italic pt-2">
							<p>24 april 16:53</p>
						</div>
					</div>
				
				</li>
				<li class="flex items-center bg-white rounded-[24px] shadow-lg transition ease-in-out hover:-translate-y-1 cursor-pointer">
					<div class="mr-6">
						<img
							src="https://r.testifier.nl/Acbs8526SDKI/resizing_type:fill/watermark:proshots/width:555/height:312/plain/https%3A%2F%2Fs3-newsifier.ams3.digitaloceanspaces.com%2Fwww.ajaxshowtime.com%2Fimages%2F2024-04%2Fajax-fc-twente-661c467eca907.jpg"
							alt=""
							class="rounded-tl-[24px] rounded-bl-[24px] w-[200px] h-[150px] object-cover"
						/>
					</div>
					<div class="max-w-[500px] align-center">
						<h2 class="font-bold">Koen verbaasd dat Ajax geen kampioen gaat worden: ze zijn toch altijd de beste?</h2>
						<p>Lorem ipsum something nice. This is the excerpt of the news article. Read more here. </p>
						<div class="italic pt-2">
							<p>24 april 16:53</p>
						</div>
					</div>
				
				</li>
			</ul>
		</div>
		<div class="col-span-1">Test</div>
	</div>
</section>
