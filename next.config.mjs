/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "media.lunatalk.co.kr" }],
  },
};

export default nextConfig;
