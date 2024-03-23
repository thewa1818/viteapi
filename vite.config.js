import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // '/api' にマッチするすべてのリクエストをプロキシします
      '/api': {
        target: 'https://cors-anywhere.herokuapp.com/https://api.punkapi.com/v2', // CORSプロキシ経由でAPIにアクセスします
        changeOrigin: true, // オリジンを変更する
        rewrite: (path) => path.replace(/^\/api/, ''), // リクエストパスの書き換え
      },
    },
  },
});
