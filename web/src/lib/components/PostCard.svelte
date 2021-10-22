<script>
	export let post;
	export const url = `/blog/${post.metadata.slug}`;
</script>

<article
	class="p-6 text-left bg-bouquet-50 border-boquet-50 border-solid border-2 shadow-lg rounded-md"
>
	<a
		class="bg-cover bg-center bg-no-repeat h-64 sm:h-80 md:h-48 lg:h-56 xl:h-64 block mt-2"
		style={`background-image: url(${post.metadata.image});`}
		draggable="true"
		data-href="/post"
		href={`${url}`}
	/>
	<a
		class="font-body font-bold text-coffee-bean-500 hover:text-coffee-bean-300 transition duration-300 text-2xl tracking-wide block pt-6"
		draggable="true"
		data-href="/post"
		href={`${url}`}>{post.metadata.title}</a
	>
	<p
		class="prose md:prose-md font-body text-coffee-bean-600 text-sm pt-3 lg:pt-5 overflow-ellipsis overflow-hidden max-h-48"
	>
		{post.metadata.description}
	</p>
	<a
		class="inline-block mt-6 px-8 py-4 bg-white font-body text-coffee-brean-300 hover:text-calltoAction text-sm rounded-full shadow hover:shadow-md border border-primary hover:border-bouquet-500 transition duration-300"
		draggable="true"
		data-href="/post"
		href={url}
	>
		Leer más
	</a>
</article>
