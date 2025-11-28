import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";

// ! vite, by default, ignores "normal" .env file variables, like
// JWT_TOKEN. it will ONLY load variables prefixes with VITE_
// however: we can specify if should load ALL contents of .env
// using the loadEnv function for tests
export default defineConfig(({ mode }) => ({
  test: {
    // mode defines what ".env.{mode}" file to choose if exists
    env: loadEnv(mode, process.cwd(), ""),
  },
}));
