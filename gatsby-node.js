exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const profileTemplate = require.resolve(`./src/templates/profile.js`);
  const result = await graphql(`
    {
  directus {
    Mediators {
      id
      slug
      translations {
        languages_code {
          code
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

  const mediators  = result.data.directus.Mediators;

  function slug(lang, uri) {
    if (lang === "de-DE") {
      return uri;
    }
    if (lang === "en-US") {
      return `en/${uri}`;
    }
    return `${lang}/${uri}`;
  }

  mediators.forEach(mediator => {
    mediator.translations.forEach(translation => {
      createPage({
        path: slug(translation.languages_code.code, mediator.slug),
        component: profileTemplate,
        context: {
          // additional data can be passed via context
          slug: mediator.slug,
          language: translation.languages_code.code,
        },
      });
    });
  });
};
