import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  envPrefix: 'VITE_' // This ensures only VITE_ variables are exposed to Vite
});
