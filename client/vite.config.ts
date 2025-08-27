import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: __dirname,   // force root to client
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),           // use @ for client/src
      "@shared": path.resolve(__dirname, "../shared"),
      "@assets": path.resolve(__dirname, "../attached_assets"),
    },
  },
  build: {
    outDir: "../public",   // build into repo/public for Vercel
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: `assets/[name]-[hash].[ext]`,
        chunkFileNames: `assets/[name]-[hash].js`,
        entryFileNames: `assets/[name]-[hash].js`,
      }
    }
  },
});
