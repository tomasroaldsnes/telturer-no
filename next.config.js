/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ["telturer.herokuapp.com", "telturer.s3.eu-west-1.amazonaws.com"],
  },
  i18n: {
    locales: ["no"],
    defaultLocale: "no",
  },
};

module.exports = nextConfig;
