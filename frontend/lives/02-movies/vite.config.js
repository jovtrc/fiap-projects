import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/lives/02-movies/',
  build: {
    outDir: '../../../front-end/lives/02-movies'
  }
})
