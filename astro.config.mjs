import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  build: {
    assets: '_astro'
  },
  server: {
    port: 3000,
    host: true
  },
  trailingSlash: 'ignore',
  base: '/',
  site: 'https://govalsma.netlify.app'
});
