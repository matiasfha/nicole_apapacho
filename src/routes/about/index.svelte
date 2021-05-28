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

	// configuration
	export const router = false;
	export const hydrate = false;
	export const prerender = true;
</script>

<svelte:head><title>Nicole Apapacho - Sobre Mí</title></svelte:head>

<div class="container max-w-screen-sm mx-auto">
	<h1 class="text-4xl text-coffee-bean-600 text-center font-bold py-7 font-title">Sobre Mí</h1>
	<div class="prose text-base flex flex-col justify-center content-center">
		<div class="font-body text-coffee-bean-600">
			{@html PrismicDOM.RichText.asHtml(text?.[0].data.about)}
		</div>
	</div>
</div>
