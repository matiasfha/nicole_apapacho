<script>
	import '../app.postcss';
	import logoSrc from '$lib/images/logo.jpg';
</script>

<header class="relative bg-white overflow-hidden">
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
								<span class="sr-only">Nicole Apapacho</span>
								<img class="h-8 w-auto sm:h-16" src={logoSrc} alt="Nicole Apapacho Logo" />
							</a>
						</div>
					</div>
					<div
						class="flex flex-row gap-6 justify-between md:block pl-4 md:pl-0 md:ml-10 md:pr-4 md:space-x-8 text-xs md:text-base md:font-medium font-body"
					>
						<a href="/" class="text-gray-500 hover:text-gray-900">Inicio</a>

						<a href="/about" class="text-gray-500 hover:text-gray-900">Sobre Mi</a>

						<a href="/products" class="text-gray-500 hover:text-gray-900">Talleres</a>

						<a href="/blog" class="text-gray-500 hover:text-gray-900">Blog</a>
					</div>
				</nav>
			</div>
		</div>
	</div>
</header>
<main class="w-screen h-auto  bg-test pb-24 bg-gradient-to-r from-white to-bouquet-50">
	<slot />
</main>
<footer class="w-screen bg-white pt-6">
	<div class="flex items-start justify-center mt-2 sm:mt-0">
		<a
			href="http://www.facebook.com"
			class="border border-calltoAction rounded-full px-1 shadow flex items-center justify-center mr-3"
		>
			<i class="bx bxl-facebook text-calltoAction hover:text-coffee-bean-50 text-lg" />
		</a>

		<a
			href="http://www.instagram.com"
			class="border border-calltoAction rounded-full px-1 shadow flex items-center justify-center"
		>
			<i class="bx bxl-instagram text-calltoAction hover:text-coffee-bean-50 text-lg" />
		</a>
	</div>
	<div class="bg-coffee-bean-500 h-12 w-full text-white mt-4 text-center pt-2 font-light">
		©2020 por Nicole Apapacho.
	</div>
</footer>
