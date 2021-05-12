<script>
	import '../app.postcss';
</script>

<div class="w-screen h-screen">
	<header class="w-screen bg-white pb-6">
		<div class="container mx-auto max-w-screen-sm flex items-center justify-center">
			<img src="/logo.jpg" alt="Logo de MamaMamifera" class="self-center" width="200" />
		</div>
		<nav class="container mx-auto max-w-screen-md flex justify-between">
			<a href="/" class=" text-coffee-bean px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
			<a href="#" class=" text-coffee-bean px-3 py-2 rounded-md text-sm font-medium">Talleres</a>
			<a href="#" class=" text-coffee-bean px-3 py-2 rounded-md text-sm font-medium">Blog</a>
			<a href="#" class=" text-coffee-bean px-3 py-2 rounded-md text-sm font-medium">Sobre Mi</a>
		</nav>
	</header>
	<slot />
	<footer class="w-screen bg-white pt-6">
		<h2 class="font-sans text-lg text-center font-thin">Contacto</h2>
		<div class="bg-coffee-bean-500 h-12 w-full text-white mt-4 text-center pt-2 font-light">
			©2020 por Nicole Apapacho.
		</div>
	</footer>
</div>
