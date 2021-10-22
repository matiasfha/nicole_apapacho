const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/talleres/index.svelte"),
	() => import("../../../src/routes/talleres/circulo-mujeres.svx"),
	() => import("../../../src/routes/about/index.svelte"),
	() => import("../../../src/routes/blog/index.svelte"),
	() => import("../../../src/routes/blog/primer-post.svx")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/talleres/index.svelte
	[/^\/talleres\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/talleres/circulo-mujeres.svx
	[/^\/talleres\/circulo-mujeres\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/about/index.svelte
	[/^\/about\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/blog/index.svelte
	[/^\/blog\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/blog/primer-post.svx
	[/^\/blog\/primer-post\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/api/instagram.json.ts
	[/^\/api\/instagram\.json$/],

	// src/routes/api/talleres.json.ts
	[/^\/api\/talleres\.json$/],

	// src/routes/api/pages.json.ts
	[/^\/api\/pages\.json$/]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];