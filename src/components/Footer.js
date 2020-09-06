import React from "react";
import tw from "twin.macro";

export const PureFooter = () => {
  return (
    <Container>
      <Section>
        <Menu>
          <MenuItem>
            <TheLink href="/">MenuLink</TheLink>
          </MenuItem>
          <MenuItem>
            <TheLink href="/">MenuLink</TheLink>
          </MenuItem>
          <MenuItem>
            <TheLink href="/">MenuLink</TheLink>
          </MenuItem>
          <MenuItem>
            <TheLink href="/">MenuLink</TheLink>
          </MenuItem>
          <MenuItem>
            <TheLink href="/">MenuLink</TheLink>
          </MenuItem>
        </Menu>
        <Social>
          <SocialLink href="/">
            <SocialText>Facebook</SocialText>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </SocialLink>
          <SocialLink href="/">
            <SocialText>Facebook</SocialText>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </SocialLink>
          <SocialLink href="/">
            <SocialText>Facebook</SocialText>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </SocialLink>
          <SocialLink href="/">
            <SocialText>Facebook</SocialText>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </SocialLink>
        </Social>
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

const TheLink = tw.a`
text-base leading-6 text-gray-500 hover:text-gray-900`;

const Social = tw.div`
mt-8 flex justify-center`;

const SocialLink = tw.a`
text-gray-400 hover:text-gray-500
`;

const SocialText = tw.span`
sr-only`;

const CopyrightSection = tw.div`
mt-8`;

const Copyright = tw.p`
text-center text-base leading-6 text-gray-400`;

export default Footer;
