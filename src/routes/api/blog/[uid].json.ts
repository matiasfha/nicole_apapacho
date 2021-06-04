import Client, { Predicates } from '$lib/prismaClient';

export async function get({ params }) {
	const { uid } = params;
	console.log({ uid });
	const response = await Client.getByUID('blog_posts', uid);
	console.log({ response });
	return {
		body: {
			post: { ...response, ...response.data }
		}
	};
}
