/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SESSION_TOKEN: process.env.SESSION_TOKEN,
  },
};

module.exports = nextConfig;
