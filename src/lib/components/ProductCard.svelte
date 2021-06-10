<script>
	import PrismicDOM from 'prismic-dom';
	import { dataset_dev } from 'svelte/internal';
	export let product;
</script>

<div class="group rounded-md shadow-lg bg-bouquete-50 border-bouquet-50 border-2 border-solid">
	<span
		class="rounded-lg transition ease-in-out duration-700 transform hover:scale-105 block shadow-xs hover:shadow-md"
	>
		<span
			class="h-48 bg-center bg-cover bg-no-repeat rounded-t-lg block"
			style={`background-image: url(${product.data.image.url});`}
		/>
		<span class="bg-white border-b border-bouquette-100 block px-5 lg:px-3 xl:px-5 py-8">
			<h4
				class="font-title font-semibold text-coffee-bean-400 group-hover:text-secondary text-lg xl:text-2xl block pb-2"
			>
				{PrismicDOM.RichText.asText(product.data.title)}
			</h4>
			<span class="flex">
				<span class="flex">
					<span class="font-body font-medium text-sm text-bouquet-800">en </span>
					<span class="font-body font-medium text-sm  text-bouquete-800 block pl-1">Maternidad</span
					>
				</span>
			</span>
		</span>
		<footer
			class="bg-white px-5 lg:px-3 xl:px-5 py-4 rounded-b-lg items-center justify-between grid grid-cols-2"
		>
			<span class="flex items-center">
				<div class="rounded-md shadow">
					<a
						href={`/products/${product.uid}`}
						class="w-full flex items-center justify-center px-4 py-1 border border-transparent text-base font-medium rounded-md text-white bg-calltoAction hover:bg-coffee-bean-100+"
					>
						Saber Más
					</a>
				</div>
			</span>
			<h2 class="font-body font-semibold text-calltoAction text-2xl tracking-wider text-right">
				${product.data.price}
			</h2>
		</footer>
	</span>
</div>
