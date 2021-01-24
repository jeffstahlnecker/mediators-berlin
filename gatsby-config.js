/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Chance im Konflikt",
    description:
        "Site Description.",
    author: "Jeff Stahlnecker",
    image: "/defaultImg.png",
    siteUrl: "https://www.chance-im-konflikt.de",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-svg-sprite",
    "gatsby-plugin-styled-components",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "directus2",
        fieldName: "directus",
        url: "https://mediator.stahlnecker.me/graphql",
      },
    },
    {
      resolve: `gatsby-plugin-cookiehub-banner`,
      options: {
        // The ID is part of the CookieHub URL: https://cookiehub.net/cc/YOUR_COOKIEHUB_ID.js
        cookieHubId: process.env.COOKIE_HUB,
        // Optional parameter (default false) - Use new v2 API.
        cookieHubV2Api: true,
        // Categories configured with CookieHub
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/docs/`,
      },
    },
  ],
};
