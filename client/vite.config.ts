import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "client", // 👈 tell Vite root is client/
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  build: {
    outDir: "../public",
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "client/index.html"), // 👈 explicit entry
    },
  },
});
