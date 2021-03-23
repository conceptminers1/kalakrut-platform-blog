require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
}) 

module.exports = {
siteMetadata: {
  siteUrl: `https://kalakrutplatformblog.gatsbyjs.io/`
    },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
      output: `/sitemap.xml`,
      exclude: [`/settings`]
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
      output: `/robots.txt`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-cosmicjs',
      options: {
        bucketSlug: process.env.COSMIC_BUCKET,
        objectTypes: ['posts','settings', 'services'],
        apiAccess: {
          read_key: process.env.COSMIC_READ_KEY,
        },
        localMedia: true
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-48640803-8`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
