import React from "react";
import grabToken from "../../../../util/grab-token";
import axios from "axios";
// Styled Components
import {
  StyledFormError,
  OverlayForm,
  OverlayInput,
  OverlaySearchBtn
} from "../../../common-styled-components/common";
// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Hooks
import { useFormValidation } from "../../../../hooks/form-validation/useFormValidation";
import validateForm from "../../../../hooks/form-validation/validateForm";
// Interfaces
import { User } from "../../../../hooks/get-user/interfaces";

interface FormProps {
  setResult: React.Dispatch<React.SetStateAction<User>>;
  setResultError: React.Dispatch<React.SetStateAction<string>>;
  initialResult: User;
}

const initialState = {
  email: ""
};

const Form: React.FC<FormProps> = ({
  setResult,
  setResultError,
  initialResult
}) => {
  const fetchUser = async () => {
    const { email } = values;
    const token = grabToken();
    const url = "http://localhost:8000/api/v1.0/users/search";

    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          email
        }
      });
      if (res === undefined) setResultError("No results!");
      setResult(res.data.user);
    } catch (err) {
      if (err.response) {
        setResultError(err.response.data.payload.message);
      }
      setResult(initialResult);
    }
  };

  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    isSubmitting
  } = useFormValidation(initialState, validateForm, fetchUser);

  const checkForError: boolean = Object.keys(errors).length > 0;

  return (
    <OverlayForm onSubmit={handleSubmit} noValidate>
      <OverlayInput
        styleError={checkForError}
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Search by email"
      />
      <OverlaySearchBtn type="submit" disabled={isSubmitting}>
        <FontAwesomeIcon icon="search" />
      </OverlaySearchBtn>
      {errors.email && (
        <StyledFormError friendForm>
          <p>{errors.email}</p>
        </StyledFormError>
      )}
    </OverlayForm>
  );
};

export default Form;
