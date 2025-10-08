import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/TP4-LENGUAJES4/', // 👈 nombre correcto del repo
})
