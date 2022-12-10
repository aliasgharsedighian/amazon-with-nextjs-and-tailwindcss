/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com", "fakestoreapi.com"],
  },
};

module.exports = nextConfig;
