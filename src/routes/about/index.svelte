<script context="module">
	export async function load({ fetch }) {
		const url = `/api/about.json`;
		const res = await fetch(url);
		const json = await res.json();

		if (res.ok) {
			return {
				status: res.status,
				props: {
					text: json.text.results
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
	export let text;
	import PrismicDOM from 'prismic-dom';
	import nicoleSrc from '$lib/images/yo.png';
</script>

<svelte:head><title>Nicole Apapacho - Sobre Mí</title></svelte:head>

<header class="relative w-screen bg-white h-48 flex items-center justify-center">
	<div class="text-center w-full md:w-2/3 xl:w-1/2 mx-auto">
		<h4 class="font-body font-medium text-primary text-base md:text-xl uppercase text-tle">
			Algo de historia
		</h4>
		<h2
			class="font-body font-bold text-title text-3xl sm:text-4xl lg:text-5xl tracking-wider leading-tight text-coffee-bean-400"
		>
			Sobre mí
		</h2>
		<div class="h-1 mt-4 md:mt-6 w-2/5 mx-auto border-solid border-primary border-t-2" />
	</div>
</header>
<div class="container max-w-screen-md mx-auto pt-12 px-2 md:px-0">
	<div class="bg-bouquet-50 p-12 shadow-lg rounded-md">
		<div class="prose text-sm md:text-base font-body text-coffee-bean-800">
			{@html PrismicDOM.RichText.asHtml(text?.[0].data.about)}
		</div>
	</div>
</div>
