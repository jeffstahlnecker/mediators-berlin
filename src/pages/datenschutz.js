import React from "react";
import { graphql } from "gatsby";
import Text from "../components/Text";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";

const Datenschutz = ({ data }) => {
  const content = data.directus.items.datenschutz;
  return (
    <Layout>
      <PageHeading t={content.title} />
      <Text text={content.text} />
    </Layout>
  );
};

export default Datenschutz;

export const query = graphql`
  query {
    directus {
      items {
        datenschutz {
          text
          title
        }
      }
    }
  }
`;
