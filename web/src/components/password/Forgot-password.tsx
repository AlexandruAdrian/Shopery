import React, { useState } from "react";
import axios from "axios";
// Import custom hook
import { useFormValidation } from "../../hooks/form-validation/useFormValidation";
// Import form validation function to work with custom hook
import validateForm from "../../hooks/form-validation/validateForm";
import PasswordFeatures from "./PasswordFeatures";
// Import interfaces
import { FormState } from "../../hooks/form-validation/interfaces";
// Initial state for ForgotPassword component
const initialState: FormState = {
  email: ""
};

const ForgotPassword: React.FC = (): JSX.Element => {
  const [response, setResponse] = useState<any>();
  const [dbError, setDBerror] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // Serves as callback for the custom hook
  const submitForgotPw = async () => {
    const { email } = values;
    const url = "http://localhost:8000/api/v1.0/users/forgot-password";

    try {
      setIsLoading(true);
      const res = await axios.post(url, { email });
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
    errors,
    isSubmitting
  } = useFormValidation(initialState, validateForm, submitForgotPw);
  // Helps with styling input elements (prop).
  const checkForError: boolean =
    Object.keys(errors).length > 0 || dbError.length !== 0;

  const config = {
    checkForError,
    labelText: "Enter your e-mail",
    inputName: "email",
    inputType: "text",
    inputPlaceholder: "example@mail.com",
    value: values.email,
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

export default ForgotPassword;
