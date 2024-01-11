import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://gregorobreza.github.io/',
    base: '/astro-redirect-issue',
    redirects: {
        '/redirected': '/astro-redirect-issue/new-page'
      }
});
