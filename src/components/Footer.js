import React from "react";
import tw from "twin.macro";
import { Link } from "gatsby";

export const PureFooter = () => {
  return (
    <Container>
      <Section>
        <Menu>
          <MenuItem>
            <TheLink to="/datenschutz">Datenschutz</TheLink>
          </MenuItem>
          <MenuItem>
            <TheLink to="/impressum">Impressum</TheLink>
          </MenuItem>
        </Menu>

        <CopyrightSection>
          <Copyright>
            &copy; 2020 Chance im Konflikt, All rights reserved.
          </Copyright>
        </CopyrightSection>
      </Section>
    </Container>
  );
};

export const Footer = ({ ...props }) => {
  return <PureFooter {...props} />;
};

const Container = tw.div`
bg-white`;

const Section = tw.div`
max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8`;

const Menu = tw.nav`
-mx-5 -my-2 flex flex-wrap justify-center`;

const MenuItem = tw.div`
px-5 py-2`;

const TheLink = tw(Link)`
text-base leading-6 text-gray-500 hover:text-gray-900`;

const CopyrightSection = tw.div`
mt-8`;

const Copyright = tw.p`
text-center text-base leading-6 text-gray-400`;

export default Footer;
