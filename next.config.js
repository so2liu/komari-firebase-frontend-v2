/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pwa: {
        dest: "public",
    },
    images: {
        domains: ["firebasestorage.googleapis.com"],
    },
};

const withPWA = require("next-pwa");

module.exports = withPWA(nextConfig);
