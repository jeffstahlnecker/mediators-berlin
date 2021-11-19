import React from "react";
import { graphql } from "gatsby";
import Text from "../components/Text";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import SEO from "../components/Seo";

const Datenschutz = ({ data }) => {
  const content = data.directus.items.datenschutz.translations[0];
  return (
    <Layout>
      <SEO title="Datenshutz" language="de-DE" />
      <PageHeading t={content.title} />
      <Text content={content.text} />
    </Layout>
  );
};

export default Datenschutz;

export const query = graphql`
  query {
    directus {
      Datenschutz {
        translations {
          Text
          Title
          languages_id {
            code
          }
        }
      }
    }
  }
`;
