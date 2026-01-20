import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable edge runtime for API routes
  experimental: {
    // For Cloudflare Workers deployment
  }
}

export default nextConfig
