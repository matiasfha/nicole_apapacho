<script>
	export let title;
	export let price;
	export let image;
</script>

<header class="flex item-end flex-col justify-center relative mt-8 h-[400px] ">
	<img src={image} class="object-cover object-center max-h-[400px]" alt="Header" />
</header>
<article class="max-w-screen-lg prose prose-lg mx-auto px-4 mt-8 md:px-0">
	<h1 class="font-lifeSavers text-center">{title}</h1>
	<div class="font-amsterdam pb-8">
		<slot />
	</div>
</article>
<footer
	class="pt-10 border-t-2 border-bouquet-500 grid grid-cols-2 gap-6 max-w-screen-lg px-4 md-px-8 mx-auto"
>
	<div class="font-body">
		<h2 class="text-lg">LETRA CHICA EN GRANDE:</h2>

		<p class="text-sm mt-2 leading-tight font-thin">
			UNA VEZ RESERVADO TU CUPO, NO HAY POSIBILIDAD DE DEVOLUCIÓN DEL DINERO, a menos que otra mujer
			ocupe tu lugar y para eso lo organizas tú, es decir, tú puedes publicar que no puedes asistir
			a tal círculo y que vendes tu entrada. Se completan tan rápido que al reservar tu cupo dejas
			fuera a otra mujer. Los hijxs son bievenidxs siempre. PERO POR FAVOR DATE UN ESPACIO! Y SI
			ESTAS SOLA CON HIJXS, SON BIEVENIDXS!!!
		</p>
	</div>
	<div class="font-body">
		<h2 class="text-lg">Medio de pago:</h2>
		<h3 class="text-md font-amsterdam">Valor: ${price}</h3>
		<h3 class="text-md">Transferencia Bancaria</h3>
		<ul>
			<li>Banco: Banc de Chile</li>
			<li>Rut: 16.223.122-7</li>
			<li>Email: nicole.roman.salas@gmail.com</li>
			<li>Cuenta Corriente: 041-03796-00</li>
		</ul>
		<h3 class="text-md">Paypal</h3>
		<a href="https://www.paypal.com/paypalme/nicoleromansalas">Pagar via Paypal</a>
	</div>
</footer>
