import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  server: {
    port: Number(process.env.VITE_PORT) || 8888,
    open: true,
  },
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
