<script>
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	// Props
	export let workshopName = '';
	export let goToPage = '';
	export let callbackPromise;

	if (browser) {
		function isCalendlyEvent(e) {
			return e.data.event && e.data.event.indexOf('calendly') === 0;
		}
		window?.addEventListener('message', (e) => {
			if (isCalendlyEvent(e)) {
				if (e.data.event === 'calendly.event_scheduled') {
					goToPage && goto(goToPage);
				}
			}
		});
	}
	const openCalendly = () => {
		Calendly?.initPopupWidget({
			url: import.meta.env.VITE_CALENDLY_URL,
			prefill: {
				customAnswers: {
					taller: workshopName
				}
			}
		});
	};

	const onClick = async () => {
		if (callbackPromise) {
			await callbackPromise();
		}
		openCalendly();
	};
</script>

<div on:click={onClick} class="w-full">
	<slot />
</div>
