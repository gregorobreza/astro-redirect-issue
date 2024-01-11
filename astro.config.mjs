import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://gregorobreza.github.io/astro-redirect-issue',
    base: '/astro-redirect-issue',
    redirects: {
        '/astro-redirect-issue/redirected': '/astro-redirect-issue/new-page'
      }
});
