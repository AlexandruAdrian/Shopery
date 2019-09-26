import React, { FormEventHandler, ChangeEventHandler, useContext } from "react";
// Import styled components
import {
  Container,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  ResponseMessage,
  StyledFormError
} from "../common-styled-components/common";
// Import Components
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";
import Loading from "../loading-animation/Loading";
import BackButton from "../back-button/BackButton";
import { Auth, AuthContext } from "../../contexts/authContext";
import { Redirect } from "react-router";
// Import context

interface PwFeaturesConfig {
  options: {
    checkForError: boolean;
    labelText: string;
    inputName: string;
    inputType: string;
    inputPlaceholder: string;
    value: string | undefined;
    handleSubmit: FormEventHandler;
    handleChange: ChangeEventHandler;
    handleBlur: React.FocusEventHandler;
    isSubmitting: boolean;
    errors: any;
    response: any;
    isLoading: boolean;
    dbError: any;
    backTo: string;
  };
}
// This components works with Forgot password and Reset password
const PasswordFeatures: React.FC<PwFeaturesConfig> = ({
  options
}): JSX.Element => {
  const { isLoggedIn } = useContext<Auth>(AuthContext);
  return (
    <Container>
      {isLoggedIn ? (
        <Redirect to="/" />
      ) : (
        <>
          <BackButton page={options.backTo} />
          <Logo />
          {options.response ? (
            <ResponseMessage>{options.response.data.message}</ResponseMessage>
          ) : (
            <StyledForm recover noValidate onSubmit={options.handleSubmit}>
              <StyledLabel>{options.labelText}</StyledLabel>
              <StyledInput
                styleError={options.checkForError}
                name={options.inputName}
                type={options.inputType}
                value={options.value}
                placeholder={options.inputPlaceholder}
                onChange={options.handleChange}
                onBlur={options.handleBlur}
              />
              {options.errors && (
                <StyledFormError>{options.errors.password}</StyledFormError>
              )}
              {options.dbError && (
                <StyledFormError>{options.dbError}</StyledFormError>
              )}
              {options.isLoading ? (
                <Loading />
              ) : (
                <StyledButton
                  disabled={options.isSubmitting}
                  formButton
                  type="submit"
                >
                  Submit
                </StyledButton>
              )}
            </StyledForm>
          )}
          <Footer />
        </>
      )}
    </Container>
  );
};

export default PasswordFeatures;
