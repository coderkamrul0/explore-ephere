/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = {
  nextConfig,
  images: {
    domains: ["gaviaspreview.com", "i.ibb.co", "cdn-icons-png.flaticon.com", "images.unsplash.com"],
  },
};
