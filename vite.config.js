import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-icons':'@react-icons/all-files',
      '@heroicons/react':'@heroicons/react/24',
    }
  },
  build:{
    rollupOptions: {
      external: ['react-icons', '@heroicons/react']
    }
  }
});
