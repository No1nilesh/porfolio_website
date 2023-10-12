// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500, // Set it to a higher value like 1000 (1 MB)
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    outDir: 'build', // Set the output directory to 'build'
  },
  assetsInclude: ['src/assets/**/*'] // Additional config for asset handling
});
