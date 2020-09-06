import React, { useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import tw from "twin.macro";
import "../styles/tailwind-ui.min.css";
import { Transition } from "@tailwindui/react";

const PureNavbar = ({ data }) => {
  const [isOpen, setNav] = useState(false);
  const toggleNav = () => {
    // eslint-disable-next-line no-shadow
    setNav(isOpen => !isOpen);
  };
  return (
    <Nav>
      <Container>
        <Section>
          <Flex>
            <Logo>
              <Img
                fixed={data.file.childImageSharp.fixed}
                alt="Chance im Konflikt Logo"
              />
            </Logo>
            <Menu>
              <MenuItem to="/">Home</MenuItem>
            </Menu>
            <Menu>
              <MenuItem to="/profile">Profile</MenuItem>
            </Menu>
            <Menu>
              <MenuItem to="/">MenuItem</MenuItem>
            </Menu>
            <Menu>
              <MenuItem to="/">MenuItem</MenuItem>
            </Menu>
          </Flex>
          <MobileMenu>
            <MenuButton onClick={toggleNav}>
              <svg
                className="block h-6 w-6"
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
                className="hidden h-6 w-6"
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
      </Container>
    </Nav>
  );
};

export const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  return <PureNavbar data={data} />;
};

const Nav = tw.div`
bg-white shadow
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
export default Navbar;
