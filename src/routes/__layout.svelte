<script>
	import '../app.postcss';
	import logoSrc from '$lib/images/logo.jpg';
</script>

<header class="w-screen bg-white pb-6">
	<div class="container mx-auto max-w-screen-md flex flex-col items-center justify-center">
		<img src={logoSrc} alt="Logo de MamaMamifera" class="self-center" width="120" />
		<h1 class="text-xl md:text-3xl text-coffee-bean-600 font-bold font-title pt-6 pb-4 text-center">
			Maternidad, Lactancia, Crianza y Sexualidad
		</h1>
	</div>
	<div
		class="hidden md:block container max-w-screen-md flex content-center justify-center mx-auto pb-8"
	>
		<a href="https://facebook.com" class="text-calltoAction">
			<svg
				class="fill-current"
				width="26"
				height="26"
				aria-hidden="true"
				role="img"
				focusable="false"
				viewBox="0 0 24 24"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				><path
					d="M20.007,3H3.993C3.445,3,3,3.445,3,3.993v16.013C3,20.555,3.445,21,3.993,21h8.621v-6.971h-2.346v-2.717h2.346V9.31 c0-2.325,1.42-3.591,3.494-3.591c0.993,0,1.847,0.074,2.096,0.107v2.43l-1.438,0.001c-1.128,0-1.346,0.536-1.346,1.323v1.734h2.69 l-0.35,2.717h-2.34V21h4.587C20.555,21,21,20.555,21,20.007V3.993C21,3.445,20.555,3,20.007,3z"
				/></svg
			>
		</a>
		<a href="https://facebook.com" class="text-calltoAction">
			<svg
				class="fill-current"
				width="26"
				height="26"
				aria-hidden="true"
				role="img"
				focusable="false"
				viewBox="0 0 24 24"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				><path
					d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"
				/></svg
			>
		</a>
	</div>
	<nav class="w-screen flex justify-center content-center bg-gradient-to-r from-test to-primary">
		<a
			href="/"
			class=" text-coffee-bean-800 px-4 md:px-12 py-2 rounded-md text-md font-medium transition-colors duration-200 ease-in-out hover:text-calltoAction"
			>Inicio</a
		>
		<a
			href="/products"
			class=" text-coffee-bean-800 px-4 md:px-12 py-2 rounded-md text-md font-medium transition-colors duration-200 ease-in-out hover:text-calltoAction"
			sveltekit:prefetch>Talleres</a
		>
		<a
			href="/blog"
			class=" text-coffee-bean-800 px-4 md:px-12 py-2 rounded-md text-md font-medium transition-colors duration-200 ease-in-out hover:text-calltoAction"
			sveltekit:prefetch>Blog</a
		>
		<a
			href="/about"
			class=" text-coffee-bean-800 px-4 md:px-12 py-2 rounded-md text-md font-medium transition-colors duration-200 ease-in-out hover:text-calltoAction"
			sveltekit:prefetch>Sobre Mi</a
		>
	</nav>
</header>
<main class="w-screen h-auto  bg-test pb-24 bg-gradient-to-r from-test to-primary">
	<div class="container max-w-screen-sm md:max-w-screen-lg px-8 md:px-0 md:mx-auto">
		<slot />
	</div>
</main>
<footer class="w-screen bg-white pt-6">
	<h2 class="font-title text-2xl text-center font-bold py-6">Contacto</h2>
	<form class="md:max-w-screen-md mx-8 md:mx-auto pb-12">
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
