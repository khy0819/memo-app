import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/memo-app/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://54.180.25.65:3002',
        changeOrigin: true,
      },
    },
  },
})
