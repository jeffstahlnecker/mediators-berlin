import React from "react";
import tw from "twin.macro";

const PureContent = () => {
  return (
    <Section>
      <Container>
        <HiddenBlock />
        <Title>
          <SmallTitleText>Über Mediation</SmallTitleText>
          <TitleText>Was ist Mediation? </TitleText>
        </Title>
        <PictureSection>
          <Pattern>
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
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
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <ImageContainer>
              <figure>
                <Image>
                  <ThePicture
                    src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
                    alt="This is a picture"
                    width="1184"
                    height="1376"
                    className="rounded-lg shadow-lg object-cover object-center absolute inset-0 w-full h-full lg:static lg:h-auto"
                  />
                </Image>
                <FigCaption>
                  <svg
                    className="flex-none w-5 h-5 mr-2 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Photograph by Marcus O’Leary
                </FigCaption>
              </figure>
            </ImageContainer>
          </Pattern>
          <div>
            <TextSection>
              <BlurbSection>
                <BlurbText>
                  Die Mediation ist eine Methode zur Vermittlung in
                  Konfliktfällen, die der gemeinsamen und konstruktiven
                  Lösungsfindung dient.
                </BlurbText>
              </BlurbSection>
              <MainText>
                <p>
                  Sie ist ein vertrauliches und strukturiertes Verfahren, in dem
                  die beteiligten Parteien (Mediant*innen) freiwillig,
                  eigenverantwortlich und wertschätzend eine einvernehmliche
                  Beilegung ihres Konflikts anstreben.
                </p>
                <p>
                  Der*die Mediator*in unterstützt die Mediant*innen hierbei und
                  leitet die Gespräche als ergebnisoffenen Prozess. Er*sIe
                  stellt einen sicheren und schützenden Rahmen her, in dem die
                  Mediant*innen sich offen, ehrlich und kooperativ begegnen
                  können. Der*die Mediator*in ist allparteilich, steht also auf
                  der Seite aller Beteiligten. Er*sie unterstützt die
                  Mediant*innen bei der Erarbeitung von Lösungsoptionen und
                  Vereinbarungen, so dass für alle Parteien eine win-win
                  Situation entstehen kann.
                </p>
                <h3>Was ist die Mediation nicht?</h3>
                <p>
                  Eine Mediation umfasst weder psychologische, therapeutische
                  noch juristische Beratung, noch stellt sie ein Coaching dar.
                </p>
                <h2>Welche Vorteile kann mir eine Mediation bringen?</h2>
                <p>
                  Konflikte gehören zum Alltag und werden oft als belastend
                  wahrgenommen. Eine konstruktive Konfliktlösung kann alle
                  Beteiligten weiterbringen und ein harmonisches, oder zumindest
                  friedvolles, Miteinander ermöglichen.
                </p>
                <p>
                  Wenn Sie Ihren aktuellen Konflikt als Möglichkeit zu
                  persönlichem Wachstum und positiver Veränderung betrachten
                  möchten, ist eine Mediation vermutlich der richtige Weg für
                  Sie. Wenn Sie das Gespräch mit Ihrem Gegenüber wieder in Gang
                  bringen und/oder einen tragfähigen Konsens finden möchten,
                  stehen Ihnen die Mediator*innen in unserem Netzwerk
                  professionell zur Seite.
                </p>
              </MainText>
            </TextSection>
          </div>
        </PictureSection>
      </Container>
    </Section>
  );
};

export const Content = ({ ...props }) => {
  return <PureContent {...props} />;
};

const Section = tw.div`
bg-white overflow-hidden
`;
const Container = tw.div`
relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8`;

const HiddenBlock = tw.div`
hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen`;

const Title = tw.div`
mx-auto text-base max-w-prose lg:max-w-none
`;

const SmallTitleText = tw.p`
text-base leading-6 text-green-600 font-semibold tracking-wide uppercase`;

const TitleText = tw.h2`
mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10`;

const PictureSection = tw.div`
lg:grid lg:grid-cols-2 lg:gap-8
`;

const Pattern = tw.div`
relative mb-8 lg:mb-0 lg:row-start-1 lg:col-start-2`;

const ImageContainer = tw.div`
relative text-base mx-auto max-w-prose lg:max-w-none`;

const Image = tw.div`
relative pb-7/12 lg:pb-0
`;

const ThePicture = tw.img`
rounded-lg shadow-lg object-cover object-center absolute inset-0 w-full h-full lg:static lg:h-auto`;

const FigCaption = tw.figcaption`
flex mt-3 text-sm text-gray-500`;

const TextSection = tw.div`
text-base max-w-prose mx-auto lg:max-w-none`;

const BlurbSection = tw.div`
text-base max-w-prose mx-auto lg:max-w-none`;

const BlurbText = tw.p`
text-lg leading-7 text-gray-500 mb-5`;

const MainText = tw.div`
prose text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1`;

export default Content;
