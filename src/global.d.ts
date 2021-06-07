/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
	VITE_API: string;
	VITE_PRISMIC_TOKEN: string;
	VITE_REVENIU_KEY: string;
	VITE_PAYMENT_CALLBACK: string;
	VITE_REVENIU_URL: string;
	VITE_CALENDLY_URL: string;
}
