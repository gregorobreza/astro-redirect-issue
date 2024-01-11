import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://gregorobreza.github.io/astro-redirect-issue',
    base: '/astro-redirect-issue',
    redirects: {
        '/redirected': '/new-page'
      }
});
