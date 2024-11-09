import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['bootstrap'] // This tells Vite/Rollup to treat 'bootstrap' as an external dependency
    }
  }
})
