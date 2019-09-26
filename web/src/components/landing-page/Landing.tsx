import React, { useContext } from "react";
// Import styled components
import {
  Container,
  StyledLink,
  StyledButton
} from "../common-styled-components/common";
import { Description, ButtonsContainer } from "./landing-styles";
// Import components
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";
// Import context
import { Auth, AuthContext } from "../../contexts/authContext";
import { Redirect } from "react-router";

const LandingPage: React.FC = (): JSX.Element => {
  const { isLoggedIn } = useContext<Auth>(AuthContext);
  return (
    <Container>
      {isLoggedIn ? (
        <Redirect to="/" />
      ) : (
        <>
          <Logo />

          <Description>
            <h4>
              <span>Team up</span> with your friends for a better shopping
              experience.
            </h4>
          </Description>

          <ButtonsContainer>
            <StyledLink to="/login">
              <StyledButton>Login</StyledButton>
            </StyledLink>
            <p>OR</p>
            <StyledLink to="/register">
              <StyledButton reversed>Create a new account</StyledButton>
            </StyledLink>
          </ButtonsContainer>

          <Footer />
        </>
      )}
    </Container>
  );
};

export default LandingPage;
