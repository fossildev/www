module.exports = {
  siteMetadata: {
    title: 'FOSSIL',
    siteUrl: 'https://fossil.or.id',
    events: {
      title: 'FOSSIL - Events',
      siteUrl: 'https://fossil.or.id/events',
    },
    team: {
      title: 'FOSSIL - Team',
      siteUrl: 'https://fossil.or.id/team',
    },
    blog: {
      title: 'FOSSIL - Blog',
      siteUrl: 'https://fossil.or.id/blog',
    },
    memberDetails: {
      title: 'FOSSIL - Member Details',
      siteUrl: 'https://fossil.or.id/member-details',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1080,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-101997744-5',
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `green`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
  ],
}
