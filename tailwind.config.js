/** @type {import('tailwindcss').Config} */

const dark_pink_words = "#cecac3";
const dark_pink_others = "#e1dfdb";

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
      colors: {
        pink: {
          dark_words: dark_pink_words,
          dark_opher: dark_pink_others,
        },
      },
      typography: ({ theme }) => ({
        customized: {
          css: {
            "blockquotek p:first-of-type::before": false,
            "blockquotek p:first-of-type::after": false,

            "--tw-prose-body": theme("colors.gray[800]"),
            "--tw-prose-headings": theme("colors.gray[800]"),
            "--tw-prose-lead": theme("colors.gray[700]"),
            "--tw-prose-links": theme("colors.gray[800]"),
            "--tw-prose-bold": theme("colors.gray[800]"),
            "--tw-prose-counters": theme("colors.gray[600]"),
            "--tw-prose-bullets": theme("colors.gray[400]"),
            "--tw-prose-hr": theme("colors.gray[300]"),
            "--tw-prose-quotes": theme("colors.gray[500]"),
            "--tw-prose-quote-borders": theme("colors.gray[300]"),
            "--tw-prose-captions": theme("colors.gray[700]"),
            "--tw-prose-code": theme("colors.gray[800]"),
            "--tw-prose-pre-code": theme("colors.gray[100]"),
            "--tw-prose-pre-bg": theme("colors.gray[800]"),
            "--tw-prose-th-borders": theme("colors.gray[300]"),
            "--tw-prose-td-borders": theme("colors.gray[200]"),

            // pink[30] can be gray[200] too
            "--tw-prose-invert-body": theme("colors.pink[30]"),
            "--tw-prose-invert-headings": theme("colors.pink[30]"),
            "--tw-prose-invert-lead": theme("colors.pink[30]"),
            "--tw-prose-invert-links": theme("colors.pink[30]"),
            "--tw-prose-invert-bold": theme("colors.pink[30]"),
            "--tw-prose-invert-counters": theme("colors.pink[30]"),
            "--tw-prose-invert-bullets": theme("colors.pink[30]"),
            "--tw-prose-invert-hr": theme("colors.pink[30]"),
            "--tw-prose-invert-quotes": theme("colors.pink[40]"),
            "--tw-prose-invert-quote-borders": theme("colors.pink[40]"),
            "--tw-prose-invert-captions": theme("colors.pink[30]"),
            "--tw-prose-invert-code": theme("colors.pink[30]"),
            "--tw-prose-invert-pre-code": theme("colors.pink[30]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.pink[30]"),
            "--tw-prose-invert-td-borders": theme("colors.pink[30]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
