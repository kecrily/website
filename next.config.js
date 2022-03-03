/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: "/atom.xml",
        destination: "/api/feed",
      },
    ]
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
}
