<script context="module">
	export async function load({ fetch, page }) {
		const url = `/api/products/${page.params.id}.json`;
		const res = await fetch(url);
		const json = await res.json();

		if (res.ok) {
			return {
				status: res.status,
				props: {
					product: json.product.results[0]
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
	import ProductCard from '$lib/components/ProductCard.svelte';
	import PrismicDOM from 'prismic-dom';

	export let product;
	console.log(product);
	// configuration
	export const router = false;
	export const hydrate = false;
	export const prerender = true;
</script>

<svelte:head
	><title>Nicole Apapacho - {PrismicDOM.RichText.asText(product.data.title)}</title></svelte:head
>
<div class="grid grid-col-1 md:grid-flow-col gap-4 pb-24 pt-12">
	<ProductCard {product} />
</div>
