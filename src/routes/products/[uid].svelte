<script context="module">
	export async function load({ fetch, page }) {
		const url = `/api/products/${page.params.uid}.json`;
		const res = await fetch(url);
		const json = await res.json();
		console.log(json);
		if (res.ok) {
			return {
				status: res.status,
				props: {
					product: json.product
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

	export let product;
</script>

<svelte:head
	><title>Nicole Apapacho - {PrismicDOM.RichText.asText(product.data.title)}</title></svelte:head
>
<header class="relative w-screen bg-white h-96 flex items-center justify-center">
	<div class="text-center w-full md:w-2/3 xl:w-1/2 mx-auto">
		<h4 class="font-body font-medium text-primary text-base md:text-xl uppercase text-tle">
			Agenda tu taller
		</h4>
		<h2
			class="font-body font-bold text-title text-3xl sm:text-4xl lg:text-5xl tracking-wider leading-tight text-coffee-bean-400"
		>
			{PrismicDOM.RichText.asText(product.data.title)}
		</h2>
		<div class="h-1 mt-4 md:mt-6 w-2/5 mx-auto border-solid border-primary border-t-2" />
	</div>
</header>
<div class="container max-w-screen-lg mx-auto py-12">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 bg-bouquet-50 p-4 rounded-md shadow-lg pb-12">
		<div>
			<div class="prose text-coffee-bean-500 font-body pt-12">
				{@html PrismicDOM.RichText.asHtml(product.data.description)}
			</div>
		</div>
		<div class="grid grid-rows-2">
			<div class="object-contain w-full pb-8">
				<img
					src={product.data.image.url}
					alt={product.data.image.alt}
					class="rounded-t-lg object-cover max-h-48 w-full"
				/>
			</div>
			<div class="flex flex-col">
				<div class="flex flex-row">
					<span class="text-grey-darker text-xl font-body text-coffee-bean-500 font-semibold mr-8">
						Valor: ${product.data.price}
					</span>
				</div>
				<div class="flex flex-col py-8">
					<span>Selecciona tu fecha</span>
					<select>
						<option>Día</option>
						<option value="lunes">Lunes</option>
						<option value="miercoles">Miércoles</option>
						<option value="viernes">Viernes</option>
					</select>
					<span>Selecciona tu fecha</span>
					<select>
						<option>Día</option>
						<option value="lunes">Lunes</option>
						<option value="miercoles">Miércoles</option>
						<option value="viernes">Viernes</option>
					</select>
				</div>
				<a
					href={`/product/${product.id}`}
					class="py-2 text-white font-body bg-calltoAction text-center font-bold hover:bg-opacity-80"
					>Comprar</a
				>
			</div>
		</div>
	</div>
</div>
