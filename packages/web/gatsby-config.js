const path = require("path")
const NAME = "Progressbar"

module.exports = {
  siteMetadata: {
    title: `${NAME}`,
    description: `${NAME}`,
    siteUrl: "https://progressbar.sk",
  },
  pathPrefix: "/",
  plugins: [
    // {
    //   resolve: "gatsby-plugin-typography",
    //   options: {
    //     pathToConfigModule: "src/utils/typography.js",
    //     omitGoogleFont: true,
    //   },
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: path.join(__dirname, "content", "images"),
    //     name: "images",
    //   },
    // },
    {
      resolve: "gatsby-plugin-create-client-paths",
      options: {
        prefixes: ["/app/*"],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `${NAME}`,
        short_name: `${NAME}`,
        description: `${NAME}`,
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "standalone",
        icon: "static/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    // {
    //   resolve: "gatsby-plugin-react-svg",
    //   options: {
    //     rule: {
    //       include: /svgs/,
    //     },
    //   },
    // },
    "gatsby-plugin-typescript",
    // "gatsby-plugin-catch-links",
    // "gatsby-transformer-sharp",
    // "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    // "gatsby-plugin-sitemap",
  ],
}
