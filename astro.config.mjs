import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), playformCompress()],
  output: "hybrid",
  adapter: vercel(),
});
