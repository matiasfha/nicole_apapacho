<script context="module">
	export async function load({ fetch, page }) {
		const url = `/api/products/${page.params.uid}.json`;
		const res = await fetch(url);
		const json = await res.json();
		if (res.ok) {
			return {
				status: res.status,
				props: {
					product: json.product
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}, status: ${res.status}`)
		};
	}
</script>

<script>
	import { createMachine, interpret, assign } from 'xstate';
	import PrismicDOM from 'prismic-dom';
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	// Props

	if (browser) {
		function isCalendlyEvent(e) {
			return e.data.event && e.data.event.indexOf('calendly') === 0;
		}
		window?.addEventListener('message', (e) => {
			if (isCalendlyEvent(e)) {
				if (e.data.event === 'calendly.event_scheduled') {
					paymentService.send('SCHEDULED');
				}
			}
		});
	}

	export let product;

	const performPayment = () => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve('Paid');
			}, 3000);
		});
	};
	const paymentMachine = createMachine(
		{
			id: 'payment',
			initial: 'iddle',
			states: {
				iddle: {
					on: {
						PAY: {
							target: 'paying'
						}
					}
				},
				paying: {
					invoke: {
						src: performPayment,
						onDone: {
							target: 'paid'
						}
					}
				},
				paid: {
					entry: ['calendly'],
					on: {
						SCHEDULED: {
							target: 'scheduled'
						}
					}
				},
				scheduled: {
					type: 'final',
					entry: 'navigate'
				}
			}
		},
		{
			actions: {
				navigate: () => {
					goto('/thanks');
				},
				calendly: () => {
					Calendly?.initPopupWidget({
						url: import.meta.env.VITE_CALENDLY_URL,
						prefill: {
							customAnswers: {
								taller: product.data.title
							}
						}
					});
				}
			}
		}
	);
	export let currentState;
	const paymentService = interpret(paymentMachine)
		.onTransition((state) => {
			console.log(state);
			currentState = state;
		})
		.start();
</script>

<svelte:head>
	<title>Nicole Apapacho - {PrismicDOM.RichText.asText(product.data.title)}</title>
</svelte:head>
<header class="relative w-screen bg-white h-48 flex items-center justify-center">
	<div class="text-center w-full md:w-2/3 xl:w-1/2 mx-auto">
		<h4 class="font-body font-medium text-primary text-base md:text-xl uppercase text-tle">
			Agenda tu taller
		</h4>
		<h2
			class="font-amsterdam font-bold text-title text-3xl sm:text-4xl lg:text-4xl tracking-wider leading-tight text-coffee-bean-600 pt-6"
		>
			{PrismicDOM.RichText.asText(product.data.title)}
		</h2>
		<div class="h-1 mt-4 md:mt-6 w-2/5 mx-auto border-solid border-primary border-t-2" />
	</div>
</header>
<div
	class="container max-w-screen-lg mx-auto py-12 px-2 md:px-0 border-bouquet-50 border-2 border-solid"
>
	<div
		class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 bg-bouquet-50 p-4 rounded-md shadow-lg pb-4 md:pb-12"
	>
		<div>
			<div class="prose text-coffee-bean-500 font-body pt-12">
				{@html PrismicDOM.RichText.asHtml(product.data.description)}
			</div>
		</div>
		<div class="grid grid-rows-2">
			<div class="object-contain w-full pb-8">
				<img
					src={product.data.image.url}
					alt={product.data.image.alt}
					class="rounded-t-lg object-cover max-h-48 w-full"
				/>
			</div>
			<div class="flex flex-col">
				<div class="flex flex-row">
					<span class="text-grey-darker text-xl font-body text-coffee-bean-500 font-semibold mr-8">
						Valor: ${product.data.price}
					</span>
				</div>

				<button
					on:click={() => paymentService.send('PAY')}
					class="mt-8 py-2 text-white font-body bg-calltoAction text-center font-bold hover:bg-opacity-80 rounded-md shadow-md w-full disabled:opacity-50 disabled:pointer-events-none"
					disabled={currentState.matches('paying') || currentState.matches('paid')}
					>{currentState.matches('paying')
						? 'Comprando...'
						: currentState.matches('paid')
						? 'Comprado :D'
						: 'Comprar'}</button
				>
			</div>
			<div id="calendar" />
		</div>
	</div>
</div>
