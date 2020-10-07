import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ProfileHead from "../components/ProfileHead";
import Text from "../components/Text";
import ProfileQuote from "../components/ProfileQuote";


export default function Home({data}) {
  const profile = data.markdownRemark;

  return (
    <Layout>
      <ProfileHead
        coverImage={profile.frontmatter.coverPicture.childImageSharp.fluid || ""}
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
  query {
    markdownRemark(frontmatter: { name: { eq: "Sandra Krull" } }) {
      frontmatter {
        profilePicture {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
        coverPicture {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
