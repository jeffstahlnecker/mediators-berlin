exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const profileTemplate = require.resolve(`./src/templates/profile.js`);
  const result = await graphql(`
    {
      directus {
        items {
          mediators {
            id
            slug
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
  const { mediators } = result.data.directus.items;

  mediators.forEach(mediator => {
    createPage({
      path: mediator.slug,
      component: profileTemplate,
      context: {
        // additional data can be passed via context
        slug: mediator.slug,
      },
    });
  });
};
