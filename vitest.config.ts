import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    include: ['packages/**/*.{test,spec}.{ts,tsx}', 'tests/**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
  resolve: {
    alias: {
      '@frutiger.js/core': resolve(__dirname, 'packages/core/src'),
      '@frutiger.js/react': resolve(__dirname, 'packages/react/src'),
      '@frutiger-js/core': resolve(__dirname, 'packages/core/src'),
      '@frutiger-js/react': resolve(__dirname, 'packages/react/src'),
    },
  },
});
