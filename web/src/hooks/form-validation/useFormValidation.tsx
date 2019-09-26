import { useState, useEffect } from "react";

import { FormState, ErrorState, FormEvent, ChangeEvent } from "./interfaces";

export const useFormValidation = (
  initialState: FormState,
  validate: Function,
  callback: Function
) => {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<ErrorState>({});
  const [isSubmitting, setSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        callback();
        setSubmitting(false);
        setErrors({});
      } else {
        setSubmitting(false);
      }
    }
  }, [errors, isSubmitting, values, callback]);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  };

  const handleBlur = (): void => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const handleChange = (e: ChangeEvent): void => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  return {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    isSubmitting
  };
};
