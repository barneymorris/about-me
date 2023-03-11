module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "sYa/U3VV4trIT1E6tVuUWA=="),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "yvmkgRfHTpKfAsETrBGvxA=="),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT", "J4dYpDxEEzz13IvobPLdww=="),
    },
  },
});
