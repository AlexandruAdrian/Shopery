import React, { useState } from "react";
import axios from "axios";
// Import custom hook
import { useFormValidation } from "../../hooks/form-validation/useFormValidation";
// Import form validation function to work with custom hook
import validateForm from "../../hooks/form-validation/validateForm";
// Import interfaces
import { FormState } from "../../hooks/form-validation/interfaces";
import { RouteComponentProps } from "react-router-dom";
// Import components
import PasswordFeatures from "./PasswordFeatures";
// To grab the 'query params'
import queryString from "query-string";
// Initial state for ResetPassword component
const initialState: FormState = {
  password: ""
};

const ResetPassword: React.FC<RouteComponentProps> = ({
  location
}): JSX.Element => {
  const [response, setResponse] = useState<any>(null);
  const [dbError, setDBerror] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const submitNewPw = async () => {
    const url = `http://localhost:8000/api/v1.0/users/reset-password`;
    const { password } = values;

    const token = queryString.parse(location.search).token;
    try {
      setIsLoading(true);
      const res = await axios.put(
        url,
        { newPassword: password },
        {
          params: {
            token
          }
        }
      );
      setResponse(res);
      setDBerror("");
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
    isSubmitting,
    errors
  } = useFormValidation(initialState, validateForm, submitNewPw);

  const checkForError = Object.keys(errors).length > 0 || dbError.length !== 0;

  const config = {
    checkForError,
    labelText: "Enter new password",
    inputName: "password",
    inputType: "password",
    inputPlaceholder: "******",
    value: values.password,
    handleSubmit,
    handleChange,
    handleBlur,
    isSubmitting,
    errors,
    response,
    isLoading,
    dbError,
    backTo: "/login"
  };

  return <PasswordFeatures options={config} />;
};

export default ResetPassword;
