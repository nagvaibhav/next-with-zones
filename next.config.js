const { BLOG_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/blog",
        destination: `http://localhost:4000/blog`,
      },
      {
        source: "/blog/:path*",
        destination: `http://localhost:4000/blog/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
