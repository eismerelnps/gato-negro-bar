/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/de3tluzbk/**",
      },
    ],
  },
};
