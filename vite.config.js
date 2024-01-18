import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /* base: "https://karynamisnik.github.io/bee_e-spa/",*/
});
