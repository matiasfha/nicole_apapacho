<script>
	import '../app.postcss';
	import logoSrc from '$lib/images/logo.jpg';
</script>

<header class="relative bg-white overflow-hidden">
	<div class="container max-w-screen-xl mx-auto flex justify-start ">
		<div class="relative z-10 pb-8 bg-white">
			<div>
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
								<div class="-mr-2 flex items-center md:hidden">
									<button
										type="button"
										class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
										aria-expanded="false"
									>
										<span class="sr-only">Open main menu</span>
										<!-- Heroicon name: outline/menu -->
										<svg
											class="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M4 6h16M4 12h16M4 18h16"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
							<a href="/" class="font-medium text-gray-500 hover:text-gray-900">Inicio</a>

							<a href="/about" class="font-medium text-gray-500 hover:text-gray-900">Sobre Mi</a>

							<a href="/products" class="font-medium text-gray-500 hover:text-gray-900">Talleres</a>

							<a href="/blog" class="font-medium text-gray-500 hover:text-gray-900">Blog</a>
						</div>
					</nav>
				</div>

				<!--
          Mobile menu, show/hide based on menu open state.

          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
				<div
					class="hidden absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
				>
					<div
						class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
					>
						<div class="px-5 pt-4 flex items-center justify-between">
							<div>
								<img class="h-8 w-auto" src={logoSrc} alt="Nicole Apapacho Logo" />
							</div>
							<div class="-mr-2">
								<button
									type="button"
									class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
								>
									<span class="sr-only">Close main menu</span>
									<!-- Heroicon name: outline/x -->
									<svg
										class="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
						</div>
						<div class="px-2 pt-2 pb-3 space-y-1">
							<a
								href="/"
								class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
								>Inicio</a
							>

							<a
								href="/about"
								class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
								>Sobre Mí</a
							>

							<a
								href="/products"
								class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
								>Talleres</a
							>

							<a
								href="/blog"
								class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
								>Blog</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
<main
	class="w-screen h-auto  bg-test pb-24 bg-gradient-to-r from-bouquet-500 via-bouquet-50 to-bouquet-500"
>
	<slot />
</main>
<footer class="w-screen bg-white pt-6">
	<h2 class="font-title text-2xl text-center font-bold py-6 hidden">Contacto</h2>
	<form class="md:max-w-screen-xl mx-8 md:mx-auto pb-12 hidden">
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full px-3">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="nick"
				>
					Nombre
				</label>
				<input
					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="nick"
					type="text"
				/>
			</div>
		</div>
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full px-3">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="email"
				>
					E-mail
				</label>
				<input
					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="email"
					type="email"
				/>
			</div>
		</div>
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full px-3">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="grid-password"
				>
					Mensaje
				</label>
				<textarea
					class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
					id="message"
				/>
			</div>
		</div>
		<div class="md:flex md:items-center">
			<div class="md:w-1/3">
				<button
					class="shadow bg-calltoAction hover:bg-coffee-bean-100 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
					type="button"
				>
					Enviar
				</button>
			</div>
			<div class="md:w-2/3" />
		</div>
	</form>
	<div class="bg-coffee-bean-500 h-12 w-full text-white mt-4 text-center pt-2 font-light">
		©2020 por Nicole Apapacho.
	</div>
</footer>
