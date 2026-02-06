/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'trae-api-cn.mchost.guru',
        port: '',
        pathname: '/api/ide/v1/text_to_image/**',
      },
    ],
  },
}

module.exports = nextConfig
