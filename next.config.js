/** @type {import('next').NextConfig} */
module.exports = {
  productionBrowserSourceMaps: true,
  webpack: (config) => {
    return {
      ...config,
      // optimization: {
      //   minimize: false,
      // }
    };
  },
};