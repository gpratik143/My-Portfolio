import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/My-Portfolio/', // 👈 VERY IMPORTANT for GitHub Pages
  plugins: [react()],
})
