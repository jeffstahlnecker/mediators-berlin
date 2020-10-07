import React from "react";
import tw from "twin.macro";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Pill } from "./Utils";

const PureMediators = ({ data }) => {
  const mediators = data.allMarkdownRemark.nodes;
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
              {mediators.map(item => {
                const mediator = item.frontmatter;
                return (
                  <li key={item.id}>
                    <Link to={`/${mediator.slug}`}>
                      <SetCard>
                        <SetImage>
                          <CardImage
                            src={
                              mediator.profilePicture.childImageSharp.fixed.src
                            }
                            alt="a person"
                          />
                        </SetImage>
                        <SetName>
                          <h4>{mediator.name}</h4>
                          <NameTitle>{mediator.tagline}</NameTitle>
                        </SetName>
                        <SetDescription>
                          <Description>{mediator.excerpt}</Description>
                        </SetDescription>
                        <SetIcons>
                          {mediator.specialties.map(specialty => {
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
      allMarkdownRemark(filter: { frontmatter: { name: { ne: null } } }) {
        nodes {
          id
          frontmatter {
            name
            slug
            tagline
            excerpt
            specialties
            profilePicture {
              childImageSharp {
                fixed {
                  src
                }
              }
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
relative pb-2/3`;

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
