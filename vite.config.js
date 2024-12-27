import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ensure compatibility for react-yarn
      'react-tilt': 'react-tilt/dist/index.js',
    },
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
