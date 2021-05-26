<script context="module">
	async function loadPosts(fetch) {
		const url = `/api/posts.json`;
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
	// configuration
	export const router = false;
	export const hydrate = false;
	export const prerender = true;
</script>

<svelte:head><title>Nicole Apapacho - Blog</title></svelte:head>

<div class="pt-12">
	{#each posts as post}
		<PostCard {post} />
	{/each}
</div>
