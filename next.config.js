/**
 * @type {import('next').NextConfig}
 */

const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    typedRoutes: true,
    optimizeCss: true
  },
  experimental: {
    optimizePackageImports: [
      '@headlessui/react',
      'lucide-react',
      'react-day-picker',
      'swiper',
      'react-device-detect',
    ],
  },
   images: {
    remotePatterns: [

      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/**', 
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
