import defaultTheme from "tailwindcss/defaultTheme";
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        headings: ["Annie Use Your Telescope", ...defaultTheme.fontFamily.sans],
        accent: ["Abhaya Libre", ...defaultTheme.fontFamily.sans],
      },
      background: {
        gradient: [
          "linear-gradient(90deg, hsla(0, 0%, 100%, 1) 0%, hsla(345, 89%, 93%, 1) 51%, hsla(344, 89%, 86%, 1) 100%)",
        ],
      },
      keyframes: {
        fillSlow: {
          "0%": { fill: "hsla(0, 0%, 100%, 1)" },
          "100%": { fill: "hsla(344, 89%, 86%, 1)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        fill: "fillSlow 0.5s ease-in forwards",
        fade: "fadeIn .5s ease-in-out",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
