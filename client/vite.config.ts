import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log(">>> [vite.config] Using CLIENT config <<<");
console.log(">>> [vite.config] __dirname:", __dirname);
console.log(">>> [vite.config] NODE_ENV:", process.env.NODE_ENV);

export default defineConfig({
  root: __dirname,   // force root = client
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "../shared"),
      "@assets": path.resolve(__dirname, "../attached_assets"),
    },
  },
  build: {
    outDir: "../public",   // put built files in repo/public
    emptyOutDir: true,
  },
});
