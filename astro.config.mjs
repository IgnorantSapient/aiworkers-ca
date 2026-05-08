import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aiworkers.ca',
  integrations: [tailwind({ applyBaseStyles: false }), mdx(), sitemap()],
  output: 'static',
  build: { format: 'directory' }
});
