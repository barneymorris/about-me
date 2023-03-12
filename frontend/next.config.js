module.exports = require("next-fonts")({
  enableSvg: true,
  webpack(config, options) {
    return config;
  },

  // TODO Remove it
  images: {
    domains: ["www.ixbt.com"],
  },

  env: {
    STRAPI_HOST: "http://151.248.114.166:1337",
  },
});
