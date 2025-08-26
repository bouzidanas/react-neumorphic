import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: {
        index: resolve(fileURLToPath(new URL('.', import.meta.url)), 'src/index.ts'),
        'toggle/index': resolve(fileURLToPath(new URL('.', import.meta.url)), 'src/components/toggle/index.ts'),
      },
      name: 'ReactNeumorphic',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        const extension = format === 'es' ? 'esm.js' : 'cjs.js'
        return `${entryName}.${extension}`
      }
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
