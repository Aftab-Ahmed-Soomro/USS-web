/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "emmanuelcolewilliams.com",
      },
    ],
  },
  output: 'export',
};

export default nextConfig;