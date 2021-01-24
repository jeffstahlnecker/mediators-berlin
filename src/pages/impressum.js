import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import Text from "../components/Text";

export default function Impressum({ data }) {
  const content = data.directus.items.impressum.translations[0];
  return (
    <Layout>
      <PageHeading t="Impressum" />
      <Text content={content.content} />
    </Layout>
  );
}
export const query = graphql`
  query {
    directus {
      items {
        impressum {
          translations {
            content
            id
          }
        }
      }
    }
  }
`;
