import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import tw from "twin.macro";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";

export const PureProfileHead = ({ data }) => {
  // to include:
  // Profile Picture
  // Contact Information
  // Background Image??
  // Schwerpunkte

  console.log(data.logo);

  return (
    <Section>
      <BackImage fluid={data.back.childImageSharp.fluid} />
      <ProfileContainer>
        <Image>
          <ProfileImage fixed={data.profile.childImageSharp.fixed} />
        </Image>
      </ProfileContainer>
      ProfileHead
    </Section>
  );
};

export const ProfileHead = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    {
      back: file(relativePath: { eq: "backgroundImg.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      profile: file(relativePath: { eq: "profilePhoto.jpg" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  return <PureProfileHead {...props} data={data} />;
};

const Section = tw.div`
`;

const BackImage = tw(BackgroundImage)`
h-64`;

const ProfileContainer = tw.div`
grid grid-cols-12 grid-rows-2
`;

const Image = tw.div`
col-start-2 col-end-4
`;

const ProfileImage = tw(Img)`
h-1 w-auto shadow-2xl rounded -mt-40
`;

export default ProfileHead;
