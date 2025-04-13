import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Portfolio/", // 👈 use your actual repo name here
  plugins: [react()],
});
