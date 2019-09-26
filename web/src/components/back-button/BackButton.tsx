import React from "react";

import StyledBackButton from "./back-button-styles";
import { StyledLink } from "../common-styled-components/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BackProps {
  page: string;
}

const BackButton: React.FC<BackProps> = ({ page }): JSX.Element => (
  <StyledBackButton>
    <StyledLink to={page}>
      <FontAwesomeIcon icon="angle-left" />
    </StyledLink>
  </StyledBackButton>
);

export default BackButton;
