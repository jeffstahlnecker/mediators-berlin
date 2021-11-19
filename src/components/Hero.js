import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export const PureHero = ({ data }) => {
  const coverPhoto = data.directus.Home.Cover_Photo.id;
  return (
    <div className="relative w-screen h-96">
      <img
        className="w-full h-full object-cover"
        src={`https://prtl.chance-im-konflikt.de/assets/${coverPhoto}`}
        alt="background"
      />
    </div>
  );
};

export const Hero = () => {
  const data = useStaticQuery(graphql`{
  file(relativePath: {eq: "street.jpg"}) {
    childImageSharp {
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
  }
  directus {
    Home {
      Cover_Photo {
        id
      }
    }
  }
}
`);
  return <PureHero data={data} />;
};

export default Hero;
