/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			se: "450px",
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			typography: {
				DEFAULT: {
					css: {
						'blockquote p:first-of-type::before': false,
						'blockquote p:first-of-type::after': false,
					},
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
};
