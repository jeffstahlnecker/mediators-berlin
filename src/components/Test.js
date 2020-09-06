import React from "react";
import { FaBars } from "react-icons/fa";
import Img from "gatsby-image";

const MyComponent = () => {
  return (
    <Nav>
      <SetupNav>
        <FlexAndJust>
          <Flex>
            <MobileMenu>
              <MobileButton>
                <FaBars />
              </MobileButton>
            </MobileMenu>
            <Logo>
              <Img
                fixed={data.file.childImageSharp.fixed}
                alt="Chance im Konflikt Logo"
              />
            </Logo>
            <Menu>
              <ALink href="/">Link Example</ALink>
            </Menu>
          </Flex>
        </FlexAndJust>
      </SetupNav>
    </Nav>
  );
};

export default MyComponent;
