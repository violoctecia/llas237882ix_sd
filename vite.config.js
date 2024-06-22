import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
  ],
  server: {
    host: '0.0.0.0', // Укажите серверу слушать на всех IP-адресах
    port: 5173, // Укажите порт, на котором будет работать dev server
    // open: true, // Открыть браузер после запуска сервера (необязательно)
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
})
