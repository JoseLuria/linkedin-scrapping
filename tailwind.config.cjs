/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      beige: '#F3F2EF',
      blue: '#0a66c2',
      gray: '#EEF3F8'
    },
    extend: {
      maxWidth: {
        base: '1110px'
      }
    }
  }
}
