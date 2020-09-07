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
        <HeadText>
          <Name>Donna Noble</Name>
          <Email>noble@chance-im-konflikt.de</Email>
          <Phone>+49 1111 11111</Phone>
        </HeadText>
        <SpecialtyContainer>
          <Pill>Specialty</Pill>
          <Pill>Longer Specialty</Pill>
          <Pill>Very Long Specialty</Pill>
          <Pill>Specialty</Pill>
        </SpecialtyContainer>
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
grid grid-cols-12 grid-flow-row-dense bg-green-300
`;

const Image = tw.div`
col-start-2 col-end-4 gap-12
`;

const ProfileImage = tw(Img)`
h-1 w-auto shadow-2xl rounded -mt-40
`;

const HeadText = tw.div`
col-start-4 col-end-8 flex flex-col p-8 h-auto h-48
`;

const Name = tw.h1`
text-3xl font-bold 
`;
const Email = tw.p`

`;

const Phone = tw.p`

`;

const SpecialtyContainer = tw.div`
col-start-9 col-end-12 flex flex-col items-end justify-center
`;

const Pill = tw.div`
rounded-full py-1 px-4 m-1 bg-green-200 text-center
`;

export default ProfileHead;
