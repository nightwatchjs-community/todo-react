import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import nightwatchPlugin from 'vite-plugin-nightwatch'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nightwatchPlugin({
      componentType: 'react'
    })
  ]
})
 