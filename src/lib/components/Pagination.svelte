<script>
	export let currentPage;
	export let pagination;
	export let category = null;
</script>

<nav>
	<ul class="flex items-center justify-between gap-x-4">
		<li class="hidden grow sm:list-item">
			{#if currentPage === 1}
				<button
					class="inline-flex cursor-not-allowed items-center gap-x-2 rounded-md border border-gray-200 p-2 text-gray-400 focus:outline-none"
					disabled
					><svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="h-5 w-5"
					>
						<path
							fill-rule="evenodd"
							d="M4.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L6.31 10l3.72-3.72a.75.75 0 1 0-1.06-1.06L4.72 9.47Zm9.25-4.25L9.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L11.31 10l3.72-3.72a.75.75 0 0 0-1.06-1.06Z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="sr-only md:not-sr-only">Vorige</span></button
				>
			{:else}
				<a
					class="inline-flex items-center gap-x-2 rounded-md border border-gray-200 p-2 text-gray-700 hover:border-gray-900 hover:text-gray-900 focus:border-gray-900 focus:text-gray-900 focus:outline-none"
					href="/?page={currentPage - 1}"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="h-5 w-5"
					>
						<path
							fill-rule="evenodd"
							d="M4.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L6.31 10l3.72-3.72a.75.75 0 1 0-1.06-1.06L4.72 9.47Zm9.25-4.25L9.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L11.31 10l3.72-3.72a.75.75 0 0 0-1.06-1.06Z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="sr-only md:not-sr-only">Vorige</span></a
				>
			{/if}
		</li>
		{#each pagination as page}
			{#if page === '...'}
				<li>…</li>
			{:else if page == currentPage}
				<li>
					<span class="pointer-events-none rounded-md border border-gray-900 p-2 text-gray-900"
						>{page}</span
					>
				</li>
			{:else}
				<li>
					<a
						class="rounded-md border border-gray-200 p-2 text-gray-700 hover:border-gray-900 hover:text-gray-900 focus:border-gray-900 focus:text-gray-900 focus:outline-none"
						href="/?page={page}">{page}</a
					>
				</li>
			{/if}
		{/each}
		<li class="hidden grow justify-end sm:flex">
			{#if currentPage === pagination[pagination.length - 1]}
				<button
					class="inline-flex cursor-not-allowed items-center gap-x-2 rounded-md border border-gray-200 p-2 text-gray-400"
					disabled
					><span class="sr-only md:not-sr-only">Volgende</span><svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="h-5 w-5"
					>
						<path
							fill-rule="evenodd"
							d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			{:else}
				<a
					class="inline-flex items-center gap-x-2 rounded-md border border-gray-200 p-2 text-gray-700 hover:border-gray-900 hover:text-gray-900 focus:border-gray-900 focus:text-gray-900 focus:outline-none"
					href="/?page={currentPage + 1}"
					><span class="sr-only md:not-sr-only">Volgende</span><svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="h-5 w-5"
					>
						<path
							fill-rule="evenodd"
							d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
			{/if}
		</li>
	</ul>
</nav>
