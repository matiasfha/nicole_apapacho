<script context="module">
	async function loadPosts(fetch) {
		const url = `/api/blog/posts.json`;
		const res = await fetch(url);
		const json = await res.json();

		if (res.ok) {
			return {
				status: res.status,
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
	export async function load({ page, fetch, session, context }) {
		const postsResponse = await loadPosts(fetch);
		if (postsResponse.status === 200) {
			return {
				props: {
					...postsResponse.props
				}
			};
		}

		return {
			...postsResponse
		};
	}
</script>

<script>
	import PostCard from '$lib/components/PostCard.svelte';
	export let posts;
</script>

<svelte:head><title>Nicole Apapacho - Blog</title></svelte:head>

<header class="relative w-screen bg-white pb-24 h-96 pt-12">
	<div class="text-center w-full md:w-2/3 xl:w-1/2 mx-auto">
		<h4 class="font-body font-medium text-primary text-base md:text-xl uppercase text-tle">
			Mira mís últimos artículos
		</h4>
		<h2
			class="font-body font-bold text-title text-3xl sm:text-4xl lg:text-5xl tracking-wider leading-tight text-coffee-bean-400"
		>
			También tengo un blog!
		</h2>
		<div class="h-1 mt-4 md:mt-6 w-2/5 mx-auto border-solid border-primary border-t-2" />
	</div>
</header>
<section class="container pb-24 lg:pb-40 z-20 relative mx-auto px-4 md:px-0 pt-2">
	<div class="pt-24 grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center ">
		<!-- CARD-->
		{#each posts as post}
			<PostCard {post} />
		{/each}
	</div>
</section>
