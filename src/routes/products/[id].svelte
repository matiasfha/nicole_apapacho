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
	import { dataset_dev } from 'svelte/internal';

	export let product;
	// configuration
	export const router = false;
	export const hydrate = false;
	export const prerender = true;
</script>

<svelte:head
	><title>Nicole Apapacho - {PrismicDOM.RichText.asText(product.data.title)}</title></svelte:head
>
<div class="pt-12">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<div>
			<div class="md:hidden object-contain w-full pb-8">
				<img
					src={product.data.image.url}
					alt={product.data.image.alt}
					class="rounded-t-lg object-cover max-h-48 w-full"
				/>
			</div>
			<h1 class="font-title font-bold text-3xl md:text-4xl pb-4">
				{PrismicDOM.RichText.asText(product.data.title)}
			</h1>
			<div class="prose text-coffee-bean-500 font-body">
				{@html PrismicDOM.RichText.asHtml(product.data.description)}
			</div>
		</div>
		<div class="grid grid-rows-2">
			<div class="hidden object-contain w-full pb-8">
				<img
					src={product.data.image.url}
					alt={product.data.image.alt}
					class="rounded-t-lg object-cover max-h-48 w-full"
				/>
			</div>
			<div class="flex flex-col">
				<div class="flex flex-row">
					<span class="text-grey-darker text-xl font-body text-coffee-bean-500 font-semibold mr-8">
						${product.data.price}
					</span>
					<span>Selecciona tu fecha</span>
				</div>
				<a
					href={`/product/${product.id}`}
					class="mt-8 py-2 text-white font-body bg-calltoAction text-center font-bold hover:bg-opacity-80"
					>Comprar</a
				>
			</div>
		</div>
	</div>
</div>
