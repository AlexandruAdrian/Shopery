export interface ErrorState {
  firstName?: string;
  lastName?: string;
  email?: string;
  oldPassword?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
}

export interface FormState {
  firstName?: string;
  lastName?: string;
  email?: string;
  oldPassword?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
}

export type FormEvent = React.FormEvent<HTMLFormElement>;
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
