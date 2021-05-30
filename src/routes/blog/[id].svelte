<script context="module">
	export async function load({ fetch, page }) {
		const url = `/api/blog/${page.params.id}.json`;
		const res = await fetch(url);
		const json = await res.json();

		if (res.ok) {
			return {
				status: res.status,
				props: {
					post: json.post.results[0]
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
	import PrismicDOM from 'prismic-dom';

	export let post;
	// configuration
	export const router = false;
	export const hydrate = false;
	export const prerender = true;
</script>

<svelte:head
	><title>Nicole Apapacho - {PrismicDOM.RichText.asText(post.data.title)}</title></svelte:head
>
<section class="relative w-screen bg-white pb-24">
	<img class="mx-auto object-contain h-72" src={post.data.image.url} alt="" />
	<h1 class="font-title font-bold text-3xl md:text-4xl text-center text-coffee-bean-500">
		{PrismicDOM.RichText.asText(post.data.title)}
	</h1>
</section>
<div class="container max-w-screen-md mx-auto pt-12">
	<div class=" bg-bouquet-50 p-12 shadow-md rounded-md">
		<div class="prose font-body text-coffee-bean-500 mt-4 pb-8 text-center mx-auto">
			{@html PrismicDOM.RichText.asHtml(post.data.text)}
		</div>
		<div class="flex flex-col sm:flex-row justify-between py-12 border-b border-neutrals-l03">
			<span class="font-body font-medium text-neutrals-g03 text-lg text-center sm:text-left"
				>Comparte este artículo:</span
			>
			<div class="flex justify-center md:justify-start mt-2 sm:mt-0">
				<a
					href="http://www.facebook.com"
					class="border border-calltoAction rounded-full px-2 py-1 shadow flex items-center justify-center mr-3"
				>
					<i class="bx bxl-facebook text-calltoAction hover:text-coffee-bean-50 text-xl" />
				</a>

				<a
					href="http://www.twitter.com"
					class="border border-calltoAction rounded-full px-2 py-1 shadow flex items-center justify-center mr-3"
				>
					<i class="bx bxl-twitter text-calltoAction hover:text-coffee-bean-50 text-xl" />
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.bxl-facebook:before {
		content: '\ee81';
	}
	.bx {
		font-family: 'boxicons' !important;
		line-height: 1;
		display: inline-block;
		text-transform: none;
		speak: none;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
