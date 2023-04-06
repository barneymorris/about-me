module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array(
      "APP_KEYS",
      "G9J76rLMvKhwhQ4nfJ3sog==,GzeB3RUp+PdEY4/8K/V9dw==,FTHoFol5LLpw3/La3/EY4g==,8ggsv90w+jQl/EUSXUoCAQ=="
    ),
  },
  url: "/",
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
