/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";
import tsconfigPaths from 'vite-tsconfig-paths';
import eslint from 'vite-plugin-eslint2';
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { fileURLToPath } from "url";
import path from 'node:path';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
      tailwindcss(),
      tsconfigPaths(),
      checker({ typescript: true }),
      eslint(),
    
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "zod",
        "react-hook-form", 
        "@hookform/resolvers", 
        "@hookform/resolvers/zod",
        "@radix-ui/react-checkbox",
        "@radix-ui/react-label",
        "@radix-ui/react-radio-group",
        "@radix-ui/react-select",
        "@radix-ui/react-switch",
        "@radix-ui/react-dropdown-menu",
        "@radix-ui/react-separator",
        "@radix-ui/react-slot",
        "@radix-ui/react-avatar",
        "lucide-react",
        "class-variance-authority",
        "tailwind-merge",
        "clsx",
        "tailwindcss"
      ],
      output: [
        {
          format: "es",
          dir: "dist",
          entryFileNames: "[name].js",
          chunkFileNames: "[name]-[hash].js",
          preserveModules: true,
          preserveModulesRoot: "src",
          exports: "named",
        },
        {
          format: "cjs",
          dir: "dist/cjs",
          entryFileNames: "[name].cjs",
          chunkFileNames: "[name]-[hash].cjs",
          preserveModules: true,
          preserveModulesRoot: "src",
          exports: "named",
        }
      ],
    },
    sourcemap: true,
    minify: false, // Disable minification for better tree shaking in consuming apps
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
        storybookTest({
          configDir: path.join(__dirname, '.storybook')
        })
      ],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
} as any);
