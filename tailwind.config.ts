import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          light: "#697586",
          DEFAULT: "#1D1D1D",
        },
        accent: {
          100: "#F4F0FD",
          DEFAULT: "#8C5CF1",
        },
        border: {
          DEFAULT: "#9AA4B2",
        },
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "872px",
        },
      },
      fontFamily: {
        "familjen-grotesk": ["Familjen Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
