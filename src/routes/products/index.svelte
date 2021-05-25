<script context="module">
	async function loadProducts(fetch) {
		const url = `/api/products.json`;
		const res = await fetch(url);
		const json = await res.json();

		if (res.ok) {
			return {
				status: res.status,
				props: {
					products: json.products.results
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}, status: ${res.status}`)
		};
	}
	export async function load({ page, fetch, session, context }) {
		const response = await loadProducts(fetch);
		if (response.status === 200) {
			return {
				props: {
					...response.props
				}
			};
		}

		return {
			...response
		};
	}
</script>

<script>
	import ProductCard from '$lib/components/ProductCard.svelte';
	export let products;
</script>

<svelte:head><title>Nicole Apapacho - Tallers</title></svelte:head>

<h1 class="text-4xl text-coffee-bean-600 text-center font-bold py-7 font-title">Talleres</h1>

<div class="grid grid-col-1 md:grid-flow-col gap-4 pb-24">
	{#each products as product}
		<ProductCard {product} />
	{/each}
</div>
