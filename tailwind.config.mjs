/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 8s linear infinite',
				'spin-slowest': 'spin 13s linear infinite',
			},
			fontFamily: {
				helvetica: ['Helvetica LT Black', 'sans-serif'],
				basement: ['Basement Grotesque Black', 'sans-serif'],
				arial: ['Arial', 'sans-serif'],
			},
			colors: {
				primary: '#F90000',
				secondary: '#f5009b',
				semiblack: '#191919',
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
