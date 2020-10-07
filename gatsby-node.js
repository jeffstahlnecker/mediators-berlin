exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const profileTemplate = require.resolve(`./src/templates/profile.js`);
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { slug: { ne: null } } }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: profileTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    });
  });
};
