import React from "react";

import { StyledLogo } from "./logo-styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Logo: React.FC = (): JSX.Element => {
  return (
    <StyledLogo>
      <h1>
        Shopery <FontAwesomeIcon icon="shopping-basket" />
      </h1>
    </StyledLogo>
  );
};

export default Logo;
