import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import sveltePreprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],

    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    kit: {
		adapter: vercel(),
	},

    preprocess: [mdsvex(mdsvexConfig), sveltePreprocess({
        defaults: {
            style: "postcss",
        },
        postcss: true
    })]
};

export default config;