import React from "react";
import tw from "twin.macro";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Pill } from "./Utils";

const PureMediators = ({ data }) => {
  const { mediators } = data.directus.items;
  return (
    <Container>
      <SetScreen>
        <SetGrid>
          <ContentContainer>
            <SectionTitle>Unsere Mediatoren</SectionTitle>
            <SectionDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              deleniti earum, eligendi eos ipsa minima odio, perferendis
              quibusdam quo recusandae, sed sint tempora! Ab beatae consectetur
              eveniet nam officiis sit.
            </SectionDescription>
          </ContentContainer>
          <MediatorContainer>
            <MediatorList>
              {mediators.map(mediator => {
                const german = mediator.translations[0];
                return (
                  <li key={mediator.id}>
                    <Link to={`/${mediator.slug}`}>
                      <SetCard>
                        <SetImage>
                          <CardImage
                            src={`https://mediator.stahlnecker.me/assets/${mediator.profile_picture.id}`}
                            alt="a person"
                          />
                        </SetImage>
                        <SetName>
                          <h4>{mediator.name}</h4>
                          <NameTitle>{german.tagline}</NameTitle>
                        </SetName>
                        <SetDescription>
                          <Description>{german.excerpt}</Description>
                        </SetDescription>
                        <SetIcons>
                          {german.specialties.map(specialty => {
                            return (
                              <li key={specialty}>
                                <Pill>{specialty}</Pill>
                              </li>
                            );
                          })}
                        </SetIcons>
                      </SetCard>
                    </Link>
                  </li>
                );
              })}

              {/* Add More People */}
            </MediatorList>
          </MediatorContainer>
        </SetGrid>
      </SetScreen>
    </Container>
  );
};

export const Mediators = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      directus {
        items {
          mediators {
            id
            status
            name
            slug
            phone
            email
            translations {
              tagline
              excerpt
              quote
              content
              specialties
              languages_code {
                name
                code
              }
            }

            profile_picture {
              id
              filename_download
              filename_disk
            }
            cover_photo {
              id
              filename_download
              filename_disk
            }
          }
        }
      }
    }
  `);
  return <PureMediators {...props} data={data} />;
};

const Container = tw.div`
bg-white`;

const SetScreen = tw.div`
mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24`;

const SetGrid = tw.div`
space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0`;

const ContentContainer = tw.div`
space-y-5 sm:space-y-4`;

const SectionTitle = tw.h2`
text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl`;

const SectionDescription = tw.p`
text-xl leading-7 text-gray-500`;

const MediatorContainer = tw.div`
lg:col-span-2`;

const MediatorList = tw.ul`
space-y-12 sm:grid sm:grid-cols-2 sm:col-gap-6 sm:row-gap-12 sm:space-y-0 lg:col-gap-8`;

const SetCard = tw.div`
space-y-4`;

const SetImage = tw.div`
relative pb-2/3 h-96`;

const CardImage = tw.img`
absolute object-cover h-full w-full shadow-lg rounded-lg`;

const SetName = tw.div`
text-lg leading-6 font-medium space-y-1`;

const NameTitle = tw.p`
text-green-600`;

const SetDescription = tw.div`
text-lg leading-7`;

const Description = tw.p`
text-gray-500`;

const SetIcons = tw.ul`
flex space-x-5`;

export default Mediators;
