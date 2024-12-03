import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public', // Changed from 'dist' to 'public'
    assetsDir: 'assets',
    emptyOutDir: true,
    watch: {}, // Enable watch mode
  },
})