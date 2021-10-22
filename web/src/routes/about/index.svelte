<script>
	import nicoleSrc from '$lib/images/about.jpeg';
</script>

<svelte:head><title>Nicole Apapacho - Sobre Mí</title></svelte:head>

<header class="relative w-screen h-48 flex items-center justify-center">
	<div class="text-center w-full md:w-2/3 xl:w-1/2 mx-auto">
		<h4 class="font-lifeSavers font-medium text-primary text-base md:text-xl uppercase text-tle">
			Algo de historia
		</h4>
		<h2
			class="font-lifeSavers font-bold text-title text-3xl sm:text-4xl lg:text-5xl tracking-wider leading-tight text-coffee-bean-600"
		>
			Sobre mí
		</h2>
		<div class="h-1 mt-4 md:mt-6 w-2/5 mx-auto border-solid border-primary border-t-2" />
	</div>
</header>
<main class="px-4 md:px-0">
	<img src={nicoleSrc} alt="Nicole Roman" class="mx-auto rounded-lg shadow-lg" />

	<div class="prose prose-lg font-body text-coffee-bean-800 mx-auto pt-12">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius ipsum ex, suscipit
		dignissim elit condimentum elementum. Proin dapibus facilisis nisl, at viverra massa laoreet id.
		Vestibulum consequat, dolor ac interdum euismod, purus nibh ultrices eros, a condimentum lectus
		nisl a augue. Duis non erat at metus rutrum euismod. Maecenas porta scelerisque nunc ac
		fermentum. Vivamus dignissim rutrum elementum. Duis congue, lacus at pharetra tristique, ante
		dolor mattis augue, vitae hendrerit libero augue quis risus. Duis vitae risus malesuada, rutrum
		ligula sed, tincidunt nisi.
	</div>
</main>
