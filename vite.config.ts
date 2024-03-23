import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    server: {
      port: 3000,
      open: true,
    },
    plugins: [react(), tsconfigPaths()],
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
