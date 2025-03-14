// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Astro Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';

export const API_AUTH_HEADERS = {
  'Authorization': 'Basic ' + btoa(`${import.meta.env.WP_USERNAME}:${import.meta.env.WP_PASSWORD}`),
  'Content-Type': 'application/json'
};
