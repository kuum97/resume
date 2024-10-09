import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1B1B1B",
      },
      aspectRatio: {
        a4: "1 / 1.414",
      },
    },
  },
  plugins: [],
};
export default config;
