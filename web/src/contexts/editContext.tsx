import React, { createContext, useState } from "react";
// Item interface
import { Item } from "../reducers/itemsReducer";

export interface ItemEditContext {
  displayEdit?: boolean;
  showEdit?: Function;
  hideEdit?: Function;
  itemData?: Item;
  setItemData?: React.Dispatch<React.SetStateAction<any>>;
}

const initialItemState: Item = {
  _id: "",
  name: "",
  quantity: 0,
  isShared: false,
  isBought: false
};

export const EditContext = createContext<ItemEditContext>({});

const EditContextProvider: React.FC = props => {
  const [displayEdit, setDisplayEdit] = useState<boolean>(false);
  const [itemData, setItemData] = useState<Item>(initialItemState);

  const showEdit = () => {
    setDisplayEdit(true);
  };

  const hideEdit = () => {
    setDisplayEdit(false);
  };

  return (
    <EditContext.Provider
      value={{ displayEdit, showEdit, hideEdit, itemData, setItemData }}
    >
      {props.children}
    </EditContext.Provider>
  );
};

export default EditContextProvider;
