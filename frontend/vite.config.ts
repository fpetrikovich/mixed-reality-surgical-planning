import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  let env = process.env;
  if (mode !== "production") {
    env = loadEnv(mode, process.cwd());
  }
  const port = env.VITE_FRONTEND_PORT ? parseInt(env.VITE_FRONTEND_PORT) : 3000;
  return {
    server: {
      port: port
    },
    // https://vite.dev/config/preview-options#preview-port
    preview: {
      port: port,
    },
    plugins: [
      react(),
      tailwindcss(),
    ],
  };
});
