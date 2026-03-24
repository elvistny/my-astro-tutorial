// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://luxury-starship-fa9387.netlify.app/",
  integrations: [preact()]
});