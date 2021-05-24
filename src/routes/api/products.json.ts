import Client, { Predicates } from '$lib/prismaClient';

export async function get() {
	const response = await Client.query(Predicates.at('document.type', 'products'));

	return {
		body: {
			products: response
		}
	};
}
