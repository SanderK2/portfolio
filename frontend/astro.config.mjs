// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    fonts: [{
        provider: fontProviders.fontsource(),
        name: "Inter",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        cssVariable: "--font-inter",
    }]
});
