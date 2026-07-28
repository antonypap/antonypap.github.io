import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    ...(mode === 'analyze' ? [visualizer({ filename: 'stats.html' })] : []),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
}));
