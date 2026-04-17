import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // @heartland/ui ships as ESM; Next transpiles it alongside the app bundle.
  transpilePackages: ['@heartland/ui'],
};

export default nextConfig;
