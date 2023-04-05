const { i18n } = require("./next-i18next.config");

module.exports = require("next-fonts")({
  enableSvg: true,
  webpack(config, options) {
    return config;
  },

  env: {
    STRAPI_HOST: "http://syrpinboris.ru:1337",
  },

  i18n,
});
