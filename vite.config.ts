import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_KEY": JSON.stringify(process.env.VITE_KEY),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
