import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import tw from "twin.macro";

export const PureProfileHead = ({
  coverImage,
  profileImage,
  name,
  email,
  phone,
  specialties,
}) => {
  return (
    <Section>
      <BackImageWrap>
        <BackImage src={coverImage} alt={`${name} mediator cover photo`} />
      </BackImageWrap>
      <ProfileContainer>
        <Image>
          <ProfileImage src={profileImage} alt={name} />
        </Image>

        <HeadText>
          <Name>{name || "Donna Noble"}</Name>
          <Email>{email || "noble@chance-im-konflikt.de"}</Email>
          <Phone>{phone}</Phone>
        </HeadText>
        <SpecialtyContainer>
          {specialties?.map(specialty => {
            return <Pill key={specialty}>{specialty}</Pill>;
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

const BackImageWrap = tw.div`relative w-screen h-96`;

const BackImage = tw.img`
 w-full h-full object-cover
`;

const ProfileContainer = tw.div`
flex flex-col items-center lg:grid lg:grid-cols-12 lg:grid-flow-row-dense bg-green-300
`;

const Image = tw.div`
col-start-2 col-end-4 gap-12 z-10
`;

const ProfileImage = tw.img`
h-64 w-auto shadow-2xl rounded -mt-40 z-10
`;

const HeadText = tw.div`
col-start-4 col-end-8 flex flex-col p-4 lg:p-8 h-auto lg:h-48 z-10
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
