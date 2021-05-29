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
<div class="grid grid-col-1 pb-24 md:pt-12">
	<div class="w-full pt-4 md:pb-12">
		<img
			src={post.data.image.url}
			alt={post.data.image.alt}
			class="rouded-lg object-contain w-full h-60 md:h-80"
		/>
	</div>
	<h1 class="font-title font-bold text-3xl md:text-4xl text-center text-coffee-bean-500">
		{PrismicDOM.RichText.asText(post.data.title)}
	</h1>
	<div class="prose font-body text-coffee-bean-500 mt-4 pb-8 text-center mx-auto">
		{@html PrismicDOM.RichText.asHtml(post.data.text)}
	</div>
</div>
