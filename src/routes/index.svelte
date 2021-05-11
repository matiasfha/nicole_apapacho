<script context="module">
	export const hydrate = false;
	export const prerender = true;
	export async function load({ page, fetch, session, context }) {
		const url = `/blog/posts.json`;
		const res = await fetch(url);
		const json = await res.json();

		if (res.ok) {
			return {
				props: {
					posts: json.posts.results
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
	export let posts;
</script>

<svelte:head><title>Nicole Apapacho</title></svelte:head>
<main>
	<section
		class="bg-coffee-bean w-full h-auto hero bg-fixed bg-cover bg-center mx-auto flex items-center justify-end py-24 pr-32"
	>
		<div class="h-96 w-2/5 pt-14 flex flex-col items-start justify-center relative">
			<h1
				class="uppercase font-bold text-coffee-bean-50 text-6xl w-full leading-relaxed px-16 py-6 z-10"
			>
				Nicole Apapacho
			</h1>
			<div class="w-full px-16 pb-16 z-10">
				<ul class="text-coffee-bean-900 text-lg">
					<li>ℳ𝒶𝓉ℯ𝓇𝓃𝒾𝒹𝒶𝒹 𝓎 ℒ𝒶𝒸𝓉𝒶𝓃𝒸𝒾𝒶</li>
					<li>
						Consejera de lactancia de LCDLL Te acompaño durante tugestación,puerperio y crianza
						respetuosa .
					</li>
					<li>🌿 Talleres</li>
					<li>🌿 Consejerías Lactancia Materna</li>
					<li>🌿 Crianza Respetuosa</li>
					<li>🌿 Sexualidad</li>
				</ul>
			</div>
			<div class="bg-white opacity-40 w-full h-full absolute z-0" />
		</div>
	</section>

	<section class="w-full h-auto bg-coffee-bean-50">
		<div class="max-w-screen-lg mx-auto  py-16">
			<h1 class="text-3xl py-8">Talleres</h1>

			<!-- CARD-->
			<div class="grid grid-flow-col pb-24">
				<div class="w-96">
					<div
						class=" grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
					>
						<div class="col-span-3 row-span-4 p-1 m-1">
							<a href="#">
								<img
									src="https://picsum.photos/640/400/?random"
									alt="Placeholder"
									class="rounded-t-xl object-cover h-48 w-full"
								/>
							</a>
						</div>

						<div class="col-span-3 row-span-1">
							<div class="flex align-bottom flex-col leading-none p-2 md:p-4">
								<div class="flex flex-row justify-between items-center">
									<a
										class="flex items-center no-underline hover:underline text-coffee-bean-700"
										href="#"
									>
										<img
											alt="Placeholder"
											class="block rounded-full"
											src="https://picsum.photos/32/32/?random"
										/>
										<span class="ml-2 text-sm"> John Doe </span>
									</a>
								</div>
							</div>
						</div>

						<div class="col-span-3 row-span-1">
							<header class="flex items-center justify-between leading-tight p-2 md:p-4">
								<h1 class="text-lg">
									<a class="no-underline hover:underline text-coffee-bean-700" href="#">
										Taller 1
									</a>
								</h1>
								<p class="text-grey-darker text-sm">$10.000</p>
							</header>
							<div class="flex flex-col justify-start px-4 pb-8">
								<p>
									Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium
									doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore
									veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
									voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia
									consequuntur magni dolores eos, qui ratione voluptatem sequi nesc
								</p>
								<button class="bg-coffee-bean-200 mt-8 py-2 text-white">Comprar</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<h1 class="text-3xl">Blog</h1>
			<!-- Card-->
			{#each posts as post}
				<div class="max-full px-10 my-4 py-6 bg-white rounded-lg shadow-md">
					<div class="flex justify-between items-center">
						<span class="font-light text-coffee-bean-400">{post.data.fecha}</span>
						<a
							class="px-2 py-1 bg-coffee-bean-500 text-gray-100 font-bold rounded hover:bg-coffee-bean-400"
							href="#">Design</a
						>
					</div>
					<div class="mt-2">
						<a class="text-2xl text-coffee-bean-700 font-bold hover:text-gray-600" href="#"
							>{PrismicDOM.RichText.asText(post.data.titulo)}</a
						>
						<p class="mt-2 text-coffee-bean-600 h-16 overflow-ellipsis overflow-hidden pb-8">
							{@html PrismicDOM.RichText.asText(post.data.texto).substr(0, 300)}...
						</p>
					</div>
					<div class="flex justify-between items-center mt-4">
						<a class="text-coffee-bean-300 hover:underline" href="#">Leer más</a>
						<div>
							<a class="flex items-center" href="#">
								<img
									class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
									src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
									alt="avatar"
								/>
								<h1 class="text-coffee-bean-700 font-bold">Nicole Román</h1>
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>
</main>

<style>
	.hero {
		background-image: url('https://static.wixstatic.com/media/e8d6781ca10e45ce9ab0dc83c3111387.jpeg/v1/fill/w_1665,h_740,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/e8d6781ca10e45ce9ab0dc83c3111387.jpeg');
	}
</style>
