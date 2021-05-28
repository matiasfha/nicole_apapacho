<script>
	import PrismicDOM from 'prismic-dom';
	export let post;
	export const url = `/blog/${post?.id}`;
	export const tagUrl = `/blog/tag/${post?.data.tag.slug}`;
	const { slug = '' } = post?.data.tag;
	export const tag = slug.charAt(0).toUpperCase() + slug.slice(1);
</script>

<article
	class="max-full pl-4 pr-8 my-4 bg-white rounded-lg shadow-md transform transition-transform duration-200 ease-in-out hover:scale-105"
>
	<div class="flex justify-between items-center">
		<span class="font-light text-coffee-bean-500 text-xs">{post.data.date}</span>
		<a
			class="mt-4 px-2 py-1 bg-calltoAction text-gray-100 font-bold rounded hover:bg-coffee-bean-100"
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
			<div
				class="mt-2 text-coffee-bean-600 pb-8 font-body text-sm overflow-ellipsis overflow-hidden h-28 text-justify"
			>
				{@html PrismicDOM.RichText.asHtml(post.data.text)}
			</div>
		</a>
	</div>
	<div class="flex justify-end items-center mt-4">
		<a class="text-coffee-bean-300 hover:underline" href={url} sveltekit:prefetch>Leer más</a>
	</div>
</article>
