<script>
	import PrismicDOM from 'prismic-dom';
	export let post;
	export const url = `/blog/post/${post?.id}`;
	export const tagUrl = `/blog/tag/${post?.data.tag.slug}`;
	const { slug = '' } = post?.data.tag;
	export const tag = slug.charAt(0).toUpperCase() + slug.slice(1);
</script>

<article
	class="max-full px-4 my-2 py-2 bg-white rounded-lg shadow-md transform transition-transform duration-200 ease-in-out hover:scale-105"
>
	<div class="flex justify-between items-center">
		<span class="font-light text-coffee-bean-500 text-xs">{post.data.date}</span>
		<a
			class="px-2 py-1 bg-calltoAction text-gray-100 font-bold rounded hover:bg-coffee-bean-100"
			href={tagUrl}>{tag}</a
		>
	</div>
	<div class="mt-2">
		<a
			class="text-2xl text-coffee-bean-700 font-bold hover:text-gray-600"
			href={url}
			sveltekit:prefetch>{PrismicDOM.RichText.asText(post.data.title)}</a
		>
		<a href={url} sveltekit:prefetch>
			<div class="mt-2 text-coffee-bean-600 line-clamp-3 pb-8 prose font-body">
				{@html PrismicDOM.RichText.asHtml(post.data.text)}
			</div>
		</a>
	</div>
	<div class="flex justify-between items-center mt-4">
		<a class="text-coffee-bean-300 hover:underline" href={url} sveltekit:prefetch>Leer más</a>
	</div>
</article>
