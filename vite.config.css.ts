import { defineConfig } from 'vite'
import path from 'node:path'

export default defineConfig({
    build: {
        outDir: 'dist/css',
        emptyOutDir: false,
        rollupOptions: {
            input: path.resolve(__dirname, 'lib/styles/index.scss'),
            output: {
                assetFileNames: 'react-ui.min.css',
            },
        },
        cssCodeSplit: false,
        minify: true,
    }
})
