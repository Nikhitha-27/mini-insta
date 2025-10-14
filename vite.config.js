// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // make sure it's installed

export default defineConfig({
  plugins: [react()],
  base: "/mini-insta/", // fine for GH Pages; harmless locally
});
