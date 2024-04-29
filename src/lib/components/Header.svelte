<script>
	let open = false;
	let search = false;
</script>

<header class="border-b-[1px] border-[#E0E5E6]">
	<div
		class="max-w-7xl px-[25px] mx-auto grid grid-cols-2 py-2 sm:px-6 md:px-8 lg:grid-cols-3 lg:py-4"
	>
		<a class="justify-self-start" href="/">
			<img
				class="h-10 w-auto"
				src="https://r.testifier.nl/Acbs8526SDKI/resizing_type:fill/plain/https%3A%2F%2Fs3-newsifier.ams3.digitaloceanspaces.com%2Fwww.ajaxshowtime.com%2Fimages%2F2021-02%2Fajaxshowtime-logo-6023b5f034fcb.svg"
				alt="AMS advocaten Homepage"
			/>
		</a>
		<nav class="hidden lg:block lg:self-center">
			<ul class="flex justify-center gap-x-2">
				<li>
					<a
						href="/"
						class="inline-flex whitespace-nowrap rounded-md border border-transparent p-2 outline-none hover:border-gray-200 focus:border-gray-200"
					>
						Item 1
					</a>
				</li>
				<li>
					<a
						href="/"
						class="inline-flex whitespace-nowrap rounded-md border border-transparent p-2 outline-none hover:border-gray-200 focus:border-gray-200"
					>
						Item 2
					</a>
				</li>
				<li>
					<a
						href="/"
						class="inline-flex whitespace-nowrap rounded-md border border-transparent p-2 outline-none hover:border-gray-200 focus:border-gray-200"
					>
						Item 3
					</a>
				</li>
				<li>
					<a
						href="/"
						class="inline-flex whitespace-nowrap rounded-md border border-transparent p-2 outline-none hover:border-gray-200 focus:border-gray-200"
					>
						Item 4
					</a>
				</li>
			</ul>
		</nav>
		<div class="flex items-center justify-self-end">
			<button
				class="rounded-md border border-transparent p-2 outline-none hover:border-gray-900 focus:border-gray-900 lg:hidden"
				type="button"
				on:click={() => ((open = !open), (search = false))}
			>
				{#if !open}
					<span class="sr-only">Open main menu</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6 text-gray-700"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				{:else}
					<span class="sr-only">Close main menu</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6 text-gray-700"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>
				{/if}
			</button>
			<button
				class="rounded-md border border-transparent p-2 outline-none hover:border-gray-900 focus:border-gray-900"
				type="button"
				on:click={() => ((search = !search), (open = false))}
			>
				{#if !search}
					<span class="sr-only">Open search modal</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6 text-gray-700"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
						/>
					</svg>
				{:else}
					<span class="sr-only">Close main menu</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6 text-gray-700"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>
				{/if}
			</button>
		</div>
	</div>
	<form
		class="mx-auto max-w-7xl px-4 py-2 sm:px-6 md:px-8"
		class:hidden={!search}
		method="POST"
		action="/zoeken"
		role="search"
	>
		<label class="text-2xl font-bold text-gray-900" for="search">Waar ben je naar op zoek?</label>
		<div class="mt-2 flex items-center gap-x-2">
			<input
				id="search"
				class="block w-full rounded-md border-gray-200 border py-2 px-4"
				type="search"
				name="query"
			/>
			<button class="rounded-md bg-black p-2" type="submit">
				<span class="sr-only">Zoek</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6 text-white"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
					/>
				</svg>
			</button>
		</div>
	</form>
</header>
