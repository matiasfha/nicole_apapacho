<script context="module">
	async function loadPosts() {
		const allPosts = import.meta.glob('./blog/*.svx');

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

	async function loadTalleres() {
		const allPosts = import.meta.glob('./talleres/*.svx');

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

	export async function load({ fetch }) {
		const posts = await loadPosts();
		const products = await loadTalleres();
		return {
			props: { posts, products }
		};
	}
</script>

<script>
	import ProductCard from '$lib/components/ProductCard.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import nicoleSrc from '$lib/images/yo.jpeg';
	export let posts;
	export let products;
</script>

<svelte:head><title>Nicole Apapacho</title></svelte:head>

<section class="relative w-screen bg-white h-96 flex items-center justify-center px-8">
	<div class="container max-w-screen-xl mx-auto">
		<div
			class="text-left px-4 md:px-0 col-span-3 md:col-span-1 pb-12 md:pb-0 max-w-screen-md pt-4 md:pt-0"
		>
			<h1 class="text-3xl tracking-tight font-extrabold text-gray-900 md:text-6xl font-lifeSavers">
				<span class="block xl:inline">Acompaño a mujeres que maternan</span>
			</h1>
			<p
				class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0 text-body"
			>
				Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
				Elit sunt amet fugiat veniam occaecat fugiat aliqua.
			</p>
			<div class="mt-5 sm:mt-8 sm:flex justify-start">
				<div class="rounded-md shadow">
					<a
						href="https://wa.me/56973371249?text=Hola Nicole. Me gustaría agendar una consultoría"
						class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-calltoAction hover:bg-coffee-bean-100 md:py-4 md:text-lg md:px-10"
					>
						Agenda tu consultoría
					</a>
				</div>
			</div>
		</div>

		<div class="hidden md:block absolute inset-y-44 left-2/3 top-0 ">
			<img class="object-cover h-[24rem] rounded-3xl" src={nicoleSrc} alt="" />
		</div>
	</div>
</section>

<section
	class="container pt-24 lg:pt-24 pb-24 lg:pb-40 z-20 relative mx-auto px-4 md:px-0"
	id="talleres"
>
	<div class="text-center w-full md:w-2/3 xl:w-1/2 mx-auto">
		<h4 class="font-lifeSavers font-medium text-primary text-base md:text-xl uppercase text-title">
			Descube como te puedo ayudar
		</h4>
		<h2
			class="font-lifeSavers font-bold text-title text-3xl sm:text-4xl lg:text-5xl tracking-wider leading-tight text-coffee-bean-600"
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
		<h4 class="font-lifeSavers font-medium text-primary text-base md:text-xl uppercase text-tle">
			Que dicen las personas
		</h4>
		<h2
			class="font-lifeSavers font-bold text-title text-3xl sm:text-4xl lg:text-5xl tracking-wider leading-tight text-coffee-bean-600"
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

<!-- <section class="container pb-24 lg:pb-40 z-20 relative mx-auto px-4 md:px-0">
	<div class="text-center w-full md:w-2/3 xl:w-1/2 mx-auto">
		<h4 class="font-lifeSavers font-medium text-primary text-base md:text-xl uppercase">
			Mira mís últimos artículos
		</h4>
		<h2
			class="font-lifeSavers font-bold text-title text-3xl sm:text-4xl lg:text-5xl tracking-wider leading-tight text-coffee-bean-600"
		>
			También tengo un blog!
		</h2>
		<div class="h-1 mt-4 md:mt-6 w-2/5 mx-auto border-solid border-primary border-t-2" />
	</div>
	<div class="pt-24 grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center ">
		
		{#each posts as post}
			<PostCard {post} />
		{/each}
	</div>
</section> -->

<section class="container pb-24 lg:pb-40 z-20 relative mx-auto px-4 md:px-0">
	<div class="text-center w-full md:w-2/3 xl:w-1/2 mx-auto">
		<h4 class="font-lifeSavers font-medium text-primary text-base md:text-xl uppercase">
			Sígueme en redes sociales
		</h4>
		<h2
			class="font-lifeSavers font-bold text-title text-3xl sm:text-4xl lg:text-5xl tracking-wider leading-tight text-coffee-bean-600"
		>
			Lo último de instagram
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
