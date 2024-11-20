import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/lives/03-news-aggregator/',
  build: {
    outDir: '../../../front-end/lives/03-news-aggregator'
  }
})
