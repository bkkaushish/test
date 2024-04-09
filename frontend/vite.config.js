import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': 'http://localhost:9000'    //proxy used avoid repeated writeof url with get request, 2)avoit cors policy (hack to avoid)
    }
  },
  plugins: [react()],
})
