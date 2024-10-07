import { defineConfig } from 'astro/config';
import favicons from "astro-favicons"; // Add code manually

import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pbtservers.com',
  integrations: [
  tailwind(),
  sitemap(),
  favicons({
      masterPicture: "./public/images/favicon.svg",
      // emitAssets: true,

      // You should adjust the following options accordingly
      appName: "PbtSystems & Hosting",
      appShortName: "PbtHosting",
      appDescription: "El Hosting de PbtSystems",
      // dir:"auto",
      lang: "es-ES",
      // display: "standalone",
      // orientation: "any",
      // start_url: "/?homescreen=1",
      background: "#fff",
      theme_color: "#fff",

      faviconsDarkMode: false, // default `true`, Make favicon compatible with light and dark modes
      
      // appleStatusBarStyle: "black-translucent",

      //....
    })],
  trailingSlash: 'never',
  build: {
    format: 'file'
  }
});
