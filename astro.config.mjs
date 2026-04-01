import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import path from "node:path";

export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        // We don't use Spor's Loader component, so stub out lottie-web
        // to eliminate its ~600 KB from the bundle.
        "lottie-web": path.resolve("./src/stubs/lottie-stub.js"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules/react-dom") || id.includes("node_modules/react/") || id.includes("node_modules/react-is/") || id.includes("node_modules/scheduler/")) {
              return "vendor-react";
            }
            if (
              id.includes("node_modules/@vygruppen/") ||
              id.includes("node_modules/@chakra-ui/") ||
              id.includes("node_modules/@ark-ui/") ||
              id.includes("node_modules/@zag-js/") ||
              id.includes("node_modules/framer-motion/") ||
              id.includes("node_modules/motion/") ||
              id.includes("node_modules/@react-aria/") ||
              id.includes("node_modules/@react-stately/") ||
              id.includes("node_modules/react-aria/") ||
              id.includes("node_modules/react-stately/") ||
              id.includes("node_modules/@emotion/") ||
              id.includes("node_modules/stylis/") ||
              id.includes("node_modules/@floating-ui/") ||
              id.includes("node_modules/@internationalized/")
            ) {
              return "vendor-spor";
            }
            if (id.includes("node_modules/")) {
              return "vendor";
            }
          },
        },
      },
    },
  },
});
