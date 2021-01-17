import React from "react";
import { graphql } from "gatsby";
import Text from "../components/Text";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";

const Datenschutz = ({ data }) => {
  const content = data.directus.items.datenschutz.translations[0];
  return (
    <Layout>
      <PageHeading t={content.title} />
      <Text content={content.text} />
    </Layout>
  );
};

export default Datenschutz;

export const query = graphql`
  query {
    directus {
      items {
        datenschutz {
          translations {
            text
            title
            languages_code {
              code
            }
          }
        }
      }
    }
  }
`;
