import React from "react";
// FA Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledMenu } from "./menu-styles";

interface Props {
  handler: React.MouseEventHandler;
  visible: boolean;
}

const HamburgerMenu: React.FC<Props> = ({ handler, visible }): JSX.Element => {
  return (
    <StyledMenu onClick={handler}>
      {visible ? (
        <FontAwesomeIcon icon="times" />
      ) : (
        <FontAwesomeIcon icon="bars" />
      )}
    </StyledMenu>
  );
};

export default HamburgerMenu;
