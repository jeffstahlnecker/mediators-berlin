import React from "react";
import tw from "twin.macro";

export const PureProfileMeditation = ({ quote }) => {
  //  // Was bedeutet Mediation für mich
  //   // Was mich antreibt
  return (
    <Section>
      <Container>
        <svg
          className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
          role="img"
          aria-labelledby="svg-workcation"
        >
          <title id="svg-workcation">Workcation</title>
          <defs>
            <pattern
              id="ad119f34-7694-4c31-947f-5c9d249b21f3"
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
            height="404"
            fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
          />
        </svg>
        <TextContainer>
          <Blockquote>
            <ParagraphWrapper>
              <p>
                {quote ||
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae fugiat hic incidunt nam placeat, provident recusandae! Autem blanditiis!"}
              </p>
            </ParagraphWrapper>
          </Blockquote>
        </TextContainer>
      </Container>
    </Section>
  );
};

export const ProfileQuote = ({ ...props }) => {
  return <PureProfileMeditation {...props} />;
};

const Section = tw.section`py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24`;

const Container = tw.div`relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8`;

const TextContainer = tw.div`relative`;

const Blockquote = tw.blockquote`mt-8`;

const ParagraphWrapper = tw.div`max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900`;

export default ProfileQuote;
