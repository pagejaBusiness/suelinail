import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      /* Configuração por formato */
      png: {
        quality: 80, // compressão
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        quality: 80, // conversão para webp
      },
      avif: {
        quality: 70,
      },
      svg: {
        multipass: true,
      },
    }),
  ],
});
