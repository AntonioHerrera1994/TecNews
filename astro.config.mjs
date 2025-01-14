import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import partytown from '@astrojs/partytown';
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://plankton.news',
  integrations: [mdx(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), sitemap(), react()]
});