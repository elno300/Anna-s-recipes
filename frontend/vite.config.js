import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// För att lägga till shadcn bibliotek
// import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //   },
  // },
})
