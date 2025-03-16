import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, './src'),
  publicDir: path.resolve(__dirname, './static'),
  base: '/',
  build: {
    outDir: path.resolve(__dirname, './dist'),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          if (/\.(css)$/.test(assetInfo.names[0])) {
            return 'css/[name][extname]';
          }

          return 'assets/[name][extname]';
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  plugins: [
    handlebars(),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      vendor: path.resolve(__dirname, './src/vendor'),

      ui: path.resolve(__dirname, './src/ui'),
      components: path.resolve(__dirname, './src/ui/components'),
      modules: path.resolve(__dirname, './src/ui/modules'),
      pages: path.resolve(__dirname, './src/ui/pages'),
      styles: path.resolve(__dirname, './src/ui/styles'),
      'styles-variables': path.resolve(__dirname, './src/ui/styles/variables.scss'),

      classes: path.resolve(__dirname, './src/classes'),
      abstract: path.resolve(__dirname, './src/classes/abstract'),

      static: path.resolve(__dirname, './static'),
      icons: path.resolve(__dirname, './static/icons'),
    },
  },
});
