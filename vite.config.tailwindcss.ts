import { defineConfig } from 'vite'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    build: {
        outDir: 'dist/css',
        emptyOutDir: false,
        rollupOptions: {
            input: path.resolve(__dirname, 'lib/styles/main.css'),  // 注意这里是 .css
            output: {
                assetFileNames: 'style.css',
            },
        },
        cssCodeSplit: true,
        minify: true,
    },
    plugins: [
        tailwindcss()
    ]
})
