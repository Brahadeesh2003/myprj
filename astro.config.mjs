import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://govalidation.com',
  integrations: [sitemap()],
  output: 'static',
  build: {
    assets: '_astro'
  },
  server: {
    port: 3000,
    host: true
  },
  trailingSlash: 'ignore',
  base: '/'
});
