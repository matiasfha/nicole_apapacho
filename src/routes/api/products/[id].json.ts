import Client, { Predicates } from '$lib/prismaClient';

export async function get({ params }) {
	const { id } = params;
	const response = await Client.query(Predicates.at('document.id', id));

	return {
		body: {
			product: response
		}
	};
}
