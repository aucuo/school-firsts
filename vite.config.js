import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject'

const _dirname = import.meta.dirname;

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
    injectHTML()
  ],

  server: {
    port: 3000,
    open: true,
  },

  resolve: {
    alias: {
      '@': resolve(_dirname, 'src'),
    },
  },

  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(_dirname, 'src/index.html'),

        study: resolve(_dirname, 'src/pages/study/index.html'),
        studyProf: resolve(_dirname, 'src/pages/study/prof/index.html'),
        studyDirection: resolve(_dirname, 'src/pages/study/direction/index.html'),
        studyDopprof: resolve(_dirname, 'src/pages/study/dopprof/index.html'),
        studyInfoServices: resolve(_dirname, 'src/pages/study/infoservices/index.html'),

        about: resolve(_dirname, 'src/pages/about/index.html'),
      },
      output: {
        // Путь для JS и CSS — прямо в корень
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    },
  },
})
