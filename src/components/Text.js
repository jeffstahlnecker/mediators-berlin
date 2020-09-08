import React from "react";
import tw from "twin.macro";
import { graphql, useStaticQuery } from "gatsby";

const PureProfileBackground = ({ data, content }) => {
  const post = data.markdownRemark.html;

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

export const Text = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Sample Text" } }) {
        html
      }
    }
  `);
  return <PureProfileBackground {...props} data={data} />;
};

const Section = tw.div`relative bg-white overflow-hidden`;

const PatternContainer = tw.div`hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full`;

const BackgroundPatterns = tw.div`relative h-full text-lg max-w-prose mx-auto`;

const TextContainer = tw.div`relative px-4 sm:px-6 lg:px-8`;

const MainText = tw.div`prose prose-lg text-gray-500 mx-auto`;

export default Text;
