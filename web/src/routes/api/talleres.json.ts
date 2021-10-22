async function getPosts() {
	const modules = import.meta.glob(`../talleres/*.svx`);
    
	const postPromises = [];
	for (const [path, resolver] of Object.entries(modules)) {
        
        const promise = resolver().then((post) => {
		    const slug = path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;
            console.log({ post, m: post.metadata}) 
			return {
				slug,
				...post.metadata
			};
		});
		postPromises.push(promise);
	}

	const posts = await Promise.all(postPromises);
	return posts.sort((a, b) => {
		const aDate = new Date(a.date).getTime();
		const bDate = new Date(b.date).getTime();
		return aDate < bDate ? 1 : -1;
	});
}


export async function get() {
	const talleres = await getPosts();
	return {
		body: talleres
	};
}
