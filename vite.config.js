import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'vue-beautiful-chat',
      fileName: (format) => `vue-beautiful-chat.${format}.js`
    },
    rollupOptions: {
      external: ['vue','@vue/composition-api'],
      output: {
        globals: {
          vue: "Vue",
          '@vue/composition-api': 'compositionApi'
        }
      }
    },
    sourcemap: true
  }
})
