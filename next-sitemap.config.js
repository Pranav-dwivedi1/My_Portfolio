module.exports = {
  siteUrl: 'https://pranavdev.online',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,

  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};
