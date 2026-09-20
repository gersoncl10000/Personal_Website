import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./browser-tests",
  use: {
    baseURL: process.env.TEST_BASE_URL || "http://127.0.0.1:4321",
    launchOptions: { channel: "msedge" },
  },
  reporter: "list",
});
