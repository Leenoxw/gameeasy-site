import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://leenoxw.github.io',
  base: '/gameeasy-site', // Sans cela, les liens "/cracks" ne marcheront jamais
});