import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        },
      },
      chunkSizeWarningLimit: 1000,
      sourcemap: false,
      minify: 'esbuild',
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', 'i18next', 'react-i18next'],
    },
    server: {
      proxy: env.VITE_ANTHROPIC_API_URL
        ? {
            '/api/anthropic': {
              target: env.VITE_ANTHROPIC_API_URL,
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api\/anthropic/, ''),
            },
          }
        : undefined,
    },
  };
});
