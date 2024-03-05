import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-icons': '@react-icons/all-files'
    }
  },
  build:{
    rollupOptions: {
      external: ['react-icons']
    }
  }
});
