import { FormState, ErrorState } from "./interfaces";

export default function validateForm(values: FormState) {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
  const {
    firstName,
    lastName,
    email,
    oldPassword,
    password,
    confirmPassword,
    name
  } = values;

  let errors: ErrorState = {};

  if (values.hasOwnProperty("name")) {
    if (!name) {
      errors.name = "Name is required";
    }
  }

  if (values.hasOwnProperty("firstName")) {
    if (!firstName) {
      errors.firstName = "First name is required";
    }
  }

  if (values.hasOwnProperty("lastName")) {
    if (!lastName) {
      errors.lastName = "Last name is required";
    }
  }

  if (values.hasOwnProperty("email")) {
    if (!email) {
      errors.email = "E-mail is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid e-mail";
    }
  }

  if (values.hasOwnProperty("oldPassword")) {
    if (!oldPassword || oldPassword.trim().length === 0) {
      errors.oldPassword = "Password is required";
    } else if (oldPassword.length < 6 || oldPassword.trim().length < 6) {
      errors.oldPassword = "Password must be at least 6 characters";
    }
  }

  if (values.hasOwnProperty("password")) {
    if (!password || password.trim().length === 0) {
      errors.password = "Password is required";
    } else if (password.length < 6 || password.trim().length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
  }

  if (values.hasOwnProperty("confirmPassword")) {
    if (!confirmPassword || confirmPassword.trim().length === 0) {
      errors.confirmPassword = "Password is required";
    } else if (
      confirmPassword.length < 6 ||
      confirmPassword.trim().length < 6
    ) {
      errors.confirmPassword = "Password must be at least 6 characters";
    } else if (confirmPassword !== password) {
      errors.confirmPassword =
        "Confirm password should be the same as new password";
    }
  }

  return errors;
}
