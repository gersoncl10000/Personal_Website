import { defineConfig } from "astro/config";
export default defineConfig({
  site: "https://gersoncastillo.dev",
  output: "static",
  trailingSlash: "always",
  devToolbar: { enabled: false },
});
