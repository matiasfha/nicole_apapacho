<script context="module">
	async function loadProducts(fetch) {
		const url = `/api/products/products.json`;
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

<svelte:head><title>Nicole Apapacho - Talleres</title></svelte:head>

<header class="relative w-screen bg-white h-96 flex items-center justify-center">
	<div class="text-center w-full md:w-2/3 xl:w-1/2 mx-auto">
		<h4 class="font-body font-medium text-primary text-base md:text-xl uppercase text-tle">
			Descube como te puedo ayudar
		</h4>
		<h2
			class="font-body font-bold text-title text-3xl sm:text-4xl lg:text-5xl tracking-wider leading-tight text-coffee-bean-400"
		>
			Talleres y asesorías
		</h2>
		<div class="h-1 mt-4 md:mt-6 w-2/5 mx-auto border-solid border-primary border-t-2" />
	</div>
</header>
<section class="container pt-24 lg:pt-24 pb-24 lg:pb-40 z-20 relative mx-auto px-4 md:px-0">
	<div class="pt-16">
		<!-- CARD-->
		<div class="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each products as product}
				<ProductCard {product} />
			{/each}
		</div>
	</div>
</section>
