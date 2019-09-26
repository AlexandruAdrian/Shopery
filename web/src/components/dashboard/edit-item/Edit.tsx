import React, { useContext, useRef, useEffect } from "react";
import axios from "axios";
// Context
import { EditContext, ItemEditContext } from "../../../contexts/editContext";
import { ListContext, ItemListContext } from "../../../contexts/listContext";
// Hooks
import useItemFormValidation from "../../../hooks/item-form-validation/useItemFormValidation";
import validateItemForm from "../../../hooks/item-form-validation/validateItemForm";
// Util
import grabToken from "../../../util/grab-token";
import { Item } from "../../../reducers/itemsReducer";
// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Styled components
import {
  EditForm,
  EditHeader,
  EditBody,
  EditInputWrapper,
  EditLabel,
  EditInput,
  EditButton
} from "./edit-styles";
import {
  ErrorsContainer,
  StyledFormError,
  Overlay
} from "../../common-styled-components/common";

// Updated item data in db.
function updateItemDB(itemID: string, itemData: Item) {
  const token = grabToken();
  const url = `http://localhost:8000/api/v1.0/items/edit-item/${itemID}`;
  axios.put(
    url,
    { itemData },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}

const Edit: React.FC = () => {
  const { hideEdit, itemData } = useContext<ItemEditContext>(EditContext);
  const { dispatch } = useContext<ItemListContext>(ListContext);
  let initialState: Item = {
    _id: "",
    name: "",
    quantity: 1,
    isShared: false,
    isBought: false,
    sharedWith: []
  };
  if (itemData) initialState = itemData;

  const dispatchEditAction = () => {
    updateItemDB(values._id, values);
    values.name = values.name.trim();
    if (dispatch)
      dispatch({
        type: "EDIT_ITEM",
        item: {
          ...values
        }
      });

    if (hideEdit) hideEdit();
  };

  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    isSubmitting
  } = useItemFormValidation(initialState, validateItemForm, dispatchEditAction);

  const nameInputRef = useRef<HTMLInputElement>(null);

  const hideEditHandler = () => {
    if (hideEdit) hideEdit();
  };

  useEffect(() => {
    if (nameInputRef.current) nameInputRef.current.focus();
  }, []);

  const checkForErrors: boolean = Object.keys(errors).length > 0 ? true : false;

  return (
    <Overlay>
      <EditForm onSubmit={handleSubmit}>
        <EditHeader>
          <div onClick={hideEditHandler}>
            <FontAwesomeIcon icon="times" />
          </div>
        </EditHeader>
        <EditBody>
          <EditInputWrapper itemName>
            <EditLabel itemName>Item name</EditLabel>
            <EditInput
              styleError={checkForErrors}
              type="text"
              name="name"
              placeholder="Name"
              ref={nameInputRef}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </EditInputWrapper>
          <EditInputWrapper itemQty>
            <EditLabel>Qty</EditLabel>
            <EditInput
              styleError={checkForErrors}
              itemQty
              type="number"
              name="quantity"
              placeholder="0"
              value={values.quantity}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </EditInputWrapper>
          <EditInputWrapper>
            <EditLabel setShare htmlFor="isShared">
              {values.isShared ? (
                <FontAwesomeIcon icon="lock-open" />
              ) : (
                <FontAwesomeIcon icon="lock" />
              )}
            </EditLabel>
            <EditInput
              setShare
              type="checkbox"
              name="isShared"
              checked={values.isShared}
              value={`${!values.isShared}`}
              onChange={handleChange}
            />
          </EditInputWrapper>
          {checkForErrors && (
            <ErrorsContainer>
              {errors.name && (
                <StyledFormError editForm>
                  <p>{errors.name}</p>
                </StyledFormError>
              )}
              {errors.quantity && (
                <StyledFormError editForm>
                  <p>{errors.quantity}</p>
                </StyledFormError>
              )}
            </ErrorsContainer>
          )}
          <EditButton disabled={isSubmitting} type="submit">
            Save
          </EditButton>
        </EditBody>
      </EditForm>
    </Overlay>
  );
};

export default Edit;
