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
	import Calendly from '$lib/components/Calendly.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import nicoleSrc from '$lib/images/yo.png';
	export let posts;
	export let products;
	export const scrollToElementId = (elementId) => {
		document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' });
	};
	// configuration
	export const router = false;
	export const hydrate = false;
	export const prerender = true;
</script>

<svelte:head><title>Nicole Apapacho</title></svelte:head>

<section class="relative w-screen bg-white h-96 flex items-center justify-center px-8">
	<div class="container max-w-screen-xl mx-auto">
		<div
			class="text-left px-4 md:px-0 col-span-3 md:col-span-1 pb-12 md:pb-0 max-w-screen-md pt-4 md:pt-0"
		>
			<h1 class="text-3xl tracking-tight font-extrabold text-gray-900 md:text-6xl text-title">
				<span class="block xl:inline">Data to enrich your</span>
				<span class="block text-calltoAction xl:inline">online business</span>
			</h1>
			<p
				class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0 text-body"
			>
				Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
				Elit sunt amet fugiat veniam occaecat fugiat aliqua.
			</p>
			<div class="mt-5 sm:mt-8 sm:flex justify-start">
				<div class="rounded-md shadow">
					<Calendly workshopName="Agenda">
						<a
							href="#"
							class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-calltoAction hover:bg-coffee-bean-100 md:py-4 md:text-lg md:px-10"
						>
							Agenda Aquí
						</a>
					</Calendly>
				</div>
				<div class="mt-3 sm:mt-0 sm:ml-3">
					<div
						role="link"
						on:click={() => scrollToElementId('talleres')}
						class="w-full cursor-pointer flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-coffee-bean-300 md:py-4 md:text-lg md:px-10"
					>
						Ver los talleres
					</div>
				</div>
			</div>
		</div>

		<div class="hidden md:block absolute inset-y-44 right-44 -top-32 ">
			<img class="object-cover hero-img" src={nicoleSrc} alt="" />
		</div>
	</div>
</section>

<section
	class="container pt-24 lg:pt-24 pb-24 lg:pb-40 z-20 relative mx-auto px-4 md:px-0"
	id="talleres"
>
	<div class="text-center w-full md:w-2/3 xl:w-1/2 mx-auto">
		<h4 class="font-body font-medium text-primary text-base md:text-xl uppercase text-title">
			Descube como te puedo ayudar
		</h4>
		<h2
			class="font-body font-bold text-title text-3xl sm:text-4xl lg:text-5xl tracking-wider leading-tight text-coffee-bean-400"
		>
			Talleres y asesorías
		</h2>
		<div class="h-1 mt-4 md:mt-6 w-2/5 mx-auto border-solid border-primary border-t-2" />
	</div>
	<div class="pt-16">
		<!-- CARD-->
		<div class="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each products as product}
				<ProductCard {product} />
			{/each}
		</div>
	</div>
</section>

<section class="container  pb-24 lg:pb-40 z-20 relative mx-auto">
	<div class="text-center w-full md:w-2/3 xl:w-1/2 mx-auto">
		<h4 class="font-body font-medium text-primary text-base md:text-xl uppercase text-tle">
			Que dicen las personas
		</h4>
		<h2
			class="font-body font-bold text-title text-3xl sm:text-4xl lg:text-5xl tracking-wider leading-tight text-coffee-bean-400"
		>
			Quienes han participado comentan
		</h2>
		<div class="h-1 mt-4 md:mt-6 w-2/5 mx-auto border-solid border-primary border-t-2" />
	</div>
	<div class="pt-16">
		<!-- CARD-->
		<Testimonials />
	</div>
</section>

<section class="container pb-24 lg:pb-40 z-20 relative mx-auto px-4 md:px-0">
	<div class="text-center w-full md:w-2/3 xl:w-1/2 mx-auto">
		<h4 class="font-body font-medium text-primary text-base md:text-xl uppercase text-tle">
			Mira mís últimos artículos
		</h4>
		<h2
			class="font-body font-bold text-title text-3xl sm:text-4xl lg:text-5xl tracking-wider leading-tight text-coffee-bean-400"
		>
			También tengo un blog!
		</h2>
		<div class="h-1 mt-4 md:mt-6 w-2/5 mx-auto border-solid border-primary border-t-2" />
	</div>
	<div class="pt-24 grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center ">
		<!-- CARD-->
		{#each posts as post}
			<PostCard {post} />
		{/each}
	</div>
</section>

<style>
	.hero-img {
		height: 35.5rem;
	}
	:root {
		scroll-behavior: smooth;
	}
</style>
