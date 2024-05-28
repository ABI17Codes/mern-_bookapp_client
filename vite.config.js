import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config() 


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    define: {
    __VALUE__: `"${process.env.URL}"` // Wrapping in "" since it's a string
  },
  
})
