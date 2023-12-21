/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ["en", "id"],
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}/messages",
      include: ["src"],
    },
  ],
  format: "po",
};
