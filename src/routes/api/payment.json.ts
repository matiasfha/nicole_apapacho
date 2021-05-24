const REVENIU_URL = import.meta.env.VITE_REVENIU_URL;
const PAYMENT_CALLBACK = import.meta.env.VITE_PAYMENT_CALLBACK;
const REVENIU_KEY = import.meta.env.VITE_REVENIU_KEY;

export async function post(request) {
	const { productId } = request.params;
	const paymentUrl = `${REVENIU_URL}/api/v1/subscriptions`;

	fetch(paymentUrl, {
		method: 'POST',
		headers: {
			'Reveniu-Secret-Key': REVENIU_KEY,
			'Content-Type': 'application/json'
		},
		body: {
			field_values: {
				email: 'usuario@test.com'
			}
		}
	});

	return {
		status: 200,
		body: {}
	};
}
