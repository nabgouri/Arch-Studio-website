import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Keep this as 'dist'
    assetsDir: 'assets',
    emptyOutDir: true,
    wa
  },
})