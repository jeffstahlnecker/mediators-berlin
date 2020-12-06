import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export const PureHero = ({ data }) => {
  const coverPhoto = data.directus.items.home.cover_photo.id;
  return (
    <div className="relative w-screen h-96">
      <img
        className="w-full h-full object-cover"
        src={`https://mediator.stahlnecker.me/assets/${coverPhoto}`}
        alt="background"
      />
    </div>
  );
};

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "street.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      directus {
        items {
          home {
            cover_photo {
              id
            }
          }
        }
      }
    }
  `);
  return <PureHero data={data} />;
};

export default Hero;
