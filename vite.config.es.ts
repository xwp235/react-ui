import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import dts from 'vite-plugin-dts'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
    define: {
        'process.env.NODE_ENV': '"production"'
    },
    build: {
        outDir: 'dist/es',
        minify: 'esbuild',
        sourcemap:  false,
        lib: {
            entry: resolve(__dirname, 'lib/index.ts'),
            name: 'ReactUI',
            fileName: format => `react-ui.${format}.js`,
            formats: ['es']
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        },
    },
    plugins: [
        react(),
        dts()
    ]
})
