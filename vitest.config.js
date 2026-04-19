import {defineConfig} from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {fileURLToPath} from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    plugins: [vue()],
    test: {
        environment: 'jsdom',
        include: ['src/tests/**/*.test.js']
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@views': path.resolve(__dirname, './src/views'),
            '@models': path.resolve(__dirname, './src/models'),
            '@assets': path.resolve(__dirname, './src/assets')
        }
    }
})
