<script context="module">
	async function loadTalleres() {
		const allPosts = import.meta.glob('../talleres/*.svx');

		let posts = [];
		for (let path in allPosts) {
			posts.push(
				allPosts[path]().then(({ metadata }) => {
					const slug = path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;
					return { path, metadata: { ...metadata, slug } };
				})
			);
		}
		return await Promise.all(posts);
	}
	export async function load() {
		const response = await loadTalleres();

		return {
			props: {
				products: response
			}
		};
	}
</script>

<script>
	import ProductCard from '$lib/components/ProductCard.svelte';
	export let products;
	console.log(products);
</script>

<svelte:head><title>Nicole Apapacho - Talleres</title></svelte:head>

<header class="relative w-screen bg-white h-48 flex items-center justify-center">
	<div class="text-center w-full md:w-2/3 xl:w-1/2 mx-auto">
		<h4 class="font-lifeSavers font-medium text-primary text-base md:text-xl uppercase text-tle">
			Descube como te puedo ayudar
		</h4>
		<h2
			class="font-lifeSavers font-bold text-title text-3xl sm:text-4xl lg:text-5xl tracking-wider leading-tight text-coffee-bean-600"
		>
			Talleres y asesorías
		</h2>
		<div class="h-1 mt-4 md:mt-6 w-2/5 mx-auto border-solid border-primary border-t-2" />
	</div>
</header>
<section class="container pb-24 lg:pb-40 z-20 relative mx-auto px-4 md:px-0 pt-2">
	<div class="pt-4 md:pt-24">
		<!-- CARD-->
		<div class="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each products as product}
				<ProductCard {product} />
			{/each}
		</div>
	</div>
</section>
