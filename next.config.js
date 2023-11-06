/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Temporary typescript disable for mvp deployment testing
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
