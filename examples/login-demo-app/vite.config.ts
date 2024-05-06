import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import dayjs from "dayjs";
import rollupNodePolyFill from "rollup-plugin-polyfill-node";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import svgr from "vite-plugin-svgr";

const alias = {
  "@src": "/src",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodeResolve(),
    commonjs(), // so Rollup can convert `ms` to an ES module
    replace({
      __buildVersion: dayjs().toISOString(),
    }),
    svgr({ include: "**/*.svg?r" }),
  ],

  resolve: {
    alias: alias,
  },
  build: {
    rollupOptions: {
      plugins: [
        // Enable rollup polyfills plugin
        // used during production bundling
        rollupNodePolyFill(),
      ],
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext",
      define: {
        global: "globalThis",
      },
      supported: {
        bigint: true,
      },
      // 开发阶段用到
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
          process: true,
        }),
      ],
    },
  },

  server: {
    host: "0.0.0.0",
    port: 8080,
    proxy: {
      "/api": {
        target: "https://api.zkbridge.com",
        changeOrigin: true,
        bypass: (req, res) => {
          delete req.headers["origin"];
        },
      },
    },
    watch: {
      usePolling: true,
    },
  },
});
