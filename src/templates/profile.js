import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ProfileHead from "../components/ProfileHead";
import Text from "../components/Text";
import ProfileQuote from "../components/ProfileQuote";

export default function Home({ data }) {
  const mediator = data.directus.items.mediators[0];
  const german = mediator.translations[0];

  return (
    <Layout>
      <ProfileHead
        coverImage={
          `https://mediator.stahlnecker.me/assets/${mediator.cover_photo?.id}` ||
          ""
        }
        profileImage={
          `https://mediator.stahlnecker.me/assets/${mediator.profile_picture?.id}` ||
          ""
        }
        name={mediator.name}
        email={mediator.email}
        phone={mediator.phone}
        specialties={german.specialties}
      />
      <ProfileQuote quote={german.quote} />
      <Text content={german.content} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String) {
    directus {
      items {
        mediators(filter: { slug: { _eq: $slug } }) {
          id
          name
          phone
          email
          cover_photo {
            id
          }
          profile_picture {
            id
          }
          translations {
            content
            id
            quote
            specialties
            tagline
            languages_code {
              code
              name
            }
          }
        }
      }
    }
  }
`;
