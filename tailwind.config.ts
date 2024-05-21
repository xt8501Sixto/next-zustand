import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";
import RideTokens from "@rimac-seguros/ride-system-tokens/dist/tailwind/v3/index";
import RideCompositeTokens from "@rimac-seguros/ride-system-tokens/dist/tailwind/v3/utilities";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      ...RideTokens,
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(RideCompositeTokens);
    }),
  ],
};
export default config;
