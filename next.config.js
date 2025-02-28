/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // List of locales supported by your application
    locales: ['en', 'de', 'fr'],
    // Default locale when path doesn't include locale
    defaultLocale: 'en',
    // Set to false to fix the error
    localeDetection: false,
  },
}

module.exports = nextConfig