import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    server: {
      port: 3000,
      open: true,
    },
    plugins: [react(), svgr({ include: '**/*.svg' })],
    resolve: {
      alias: {
        src: '/src',
        components: '/src/components',
        '@': resolve(__dirname, 'src'),
      },
    },
    base: '/',
  };
  if (command !== 'serve') {
    config.base = '/booking-system-frontend/';
  }
  return config;
});
