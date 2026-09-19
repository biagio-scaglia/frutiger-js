import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@frutiger-js/core/styles.css': resolve(__dirname, '../../packages/core/src/index.css'),
      '@frutiger-js/core': resolve(__dirname, '../../packages/core/src/index.css'),
      '@frutiger-js/react': resolve(__dirname, '../../packages/react/src/index.ts'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
