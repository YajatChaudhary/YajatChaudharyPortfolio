/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir:'dist',
    experimental: {
      fontLoaders: [
        { loader: "@next/font/google", options: { subsets: ["latin"] } },
      ],
    },
  };
  
  module.exports = nextConfig;
  