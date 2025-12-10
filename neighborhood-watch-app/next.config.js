const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
};

module.exports = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
})(nextConfig);
