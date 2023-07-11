import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    istanbul({
      include: 'src/*',
      exclude: ['node_modules'],
      extension: [ '.js', '.ts', '.jsx', '.tsx',  ],
      requireEnv: true,
      checkProd: true,
    }),
  ],
})
