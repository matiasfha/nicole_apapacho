import Client, { Predicates } from '$lib/prismaClient';

export async function get({ params }) {
	const { uid } = params;
	//const response = await Client.query(Predicates.at('document.id', uid));
	const response = await Client.getByUID('products', uid);

	return {
		body: {
			product: { ...response, ...response.data }
		}
	};
}
