const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");

module.exports = {
	purge: {
		content: [
			"./src/**/*.{html,js,svelte,ts}",
		],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			],
			keyframes: true,
		},
	},
	theme: {
		extend: {
			fontFamily: {
				'workSans': ['Work Sans', 'sans'],
				'bitter': ['Bitter', 'sans']
			},
			colors: {
				'primary': '#A8879D',
				'calltoAction': '#f57E9A',

				'coffee-bean': {
					DEFAULT: '#2C1310',
					'50': '#FBCCC5',
					'100': '#BD574B',
					'200': '#9C4339',
					'300': '#77332B',
					'400': '#51231E',
					'500': '#2C1310',
					'600': '#070302',
					'700': '#000000',
					'800': '#000000',
					'900': '#000000'
				},
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/forms'),
	],
};
