import React, { useContext, useRef } from "react";
import axios from "axios";
// Import styled components
import {
  InputWrapper,
  ListItemInput,
  ListItemLabel,
  AddButton
} from "./add-item-form-styles";
import {
  StyledForm,
  StyledFormError,
  ErrorsContainer
} from "../../../../common-styled-components/common";
// Context
import {
  ListContext,
  ItemListContext
} from "../../../../../contexts/listContext";
import { Item } from "../../../../../reducers/itemsReducer";
// Util
import grabToken from "../../../../../util/grab-token";
// Hooks
import useItemFormValidation from "../../../../../hooks/item-form-validation/useItemFormValidation";
import validateItemForm from "../../../../../hooks/item-form-validation/validateItemForm";
// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Sends item info to DB.
const sendItem = async (item: Item): Promise<Item | void> => {
  let token = grabToken();
  const url = "http://localhost:8000/api/v1.0/items/add-item";
  const response = await axios.post(url, item, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (response) return response.data.addedItem;
};

const initialState: Item = {
  name: "",
  quantity: 1,
  isShared: false,
  isBought: false,
  _id: ""
};

const AddItemForm: React.FC = (): JSX.Element => {
  const { dispatch } = useContext<ItemListContext>(ListContext);

  const dispatchItemData = async () => {
    values.isShared = checked;
    values.name = values.name.trim();
    // Send the item to DB.
    const sentItem = await sendItem(values);

    // Dispatch action to update state.
    if (dispatch) {
      dispatch({
        type: "ADD_ITEM",
        item: {
          ...sentItem
        }
      });
      if (nameInputRef.current) nameInputRef.current.focus();
    }
  };

  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    isSubmitting,
    checked
  } = useItemFormValidation(initialState, validateItemForm, dispatchItemData);

  const nameInputRef = useRef<HTMLInputElement>(null);

  const checkForError: boolean = Object.keys(errors).length > 0 ? true : false;

  return (
    <StyledForm listHeader onSubmit={handleSubmit}>
      <InputWrapper itemName>
        <ListItemLabel itemName>Item Name</ListItemLabel>
        <ListItemInput
          itemName
          styleError={checkForError}
          ref={nameInputRef}
          type="text"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </InputWrapper>
      <InputWrapper itemQty>
        <ListItemLabel>Qty</ListItemLabel>
        <ListItemInput
          styleError={checkForError}
          type="number"
          placeholder="1"
          name="quantity"
          value={values.quantity}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </InputWrapper>
      <InputWrapper setShare>
        <ListItemLabel setShare htmlFor="isShared">
          {checked ? (
            <FontAwesomeIcon icon="lock-open" />
          ) : (
            <FontAwesomeIcon icon="lock" />
          )}
        </ListItemLabel>
        <ListItemInput
          type="checkbox"
          name="isShared"
          checked={checked}
          value={`${!checked}`}
          onChange={handleChange}
        />
      </InputWrapper>
      <AddButton disabled={isSubmitting} type="submit">
        Add
      </AddButton>
      {checkForError && (
        <ErrorsContainer>
          {errors.name && (
            <StyledFormError itemForm>{errors.name}</StyledFormError>
          )}
          {errors.quantity && (
            <StyledFormError itemForm>{errors.quantity}</StyledFormError>
          )}
        </ErrorsContainer>
      )}
    </StyledForm>
  );
};

export default AddItemForm;
