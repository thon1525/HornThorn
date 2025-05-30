import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-tilt': 'react-tilt/dist/index.js',
    },
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei'],  // <--- add this
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
