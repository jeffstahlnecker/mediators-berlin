import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import tw, { styled } from "twin.macro";

export const PureProfileHead = ({
  coverImage,
  profileImage,
  name,
  email,
  phone,
  specialties,
  primaryColor,
  secondaryColor,
  textColor,
  pillColor,
  pillTextColor,
}) => {
  function bPadding() {
    let padding = "pb-14";
    if (specialties.length > 4) {
      padding = "lg:pb-32 xl:pb-14";
    }
    return padding;
  }

  const Hr = styled.div(() => [
    `background-color: ${secondaryColor};`,
    coverImage ? tw`h-1` : tw`h-20`,
  ]);

  const Pill = styled.div(() => [
    tw`rounded-full py-1 px-4 m-1 text-center text-xs`,
    `background-color: ${pillColor || "#cccccc"};`,
    `color: ${pillTextColor || "black"}`,
  ]);

  const ProfileContainer = tw.div`
flex flex-col items-center lg:grid lg:grid-cols-12 lg:grid-flow-row-dense bg-green-300 
`;

  return (
    <div>
      {coverImage !== undefined ? (
        <BackImageWrap>
          <BackImage
            src={`https://mediator.stahlnecker.me/assets/${coverImage}`}
            alt={`${name} mediator cover photo`}
          />
        </BackImageWrap>
      ) : (
        ""
      )}
      {secondaryColor ? <Hr /> : ""}

      <ProfileContainer
        style={{ backgroundColor: primaryColor }}
        className={bPadding()}
      >
        <Image>
          <img
            className={
              coverImage
                ? `h-64 w-auto shadow-2xl rounded -mt-40 z-10`
                : `h-64 w-auto shadow-2xl rounded z-10 my-5`
            }
            src={profileImage}
            alt={name}
          />
        </Image>

        <HeadText>
          <Name style={{ color: textColor || "black" }}>
            {name || "Donna Noble"}
          </Name>
          <SpecialtyContainer>
            {specialties?.map(specialty => {
              return <Pill key={specialty}>{specialty}</Pill>;
            })}
          </SpecialtyContainer>
        </HeadText>
        <div className="flex flex-col lg:col-start-9 xl:col-start-10 pb-5 md:pb-0 font-semibold">
          {email ? (
            <Email className="flex flex-row">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                  />
                </svg>
              </div>
              {email}
            </Email>
          ) : (
            ""
          )}
          {phone ? (
            <Phone className="flex flex-row">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              {phone}
            </Phone>
          ) : (
            ""
          )}
        </div>
      </ProfileContainer>
    </div>
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

const BackImageWrap = tw.div`relative w-screen h-96`;

const BackImage = tw.img`
 w-full h-full object-cover
`;

const Image = tw.div`
col-start-2 col-end-4 gap-12 z-10
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
flex flex-row flex-wrap md:pb-6 object-contain
`;

export default ProfileHead;
