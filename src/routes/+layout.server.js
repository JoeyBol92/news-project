import { PUBLIC_BASE_URL } from '$env/static/public';

export async function load({ fetch }) {
	const res = await fetch(`${PUBLIC_BASE_URL}/wp-json/acf/v2/options/website-settings`);
	const data = await res.json();

	return {
		bannerHome: data.banners,
		bannerArticle: data.banners_article
	};
}
