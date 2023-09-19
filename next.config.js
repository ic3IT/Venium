/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  async rewrites() {
    return [
      {
        source: '/raffle',
        destination: 'https://scrollium.vercel.app',
      },
      {
        source: '/prophex',
        destination: 'https://prophex.vercel.app',
      },
    ];
  },
};

module.exports = nextConfig;
