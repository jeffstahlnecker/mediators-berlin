import React, { useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import tw from "twin.macro";
import "../styles/tailwind-ui.min.css";

const PureNavbar = ({ data }) => {
  const [isOn, setIsOn] = useState(false);
  return (
    <Nav>
      <Container>
        <Section>
          <Flex>
            <Logo>
              <GatsbyImage
                image={data.file.childImageSharp.gatsbyImageData}
                alt="Chance im Konflikt Logo" />
            </Logo>
            <Menu>
              <MenuItem to="/">Home</MenuItem>
              <MenuItem to="/netzwerk">Netzwerk</MenuItem>
            </Menu>
          </Flex>
          <MobileMenu>
            <MenuButton onClick={() => setIsOn(!isOn)}>
              <svg
                className={`${isOn ? "hidden" : "block"} block h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOn ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </MenuButton>
          </MobileMenu>
        </Section>
        <div className={`${isOn ? "block" : "hidden"} md:hidden`}>
          <MobileContainer>
            <MobileLink to="/">Home</MobileLink>
            <MobileLink to="/netzwerk">Netzwerk</MobileLink>
          </MobileContainer>
        </div>
      </Container>
    </Nav>
  );
};

export const Navbar = () => {
  const data = useStaticQuery(graphql`{
  file(relativePath: {eq: "logo.png"}) {
    childImageSharp {
      gatsbyImageData(width: 200, placeholder: TRACED_SVG, layout: FIXED)
    }
  }
}
`);
  return <PureNavbar data={data} />;
};

const Nav = tw.div`
bg-white shadow fixed z-20 w-screen
`;

const Container = tw.div`
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`;

const Section = tw.div`
flex justify-between h-16`;

const Flex = tw.div`
flex`;

const Logo = tw.div`
flex-shrink-0 flex items-center`;

const Menu = tw.div`
hidden sm:ml-6 sm:flex`;

const MenuItem = tw(Link)`
ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300`;

const MobileMenu = tw.div`
-mr-2 flex items-center sm:hidden`;

const MenuButton = tw.button`
inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500
`;

const MobileContainer = tw.div`
pt-2 pb-3`;

const MobileLink = tw(Link)`
mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out sm:pl-5 sm:pr-6
`;

export default Navbar;
