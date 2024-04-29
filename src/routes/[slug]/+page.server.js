import { PUBLIC_BASE_URL } from '$env/static/public';
import { error } from '@sveltejs/kit';

export async function load({ fetch, params, setHeaders }) {
	setHeaders({
		'cache-control': 'max-age=60'
	});
	// Get posts data
	const res = await fetch(
		`${PUBLIC_BASE_URL}/wp-json/wp/v2/posts?slug=${params.slug}&_embed&_fields=id,date,title,content,acf,yoast_head_json,_links,_embedded`
	);

	const [post] = await res.json();

	if (post.data?.status === 404) {
		error(404, 'Niet gevodnen');
	}

	return {
		post: { ...post },
		seo: post.yoast_head_json,
		robots: [
			post.yoast_head_json.robots.index,
			post.yoast_head_json.robots.follow,
			post.yoast_head_json.robots['max-snippet'],
			post.yoast_head_json.robots['max-image-preview:large'],
			post.yoast_head_json.robots['max-video-preview']
		].join(',')
	};
}
