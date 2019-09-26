import React, { useState, useContext } from "react";
import { Redirect } from "react-router";
import grabToken from "../../util/grab-token";
import axios from "axios";
// Context
import { AuthContext, Auth } from "../../contexts/authContext";
// Hooks
import { useFormValidation } from "../../hooks/form-validation/useFormValidation";
import validateForm from "../../hooks/form-validation/validateForm";
import { FormState } from "../../hooks/form-validation/interfaces";
// Styled Components
import {
  Container,
  FormContainer,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  ResponseMessage,
  StyledFormError
} from "../../components/common-styled-components/common";
// Components
import BackButton from "../back-button/BackButton";
import Logo from "../logo/Logo";
import Loading from "../loading-animation/Loading";

const initialState: FormState = {
  oldPassword: "",
  password: "",
  confirmPassword: ""
};

const ChangePassword: React.FC = () => {
  const { isLoggedIn } = useContext<Auth>(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const changePw = async () => {
    const token = grabToken();
    const url = "http://localhost:8000/api/v1.0/users/change-password";
    const { oldPassword, password: newPassword } = values;
    try {
      setIsLoading(true);
      const response = await axios.put(
        url,
        {
          data: {
            oldPassword,
            newPassword
          }
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response) {
        setMessage(response.data.message);
        setError("");
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
      if (err.response) setError(err.response.data.payload.message);
    }
  };

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    isSubmitting,
    errors
  } = useFormValidation(initialState, validateForm, changePw);

  const checkForError: boolean = Object.keys(errors).length > 0;

  return (
    <Container>
      {isLoggedIn ? (
        <>
          <BackButton page="/" />
          <Logo />
          {message ? (
            <ResponseMessage>{message}</ResponseMessage>
          ) : (
            <FormContainer changePass>
              <h2>Change password</h2>
              <hr />
              <StyledForm noValidate changePass onSubmit={handleSubmit}>
                <StyledLabel>Old password</StyledLabel>
                <StyledInput
                  styleError={checkForError}
                  changePass
                  name="oldPassword"
                  type="password"
                  placeholder="Old password"
                  value={values.oldPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.oldPassword && (
                  <StyledFormError>{errors.oldPassword}</StyledFormError>
                )}
                {error && <StyledFormError>{error}</StyledFormError>}
                <StyledLabel>New password</StyledLabel>
                <StyledInput
                  styleError={checkForError}
                  changePass
                  name="password"
                  type="password"
                  placeholder="New password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && (
                  <StyledFormError>{errors.password}</StyledFormError>
                )}
                <StyledLabel>Confirm new password</StyledLabel>
                <StyledInput
                  styleError={checkForError}
                  changePass
                  name="confirmPassword"
                  type="password"
                  placeholder="New password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirmPassword && (
                  <StyledFormError>{errors.confirmPassword}</StyledFormError>
                )}
                {isLoading ? (
                  <Loading />
                ) : (
                  <StyledButton
                    changePass
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </StyledButton>
                )}
              </StyledForm>
            </FormContainer>
          )}
        </>
      ) : (
        <Redirect to="/landing" />
      )}
    </Container>
  );
};

export default ChangePassword;
