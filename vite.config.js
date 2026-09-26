import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Fixed at build time so prerendered HTML and the hydrating client compute
  // the same CV durations (see src/utils/cvDates.js).
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
  },
})
