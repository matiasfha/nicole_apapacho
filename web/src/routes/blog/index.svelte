<script context="module">
	async function loadPosts() {
		const allPosts = import.meta.glob('../blog/*.svx');

		let posts = [];
		for (let path in allPosts) {
			posts.push(
				allPosts[path]().then(({ metadata }) => {
					const slug = path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;
					return { path, metadata: { ...metadata, slug } };
				})
			);
		}
		return await Promise.all(posts);
	}
	export async function load() {
		const postsResponse = await loadPosts();

		return {
			props: {
				posts: postsResponse
			}
		};
	}
</script>

<script>
	import PostCard from '$lib/components/PostCard.svelte';
	export let posts;
</script>

<svelte:head><title>Nicole Apapacho - Blog</title></svelte:head>

<header class="relative w-screen bg-white h-48 flex items-center justify-center">
	<div class="text-center w-full md:w-2/3 xl:w-1/2 mx-auto">
		<h4 class="font-lifeSavers font-medium text-primary text-base md:text-xl uppercase text-tle">
			Mira mís últimos artículos
		</h4>
		<h2
			class="font-lifeSavers font-bold text-title text-3xl sm:text-4xl lg:text-5xl tracking-wider leading-tight text-coffee-bean-600"
		>
			También tengo un blog!
		</h2>
		<div class="h-1 mt-4 md:mt-6 w-2/5 mx-auto border-solid border-primary border-t-2" />
	</div>
</header>
<section class="container pb-24 lg:pb-40 z-20 relative mx-auto px-4 md:px-0 pt-2">
	<div class="pt-4 md:pt-24 grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center ">
		<!-- CARD-->
		{#each posts as post}
			<PostCard {post} />
		{/each}
	</div>
</section>
