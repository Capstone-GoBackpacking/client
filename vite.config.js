import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      containers: '/src/containers',
      components: '/src/components',
      routes: "/src/routes",
      pages: "/src/pages",
      layouts: "/src/layouts",
      assets: "/src/assets"
    }
  }
})
