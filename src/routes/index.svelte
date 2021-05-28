<script context="module">
	async function loadPosts(fetch) {
		const url = `/api/blog/posts.json`;
		const res = await fetch(url);
		const json = await res.json();

		if (res.ok) {
			return {
				status: res.status,
				props: {
					posts: json.posts.results
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}, status: ${res.status}`)
		};
	}

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
		const postsResponse = await loadPosts(fetch);
		const productsResponse = await loadProducts(fetch);
		if (postsResponse.status === 200 && productsResponse.status === 200) {
			return {
				props: {
					...postsResponse.props,
					...productsResponse.props
				}
			};
		}

		return {
			...postsResponse,
			...productsResponse
		};
	}
</script>

<script>
	import ProductCard from '$lib/components/ProductCard.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	export let posts;
	export let products;
	// configuration
	export const router = false;
	export const hydrate = false;
	export const prerender = true;
</script>

<svelte:head><title>Nicole Apapacho</title></svelte:head>
<!-- <section
		class="bg-coffee-bean w-full h-auto hero bg-fixed bg-cover bg-center mx-auto flex items-center justify-end py-24 pr-32"
	>
		<div class="h-96 w-2/5 pt-14 flex flex-col items-start justify-center relative">
			<h1
				class="uppercase font-title font-bold text-calltoAction text-5xl w-full leading-relaxed px-16 py-6 z-10"
			>
				Nicole Apapacho
			</h1>
			<div class="w-full px-16 pb-16 z-10">
				<ul class="text-coffee-bean-900 text-lg font-body">
					<li>Maternindad y Lactancia</li>
					<li>
						Consejera de lactancia de LCDLL Te acompaño durante tugestación,puerperio y crianza
						respetuosa .
					</li>
					<li>🌿 Talleres</li>
					<li>🌿 Consejerías Lactancia Materna</li>
					<li>🌿 Crianza Respetuosa</li>
					<li>🌿 Sexualidad</li>
				</ul>
			</div>
			<div class="bg-white opacity-40 w-full h-full absolute z-0" />
		</div>
	</section> -->

<section class="">
	<div class="pb-16">
		<!-- CARD-->
		<div class="grid grid-col-1 md:grid-flow-col gap-4 pb-24 pt-12">
			{#each products as product}
				<ProductCard {product} />
			{/each}
		</div>

		<h1 class="text-4xl text-coffee-bean-600 text-center font-bold py-7 font-title">Artículos</h1>
		<!-- Card-->
		{#each posts as post}
			<PostCard {post} />
		{/each}
	</div>
</section>

<style>
	.hero {
		background-image: url('https://static.wixstatic.com/media/e8d6781ca10e45ce9ab0dc83c3111387.jpeg/v1/fill/w_1665,h_740,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/e8d6781ca10e45ce9ab0dc83c3111387.jpeg');
	}
</style>
