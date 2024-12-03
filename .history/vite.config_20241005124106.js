import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/__/firebase': {
        target: 'http://127.0.0.1:9000/',
        changeOrigin: true,
      },
      // Add other Firebase services you're using, for example:
      '/api': {
        target: 'http://127.0.0.1:5001/', // Functions emulator
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
})