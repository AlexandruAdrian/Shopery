import React from "react";
// Import components
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";
import StyledNotFound from "./no-match-styles";
// Import prop types for NoMatch component
import { RouteComponentProps } from "react-router-dom";
// Import styled components
import { StyledButton } from "../common-styled-components/common";

const NoMatch: React.FC<RouteComponentProps> = ({ history }): JSX.Element => {
  return (
    <StyledNotFound>
      <Logo />
      <h2>
        We are sorry! Looks like we couldn't find the page you are looking for!
      </h2>
      <StyledButton formButton onClick={() => history.goBack()}>
        Go Back
      </StyledButton>
      <Footer />
    </StyledNotFound>
  );
};

export default NoMatch;
