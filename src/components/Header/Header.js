import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Icons = (props) => (
  <ActionGroup {...props}>
    <button>
      <Search size={24} />
    </button>
    <button>
      <Menu size={24} />
    </button>
  </ActionGroup>
);

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <MobileIcons />
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopIcons />
        <Logo />
        <SubscriberButton>
          <Button>Subscribe</Button>
          <a href="/">Already a subscriber?</a>
        </SubscriberButton>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const SubscriberButton = styled.div`
  display: none;
  @media${QUERIES.desktopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      font-style: italic;
      text-decoration: underline;
    }
  }
`;

const MobileIcons = styled(Icons)`
  @media${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const DesktopIcons = styled(Icons)`
  display: none;
  @media${QUERIES.desktopAndUp} {
    display: flex;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 48px;
`;

export default Header;
