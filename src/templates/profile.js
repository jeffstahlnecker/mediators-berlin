import React from "react";
import Layout from "../components/Layout";
import ProfileHead from "../components/ProfileHead";
import Text from "../components/Text";
import ProfileQuote from "../components/ProfileQuote";
import { graphql } from "gatsby";

export default function Home({ data }) {
  const profile = data.markdownRemark;

  return (
    <Layout>
      <ProfileHead
        coverImage={profile.frontmatter.coverImage.childImageSharp.fluid || ""}
        profileImage={profile.frontmatter.profilePicture.childImageSharp.fixed}
        name={profile.frontmatter.name}
        email={profile.frontmatter.email}
        phone={profile.frontmatter.phone}
        specialties={profile.frontmatter.specialties}
      />
      <ProfileQuote quote={profile.frontmatter.quote} />
      <Text content={profile.html} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($name: String) {
    markdownRemark(frontmatter: { name: { eq: $name } }) {
      frontmatter {
        profilePicture {
          childImageSharp {
            fixed(width: 200) {
              src
            }
          }
        }
        name
        phone
        email
        specialties
        quote
        tagline
        slug
      }
      html
    }
  }
`;
