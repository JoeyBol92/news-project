import { PUBLIC_BASE_URL } from '$env/static/public';
import { error } from '@sveltejs/kit';
import { calculatePagination } from '$lib/utils/calculatePagination';

export async function load({ fetch, setHeaders, url }) {
	setHeaders({
		'cache-control': 'max-age=60'
	});

	const page = url.searchParams.get('page') ?? '1';

	if (page < 1) {
		error(404, 'Pagina niet gevonden');
	}

	// Get posts data
	const res = await fetch(`${PUBLIC_BASE_URL}/wp-json/wp/v2/posts?page=${page}&per_page=20&_embed`);
	const data = await res.json();

	if (data.data?.status === 404) {
		error(404, 'Niet gevonden');
	}

	const totalPages = res.headers.get('X-WP-TotalPages');
	const pagination = calculatePagination(Number(page), Number(totalPages));

	// Get selected post for header

	const home = await fetch(`${PUBLIC_BASE_URL}/wp-json/wp/v2/pages/6?acf_format=standard&_embed`);
	const headerData = await home.json();

	return {
		currentPage: Number(page),
		article: data,
		acf: headerData.acf,
		seo: headerData.yoast_head_json,
		pagination
	};
}
