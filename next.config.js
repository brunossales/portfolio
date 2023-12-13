/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['lucide-react'],
    reactStrictMode: true,
    images: {
        domains: [
            'localhost:3000',
            'avatars.githubusercontent.com',
            'portfolio-brunossales.vercel.app',
        ]
    },
};

module.exports = nextConfig;
