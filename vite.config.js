import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
    base: "/MyKino",
    optimizeDeps: {
        include: ['react-router-dom'],
    },
    plugins: [
        react(),
        legacy({
            targets: ['ie >= 11'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime']
        })
    ]
})