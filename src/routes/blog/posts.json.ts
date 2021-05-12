import Prismic from '@prismicio/client';

export async function get() {
	const api = await Prismic.getApi(import.meta.env.VITE_API, {
		accessToken: import.meta.env.VITE_PRISMIC_TOKEN
	});
	const response = await api.query(Prismic.Predicates.at('document.type', 'blog_posts'));

	return {
		body: {
			posts: response
		}
	};
}
