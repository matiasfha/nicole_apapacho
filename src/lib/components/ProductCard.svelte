<script>
	import PrismicDOM from 'prismic-dom';
	export let product;
</script>

<div class="transform transition-transform duration-200 ease-in-out hover:scale-105">
	<div
		class=" grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
	>
		<div class="col-span-3 row-span-4 p-1 m-1">
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
				<h3 class="font-workSans font-bold text-3xl md:text-xl">
					<a
						class="no-underline hover:underline text-coffee-bean-700 font-workSans"
						href={`/products/${product.id}`}
					>
						{PrismicDOM.RichText.asText(product.data.title)}
					</a>
				</h3>
				<p class="text-grey-darker text-md md:text-sm font-bitter text-calltoAction font-semibold">
					${product.data.price}
				</p>
			</header>
			<div class="flex flex-col justify-start px-4 pb-8 font-bitter prose text-base">
				{@html PrismicDOM.RichText.asHtml(product.data.description)}
			</div>
			<div class="flex flex-col justify-start px-4 pb-8">
				<a
					href={`/payment/${product.id}`}
					class="mt-8 py-2 text-white font-bitter bg-calltoAction text-center font-bold">Comprar</a
				>
			</div>
		</div>
	</div>
</div>
