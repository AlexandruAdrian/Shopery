import { useState, useEffect } from "react";
import { Item } from "../../reducers/itemsReducer";
import { ItemErrors } from "./interfaces";

const useItemFormValidation = (
  initialState: Item,
  validate: Function,
  callback: Function
) => {
  const [values, setValues] = useState<Item>(initialState);
  const [errors, setErrors] = useState<ItemErrors>({});
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        callback();
        setSubmitting(false);

        // Reset form values.
        setValues({
          _id: "",
          name: "",
          quantity: 0,
          isShared: false,
          isBought: false
        });
      } else {
        setSubmitting(false);
      }
    }
  }, [errors, isSubmitting, values, callback]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  };

  const handleBlur = (): void => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    if (name === "isShared") {
      setChecked(!checked);
    }

    const checkValue = () => {
      if (value === "true") {
        return true;
      } else if (value === "false") {
        return false;
      } else {
        return value;
      }
    };

    setValues({
      ...values,
      [name]: checkValue()
    });
  };

  return {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    isSubmitting,
    checked
  };
};

export default useItemFormValidation;
