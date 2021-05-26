<script>
	import PrismicDOM from 'prismic-dom';
	export let product;
</script>

<div
	class="rounded-lg  transform transition-transform hover:scale-105 shadow-md bg-white duration-300 ease-in-outs"
>
	<div class=" grid grid-cols-1 grid-flow-row auto-rows-auto overflow-hidden ">
		<a href={`/products/${product.id}`} class="h-48">
			<img
				src={product.data.image.url}
				alt={product.data.image.alt}
				class="rounded-t-lg object-cover max-h-48 w-full"
			/>
		</a>

		<header class="flex items-center justify-between leading-tight px-2 md:px-4 pt-8">
			<h3 class="font-title font-bold text-3xl md:text-xl">
				<a
					class="no-underline hover:underline text-coffee-bean-700 font-title"
					href={`/products/${product.id}`}
				>
					{PrismicDOM.RichText.asText(product.data.title)}
				</a>
			</h3>
			<p class="text-grey-darker text-md md:text-sm font-body text-calltoAction font-semibold">
				${product.data.price}
			</p>
		</header>
		<div
			class="flex flex-col justify-start p-4 font-body text-sm overflow-ellipsis overflow-hidden h-40"
		>
			{@html PrismicDOM.RichText.asHtml(product.data.description)}
		</div>

		<div class="flex flex-col justify-start px-4 pb-8">
			<a
				href={`/product/${product.id}`}
				class="mt-8 py-2 text-white font-body bg-calltoAction text-center font-bold hover:bg-opacity-80"
				>Saber más</a
			>
		</div>
	</div>
</div>
