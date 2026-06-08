// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// `site` is the production URL — used for canonical/OG URLs and the sitemap.
export default defineConfig({
  site: 'https://befreeapp.net',
  integrations: [tailwind(), sitemap()],
});
