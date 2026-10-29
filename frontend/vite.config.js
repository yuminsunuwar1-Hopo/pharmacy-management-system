import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Any request starting with /api is forwarded to Apache (XAMPP).
      // Example: /api/test.php  ->  http://localhost/pharmacy-management-system/backend/api/test.php
      '/api': {
        target: 'http://localhost',
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/api/, '/pharmacy-management-system/backend/api'),
      },
    },
  },
})