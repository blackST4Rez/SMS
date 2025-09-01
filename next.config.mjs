/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Remove this if you want to use Babel instead of SWC
    // But since we need Babel for Jest, we'll keep both
  },
  experimental: {
    forceSwcTransforms: false,
  }
};

export default nextConfig;
