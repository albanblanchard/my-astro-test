// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import { loadEnv } from "vite";
const { REPO_SITE_URL, REPO_BASE_URL, NODE_TLS_REJECT_UNAUTHORIZED } = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), "");

// https://docs.astro.build/en/guides/cms/umbraco/#local-dev-https-and-self-signed-ssl-certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = NODE_TLS_REJECT_UNAUTHORIZED;

// https://astro.build/config
export default defineConfig({
  site: REPO_SITE_URL,
  base: REPO_BASE_URL,  
  integrations: [mdx(), sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["wpresume.local", "localhost", "cms.albanblanchard.fr"], 
    remotePatterns: [{ protocol: "https" }],
  }
});