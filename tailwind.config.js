/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Atkinson Hyperlegible', 'sans-serif']
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), 'prettier-plugin-tailwindcss']
};
