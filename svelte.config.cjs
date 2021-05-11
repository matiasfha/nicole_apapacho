const sveltePreprocess = require('svelte-preprocess');
import vercel from '@sveltejs/adapter-vercel';
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	adapter: vercel(),
	preprocess: [
		sveltePreprocess({
			defaults: {
				style: "postcss",
			},
			postcss: true
		}),
	]
};
