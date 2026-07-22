
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { primary: "#8DC63F", accent: "#0078FF", dark: "#1A1A1A", light: "#F9FAFB" }
      }
    }
  },
  plugins: [],
};
export default config;
