import React, { useEffect, useState, useCallback } from "react";

import axios from "axios";
import queryString from "query-string";
import { RouteComponentProps } from "react-router-dom";

import Logo from "../logo/Logo";
import Footer from "../footer/Footer";
import {
  Container,
  ResponseMessage,
  StyledLink
} from "../common-styled-components/common";

const Confirm: React.FC<RouteComponentProps> = ({
  location,
  history
}): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const url = "http://localhost:8000/api/v1.0/users/confirm";

  const sendCode = useCallback(
    async (code: any): Promise<void> => {
      let res;
      try {
        res = await axios.get(url, {
          params: {
            code
          }
        });

        setIsActive(res.data.isActive);
        setMessage(res.data.message);

        localStorage.setItem("token", res.data.token);
        setTimeout(() => history.push("/"), 3000);
      } catch (err) {
        setError(err.response.data.payload.message);
      }
    },
    [history]
  );

  useEffect(() => {
    const code = queryString.parse(location.search).code;
    sendCode(code);
  }, [location, sendCode]);

  return (
    <Container>
      <Logo />
      {isActive && <ResponseMessage>{message}</ResponseMessage>}
      {error && <ResponseMessage>{error}</ResponseMessage>}
      <StyledLink to="/">
        <p>Click here if the browser doesn't automatically redirect you.</p>
      </StyledLink>
      <Footer />
    </Container>
  );
};

export default Confirm;
