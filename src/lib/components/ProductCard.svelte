<script>
	import PrismicDOM from 'prismic-dom';
	export let product;
</script>

<div
	class="rounded-lg  transform transition-transform hover:scale-105 shadow-md bg-white duration-300 ease-in-outs"
>
	<div class=" grid grid-cols-3 grid-rows-2 grid-flow-row overflow-hidden ">
		<div class="col-span-3 row-span-4">
			<a href={`/products/${product.id}`}>
				<img
					src={product.data.image.url}
					alt={product.data.image.alt}
					class="rounded-t-xl object-cover h-48 w-full"
				/>
			</a>
		</div>

		<div class="col-span-3 row-span-1">
			<header class="flex items-center justify-between leading-tight p-2 md:p-4">
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
			<div class="flex flex-col justify-start px-4 pb-8 font-body prose text-sm">
				{@html PrismicDOM.RichText.asHtml(product.data.description)}
			</div>
			<div class="flex flex-col justify-start px-4 pb-8">
				<a
					href={`/payment/${product.id}`}
					class="mt-8 py-2 text-white font-body bg-calltoAction text-center font-bold">Comprar</a
				>
			</div>
		</div>
	</div>
</div>
