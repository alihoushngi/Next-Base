/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://nextbase.ir",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "daily",
  additionalPaths: async (config) => [
    await config.transform(config, "/custom-page"),
  ],
  priority: 0.7,
  exclude: ["/admin/*", "/login"],
};
