import React from "react";
import tw from "twin.macro";
import { graphql, useStaticQuery } from "gatsby";

const PureProfileBackground = ({ data, top, title, subtitle, content }) => {
  const post = data.markdownRemark.html;

  function getTitleBox(TopTitle, Title, Subtitle) {
    if (TopTitle && Title && Subtitle) {
      return (
        <TitleBox>
          <TopTitle>{top}</TopTitle>
          <MainTitle>{title}</MainTitle>
          <Subtitle>{subtitle}</Subtitle>
        </TitleBox>
      );
    } else if (TopTitle && Title) {
      return (
        <TitleBox>
          <TopTitle>{top}</TopTitle>
          <MainTitle>{title}</MainTitle>
        </TitleBox>
      );
    } else if (Title && Subtitle) {
      return (
        <TitleBox>
          <MainTitle>{title}</MainTitle>
          <Subtitle>{subtitle}</Subtitle>
        </TitleBox>
      );
    } else {
      return "";
    }
  }

  return (
    <Section>
      <PatternContainer>
        <BackgroundPatterns>
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </BackgroundPatterns>
      </PatternContainer>
      <TextContainer>
        {getTitleBox(top, title, subtitle)}
        <MainText>
          <div
            dangerouslySetInnerHTML={
              content ? { __html: content } : { __html: post }
            }
          />
        </MainText>
      </TextContainer>
    </Section>
  );
};

export const ProfileText = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Sample Text" } }) {
        html
      }
    }
  `);
  return <PureProfileBackground {...props} data={data} />;
};

const Section = tw.div`relative py-16 bg-white overflow-hidden`;

const PatternContainer = tw.div`hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full`;

const BackgroundPatterns = tw.div`relative h-full text-lg max-w-prose mx-auto`;

const TextContainer = tw.div`relative px-4 sm:px-6 lg:px-8`;

const TitleBox = tw.div`text-lg max-w-prose mx-auto mb-6`;

const TopTitle = tw.p`text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase`;

const MainTitle = tw.h2`mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10`;

const Subtitle = tw.p`text-xl text-gray-500 leading-8`;

const MainText = tw.div`prose prose-lg text-gray-500 mx-auto`;

export default ProfileText;
