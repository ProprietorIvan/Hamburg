/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // List of locales supported by your application
    locales: ['en', 'de', 'fr'],
    // Default locale when path doesn't include locale
    defaultLocale: 'en',
    // Enable automatic locale detection based on browser settings and geographic location
    localeDetection: true,
  },
}

module.exports = nextConfig