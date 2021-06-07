import Client, { Predicates } from '$lib/prismaClient';

export async function get({ params }) {
	const { uid } = params;
	const response = await Client.getByUID('blog_posts', uid);
	return {
		body: {
			post: { ...response, ...response.data }
		}
	};
}
