/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static export for Cloudflare Pages
  images: {
    unoptimized: true  // Cloudflare Pages doesn't support Next.js image optimization
  },
  // Disable server-side features for static export
  trailingSlash: true,
};

module.exports = nextConfig;
