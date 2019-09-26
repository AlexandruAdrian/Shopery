import React, { useState, useContext } from "react";
import axios from "axios";
// Import custom hook
import { useFormValidation } from "../../hooks/form-validation/useFormValidation";
// Import form validation function to work with custom hook
import validateForm from "../../hooks/form-validation/validateForm";
// Import styled components
import {
  Container,
  FormContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledButton,
  StyledLink,
  StyledFormError,
  ResponseMessage
} from "../common-styled-components/common";
// Import components
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";
import BackButton from "../back-button/BackButton";
import Loading from "../loading-animation/Loading";
// Import interfaces
import { FormState } from "../../hooks/form-validation/interfaces";
import { AuthContext, Auth } from "../../contexts/authContext";
import { Redirect } from "react-router";
// Initial state for Register component
const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

const Register: React.FC = (): JSX.Element => {
  const { isLoggedIn } = useContext<Auth>(AuthContext);
  const [dbError, setDBerror] = useState<string>("");
  const [response, setResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // Serves as callback function for the custom hook.
  const registerUser = async (): Promise<void> => {
    const { firstName, lastName, email, password } = values;
    const url = "http://localhost:8000/api/v1.0/users/register";
    try {
      setIsLoading(true);
      const res = await axios.post(url, {
        firstName,
        lastName,
        email,
        password
      });
      setResponse(res);
      setIsLoading(false);
    } catch (err) {
      setDBerror(err.response.data.payload.message);
      setIsLoading(false);
    }
  };

  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    isSubmitting
  } = useFormValidation(initialState, validateForm, registerUser);
  // Helps with styling input elements (prop).
  const checkForError: boolean =
    Object.keys(errors).length > 0 || dbError.length !== 0;

  return (
    <Container>
      {isLoggedIn ? (
        <Redirect to="/" />
      ) : (
        <>
          <BackButton page="/landing" />
          <Logo />
          {response ? (
            <ResponseMessage>{response.data.message}</ResponseMessage>
          ) : (
            <FormContainer>
              <h2>Register</h2>
              <hr />
              <StyledForm noValidate onSubmit={handleSubmit}>
                <StyledLabel>First Name</StyledLabel>
                <StyledInput
                  styleError={checkForError}
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  placeholder="Ex. John"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.firstName && "inputError"}
                />
                {errors.firstName && (
                  <StyledFormError>{errors.firstName}</StyledFormError>
                )}

                <StyledLabel>Last Name</StyledLabel>
                <StyledInput
                  styleError={checkForError}
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  placeholder="Ex. Doe"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.lastName && "inputError"}
                />
                {errors.lastName && (
                  <StyledFormError>{errors.lastName}</StyledFormError>
                )}

                <StyledLabel>E-mail</StyledLabel>
                <StyledInput
                  styleError={checkForError}
                  type="email"
                  name="email"
                  value={values.email}
                  placeholder="example@mail.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && "inputError"}
                />
                {errors.email && (
                  <StyledFormError>{errors.email}</StyledFormError>
                )}

                <StyledLabel>Password</StyledLabel>
                <StyledInput
                  styleError={checkForError}
                  type="password"
                  name="password"
                  value={values.password}
                  placeholder="********"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.password && "inputError"}
                />
                {errors.password && (
                  <StyledFormError>{errors.password}</StyledFormError>
                )}
                {dbError && <StyledFormError>{dbError}</StyledFormError>}
                {isLoading ? (
                  <Loading />
                ) : (
                  <StyledButton
                    disabled={isSubmitting}
                    formButton
                    type="submit"
                  >
                    Create Account
                  </StyledButton>
                )}
              </StyledForm>
              <StyledLink to="/login">
                <p>Already have an account? Sign in instead!</p>
              </StyledLink>
            </FormContainer>
          )}
          <Footer />
        </>
      )}
    </Container>
  );
};

export default Register;
