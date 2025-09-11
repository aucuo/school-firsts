import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { getHtmlFiles, forceReload } from './config/utils.js'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject'

export default defineConfig({
  base: './',
  root: 'src',
  publicDir: '../public',

  css: {
    devSourcemap: true
  },

  plugins: [
    tsconfigPaths(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
      png: {
        quality: 85,
      },
      jpeg: {
        quality: 85,
      },
      jpg: {
        quality: 85,
      },
      tiff: {
        quality: 85,
      },
    }),
    forceReload(),
    injectHTML()
  ],

  server: {
    port: 3000,
    open: true,
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        studyDirections: resolve(__dirname, 'src/pages/studyDirections/index.html'),
        profStudy: resolve(__dirname, 'src/pages/studyDirections/index.html'),
      },
      output: {
        // Путь для JS и CSS — прямо в корень
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    },
  },
})
