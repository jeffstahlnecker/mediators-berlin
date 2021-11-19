import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import Text from "../components/Text";
import SEO from "../components/Seo";

export default function Impressum({ data }) {
  const content = data.directus.items.impressum.translations[0];
  return (
    <Layout>
      <SEO title="Impressum" language="de-DE" />
      <PageHeading t="Impressum" />
      <Text content={content.content} />
    </Layout>
  );
}
export const query = graphql`
  query {

      directus {
            Impressum {
              translations {
                Content
                id
              }
            }
          }
    
  }
`;
