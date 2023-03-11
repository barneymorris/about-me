module.exports = require("next-fonts")({
  enableSvg: true,
  webpack(config, options) {
    return config;
  },

  // TODO Remove it
  images: {
    domains: ["www.ixbt.com"],
  },
});
