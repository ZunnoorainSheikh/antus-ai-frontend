/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/antus-ai-frontend' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/antus-ai-frontend/' : '',
  experimental: {
    optimizeCss: true
  }
}

module.exports = nextConfig