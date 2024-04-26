import { PUBLIC_BASE_URL } from '$env/static/public';
import { error } from '@sveltejs/kit';

export async function load({ fetch, setHeaders }) {
	setHeaders({
		'cache-control': 'max-age=60'
	});
	// Get posts data
	const res = await fetch(`${PUBLIC_BASE_URL}/wp-json/wp/v2/posts?&per_page=20&_embed`);
	const data = await res.json();

	if (data.data?.status === 404) {
		error(404, 'Niet gevodnen');
	}

	// Get selected post for header

	const home = await fetch(`${PUBLIC_BASE_URL}/wp-json/wp/v2/pages/6?acf_format=standard&_embed`);
	const headerData = await home.json();

	return {
		article: data,
		acf: headerData.acf
	};
}
