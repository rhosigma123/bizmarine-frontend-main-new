/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.bizmarine.com",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "192.168.100.103",
        pathname: "**",
      },
    ],
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    BASE_URL: process.env.BASE_URL,
    PUBLIC_URL: process.env.PUBLIC_URL,
  },

  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(node)$/i,
      use: [
        {
          loader: "file-loader",
        },
      ],
    });
    return config;
  },

  async redirects() {
    return [
      {
        source: "/order-history",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sitemap.xml/",
        destination: "/sitemap.xml",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
