/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pwa: {
        dest: "public",
    },
    images: {
        domains: ["firebasestorage.googleapis.com"],
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/menu/sushi",
                permanent: true,
            },
        ];
    },
};

const withPWA = require("next-pwa");

module.exports = withPWA(nextConfig);
