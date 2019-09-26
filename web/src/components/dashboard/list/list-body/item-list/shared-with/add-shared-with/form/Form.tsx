import React, { useContext, useRef, useEffect } from "react";
// Styled Components
import {
  OverlayForm,
  OverlayInput,
  OverlaySearchBtn,
  StyledFormError
} from "../../../../../../../common-styled-components/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Hooks
import { useFormValidation } from "../../../../../../../../hooks/form-validation/useFormValidation";
import validateForm from "../../../../../../../../hooks/form-validation/validateForm";
// Context
import {
  FriendsContext,
  IFriendsContext
} from "../../../../../../../../contexts/friends-context/friendsContext";
import { UserFriend } from "../../../../../../../../reducers/friendsReducer";

interface FormProps {
  setResult: React.Dispatch<React.SetStateAction<UserFriend[]>>;
  setResultError: React.Dispatch<React.SetStateAction<string>>;
}

const initialState = {
  name: ""
};

const Form: React.FC<FormProps> = ({ setResult, setResultError }) => {
  const { friends } = useContext<IFriendsContext>(FriendsContext);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const searchFriends = () => {
    const { name } = values;
    const result: UserFriend[] = [];
    if (friends)
      friends.forEach(friend => {
        const firstName = friend.firstName.toLowerCase().trim();
        const lastName = friend.lastName.toLowerCase().trim();

        if (
          firstName === (name as string).toLowerCase().trim() ||
          lastName === (name as string).toLowerCase().trim()
        )
          result.push(friend);
      });

    if (result.length < 1) setResultError("No results!");
    setResult(result);
  };

  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    isSubmitting
  } = useFormValidation(initialState, validateForm, searchFriends);

  const checkForError: boolean = Object.keys(errors).length > 0;

  return (
    <OverlayForm onSubmit={handleSubmit}>
      <OverlayInput
        ref={inputRef}
        styleError={checkForError}
        type="text"
        placeholder="Search by first name or last name"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <OverlaySearchBtn type="submit" disabled={isSubmitting}>
        <FontAwesomeIcon icon="search" />
      </OverlaySearchBtn>
      <StyledFormError friendForm>
        <p>{errors.name}</p>
      </StyledFormError>
    </OverlayForm>
  );
};

export default Form;
