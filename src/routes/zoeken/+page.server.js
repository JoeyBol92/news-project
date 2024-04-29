import { PUBLIC_BASE_URL } from '$env/static/public';
import { error, redirect } from '@sveltejs/kit';
import { calculatePagination } from '$lib/utils/calculatePagination';

export async function load({ fetch, setHeaders, url }) {
	setHeaders({
		'cache-control': 'max-age=60'
	});

	const query = url.searchParams.get('query');
	// const page = url.searchParams.get('page') ?? '1';

	if (query) {
		const page = parseInt(url.searchParams.get('page')) || 1;
		// const page = url.searchParams.get('page') ?? '1';
		const res = await fetch(
			`${PUBLIC_BASE_URL}/wp-json/wp/v2/posts?search=${query}&per_page=20&page=${page}&_fields=id,date,slug,type,title,excerpt,acf,_links,_embedded&_embed`
		);

		const totalPages = res.headers.get('X-WP-TotalPages');
		const pagination = calculatePagination(Number(page), Number(totalPages));

		const posts = await res.json();

		if (posts.length === 0) {
			throw error(404, 'Niet gevonden');
		}

		return {
			query,
			posts,
			path: url.pathname,
			currentPage: Number(page),
			pagination
		};
	}
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const query = data.get('query');

		throw redirect(303, `/zoeken?query=${query}`);
	}
};
