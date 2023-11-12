import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      height: {
        "page-height": "calc(100vh - 4rem)",
      },
      minHeight: {
        "page-height": "calc(100vh - 4rem)",
      },
      boxShadow: {
        "3xl": "3px 2px 0px 0px #1F1233",
        "4xl": "4px 3px 0px 0px #1F1233",
      },
      colors: {
        main: {
          light: "#FAF4F0",
          dark: "#1F1233",
        },
        purple: {
          10: "#AE7AFF",
          20: "#8B62CC",
          30: "#EFE4FF",
        },
        green: {
          10: "#98E9AB",
          20: "#EAFBEE",
        },
        red: {
          10: "#E99898",
          20: "#FBEAEA",
        },
        gray: {
          10: "#5F646D",
          20: "#E7E8E9",
        },
        yellow: {
          10: "#FAE8A4",
          20: "#FEFAED",
        },
      },
    },
  },
  plugins: [],
};
export default config;
