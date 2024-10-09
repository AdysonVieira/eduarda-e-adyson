/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "a-static.mlcdn.com.br"
      }
    ]
  },
};

export default nextConfig;
