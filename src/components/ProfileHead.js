import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import tw, { styled } from "twin.macro";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";

export const PureProfileHead = ({
  data,
  coverImage,
  profileImage,
  name,
  email,
  phone,
  specialties,
}) => {
  return (
    <Section>
      <BackImage fluid={coverImage || data.back.childImageSharp.fluid} />
      <ProfileContainer>
        <Image>
          <ProfileImage
            fixed={profileImage || data.profile.childImageSharp.fixed}
          />
        </Image>
        <HeadText>
          <Name>{name || "Donna Noble"}</Name>
          <Email>{email || "noble@chance-im-konflikt.de"}</Email>
          <Phone>{phone}</Phone>
        </HeadText>
        <SpecialtyContainer>
          {specialties?.map(specialty => {
            return <Pill>{specialty}</Pill>;
          })}
        </SpecialtyContainer>
      </ProfileContainer>
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

const BackImage = styled(BackgroundImage)`
  height: 50vh;
`;

const ProfileContainer = tw.div`
flex flex-col items-center lg:grid lg:grid-cols-12 lg:grid-flow-row-dense bg-green-300
`;

const Image = tw.div`
col-start-2 col-end-4 gap-12
`;

const ProfileImage = tw(Img)`
h-1 w-auto shadow-2xl rounded -mt-40
`;

const HeadText = tw.div`
col-start-4 col-end-8 flex flex-col p-4 lg:p-8 h-auto lg:h-48
`;

const Name = tw.h1`
text-3xl font-bold 
`;
const Email = tw.p`

`;

const Phone = tw.p`

`;

const SpecialtyContainer = tw.div`
lg:col-start-9 lg:col-end-12 flex flex-row lg:flex-col flex-wrap lg:items-end justify-center pb-6
`;

const Pill = tw.div`
rounded-full py-1 px-4 m-1 bg-green-200 text-center
`;

export default ProfileHead;
