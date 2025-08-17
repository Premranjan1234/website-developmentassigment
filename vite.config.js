import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/website-developmentassigment/', // ✅ Only path, with leading and trailing slash
  plugins: [
    react(),
    tailwindcss(),
  ],
})
