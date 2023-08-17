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
//https://res.cloudinary.com/de3tluzbk/image/upload/v1692221314/wudmx0kccnmpmdgbwwxa.jpg