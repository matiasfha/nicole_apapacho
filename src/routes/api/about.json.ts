import Client, { Predicates } from '$lib/prismaClient';

export async function get() {
	const response = await Client.query(Predicates.at('document.type', 'sobre_mi'));
	return {
		body: {
			text: response
		}
	};
}
