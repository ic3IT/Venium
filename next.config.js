module.exports = {
  async rewrites() {
    return [
      {
        source: '/raffle',
        destination: 'https://scrolliums.vercel.app',
      },
    ];
  },
};
