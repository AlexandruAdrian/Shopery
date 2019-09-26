import React from "react";
// Import components
import Logo from "../logo/Logo";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu";
// Styled components
import { AppHeaderContainer } from "./app-header-styles";

interface Props {
  toggleMenu: React.MouseEventHandler;
  visible: boolean;
}

const AppHeader: React.FC<Props> = ({ toggleMenu, visible }) => {
  return (
    <AppHeaderContainer>
      <HamburgerMenu handler={toggleMenu} visible={visible} />
      <Logo />
    </AppHeaderContainer>
  );
};

export default AppHeader;
