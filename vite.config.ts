import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const jsToBottomNoModule = () => {
  return {
    name: 'no-attribute',
    transformIndexHtml(html) {
      html = html.replace(`type="module" crossorigin`, '');
      let scriptTag = html.match(/<script[^>]*>(.*?)<\/script[^>]*>/)[0];
      console.log('\n SCRIPT TAG', scriptTag, '\n');
      html = html.replace(scriptTag, '');
      html = html.replace('<!-- # JS SCRIPT -->', scriptTag);
      return html;
    },
  };
};
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [react(), tsconfigPaths(), jsToBottomNoModule()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      '@': resolve(__dirname, 'src'),
    },
  },
  base: './',
});
