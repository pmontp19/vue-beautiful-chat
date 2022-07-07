import { defineConfig } from 'vite'
import path from 'path'
import { createVuePlugin } from 'vite-plugin-vue2'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [createVuePlugin(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'vue-beautiful-chat',
      fileName: (format) => `vue-beautiful-chat.${format}.js`,
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
