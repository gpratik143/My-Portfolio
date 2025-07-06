// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'https://github.com/gpratik143/My-Portfolio', // <-- IMPORTANT
  plugins: [react()],
})
