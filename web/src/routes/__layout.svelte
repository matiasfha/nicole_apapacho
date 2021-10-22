<script>
	import '../app.postcss';
	import logoSrc from '$lib/images/logo.jpg';
</script>

<header class="relative bg-white">
	<div class="container max-w-screen-xl mx-auto flex justify-start ">
		<div class="relative z-10 pb-0 md:pb-4 mb-8 md:mb-0 bg-white">
			<div class="relative pt-6 px-6 md:px-0">
				<nav
					class="relative flex items-center justify-between sm:h-10 lg:justify-start"
					aria-label="Global"
				>
					<div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
						<div class="flex items-center justify-between w-full md:w-auto">
							<a href="/">
								<span class="sr-only">Nicole Román</span>
								<img class="h-8 w-auto sm:h-16" src={logoSrc} alt="Nicole Román Logo" />
							</a>
						</div>
					</div>
					<div
						class="flex flex-row gap-6 justify-between md:block pl-4 md:pl-0 md:ml-10 md:pr-4 md:space-x-8 text-xs md:text-base md:font-medium font-body"
					>
						<a href="/" class="text-gray-500 hover:text-gray-900">Inicio</a>

						<a href="/about" class="text-gray-500 hover:text-gray-900">Sobre Mi</a>

						<a href="/talleres" class="text-gray-500 hover:text-gray-900">Talleres</a>

						<a href="/blog" class="text-gray-500 hover:text-gray-900">Blog</a>
					</div>
				</nav>
			</div>
		</div>
	</div>
</header>
<main class="w-screen h-auto pb-24 bg-gradient-to-r from-white to-bouquet-50">
	<slot />
</main>

<footer class="w-screen bg-white pt-6">
	<div class="flex items-start justify-center mt-2 sm:mt-0">
		<a
			href="mailto:nicole.roman.salas@gmail.com"
			class="border border-calltoAction rounded-full px-1 shadow flex items-center justify-center mr-3"
		>
			<i class="bx text-calltoAction hover:text-coffee-bean-50 text-lg">✉️</i>
		</a>

		<a
			href="http://www.instagram.com/nicoleroman.cl"
			class="border border-calltoAction rounded-full px-1 shadow flex items-center justify-center mr-3"
		>
			<i class="bx bxl-instagram text-calltoAction hover:text-coffee-bean-50 text-lg" />
		</a>
		<a
			href="https://wa.me/56973371249"
			class="border border-calltoAction rounded-full px-1 shadow flex items-center justify-center"
		>
			<i class="bx bxl-whatsapp text-calltoAction hover:text-coffee-bean-50 text-lg" />
		</a>
	</div>
	<div class="bg-coffee-bean-500 h-12 w-full text-white mt-4 text-center pt-2 font-light">
		©2021 por Nicole Roman.
	</div>
</footer>

<a
	href="https://wa.me/56973371249"
	class="isolate fixed h-14 w-14 bottom-2 right-10 text-white bg-green-700 rounded-full shadow-md z-20 px-1 flex items-center justify-center transform transition ease-in-out duration-700 hover:scale-105 hover:shadow-lg hover:bg-green-600"
>
	<i class="bx bxl-whatsapp text-white text-4xl" />
</a>
