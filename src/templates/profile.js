import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ProfileHead from "../components/ProfileHead";
import Text from "../components/Text";
import ProfileQuote from "../components/ProfileQuote";
import Seo from '../components/Seo'

export default function Home({ data }) {
  const mediator = data.directus.items.mediators[0];
  const german = mediator.translations[0];

  return (
    <Layout>
      <Seo
        title={`${mediator.name}`}
        description={mediator.translations[0].excerpt}
        image={`https://mediator.stahlnecker.me/assets/${mediator.profile_picture?.id}`}
        language={mediator.translations[0].languages_code.code}
      />
      <ProfileHead
        coverImage={mediator.cover_photo?.id}
        profileImage={
          `https://mediator.stahlnecker.me/assets/${mediator.profile_picture?.id}` ||
          ""
        }
        name={mediator.name}
        email={mediator.email}
        phone={mediator.phone}
        specialties={german.specialties}
        primaryColor={mediator.color}
        secondaryColor={mediator.secondary_color}
        textColor={mediator.text_color}
        pillColor={mediator.specialties_background_color}
        pillTextColor={mediator.specialties_text_color}
      />
      {german.quote ? <ProfileQuote quote={german.quote} /> : ""}
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
          color
          secondary_color
          phone
          email
          text_color
          specialties_background_color
          specialties_text_color
          cover_photo {
            id
          }
          profile_picture {
            id
          }
          translations {
            languages_code {
                code
            }
            content
            id
            quote
            excerpt
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
