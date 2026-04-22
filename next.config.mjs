/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/dash',
        destination: 'https://command-center-virid-tau.vercel.app/',
      },
      {
        source: '/dash/:path*',
        destination: 'https://command-center-virid-tau.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;
