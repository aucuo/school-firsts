import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { getHtmlFiles, forceReload } from './config/utils.js'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

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
  ],

  server: {
    port: 3000,
    open: true,
  },

  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: Object.fromEntries(
        getHtmlFiles('src').map((file) => [
          file.replace(/^src[\\/]/, '').replace(/\.html$/, ''),
          file,
        ])
      ),
      output: {
        // Путь для JS и CSS — прямо в корень
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    },
  },
})
