/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.uni.cards"],
  },
  extends: "next",
  eslint: {
    ignoreDuringBuilds: true,
  },
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
  },
};

module.exports = nextConfig;
