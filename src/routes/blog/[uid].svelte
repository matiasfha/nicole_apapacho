<script context="module">
	export async function load({ fetch, page }) {
		const url = `/api/blog/${page.params.uid}.json`;
		const res = await fetch(url);
		const json = await res.json();

		if (res.ok) {
			return {
				status: res.status,
				props: {
					post: json.post
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
<header class="relative w-screen bg-white h-48 flex items-center justify-center flex-col">
	<img
		class="absolute -top-5 mx-auto object-cover max-h-32 md:max-h-40"
		src={`${post.data.image.url}&fit=clip`}
		alt={post.data.image.alt}
	/>
	<h1
		class="absolute bottom-5 font-title font-bold text-3xl md:text-4xl text-center text-coffee-bean-500"
	>
		{PrismicDOM.RichText.asText(post.data.title)}
	</h1>
</header>
<div class="container max-w-screen-md mx-auto pt-12 px-2">
	<div class=" bg-bouquet-50 p-4 shadow-md rounded-md border-bouquet-50 border-2 border-solid">
		<div class="prose font-body text-coffee-bean-500 mt-4 pb-8 mx-auto">
			{@html PrismicDOM.RichText.asHtml(post.data.text)}
		</div>
		<div class="flex flex-row items-center justify-end pt-4 border-t w-full gap-4">
			<span class="font-body text-coffee-bean-600 text-base self-end">Comparte este artículo:</span>
			<div class="flex items-start justify-center mt-2 sm:mt-0">
				<a
					href="http://www.facebook.com"
					class="border border-calltoAction rounded-full px-1 py-1 shadow flex items-center justify-center mr-3"
				>
					<i class="bx bxl-facebook text-calltoAction hover:text-coffee-bean-50 text-lg" />
				</a>

				<a
					href="http://www.instagram.com"
					class="border border-calltoAction rounded-full px-1 py-1 shadow flex items-center justify-center"
				>
					<i class="bx bxl-instagram text-calltoAction hover:text-coffee-bean-50 text-lg" />
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
