/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Add this line to configure the domain
  },
};

module.exports = nextConfig;
