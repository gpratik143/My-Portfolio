import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/My-Portfolio/', // <- Important for GitHub Pages
  plugins: [react()]
});
