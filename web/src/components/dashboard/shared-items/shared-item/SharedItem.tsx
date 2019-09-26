import React from "react";
import axios from "axios";
import grabToken from "../../../../util/grab-token";
// Styled Components
import { StyledSharedItem } from "./shared-item-styles";
// Interface
import { Item } from "../../../../reducers/itemsReducer";

interface SharedItemProps {
  item: Item;
  buySharedItem: Function;
}

const SharedItem: React.FC<SharedItemProps> = ({ item, buySharedItem }) => {
  const markAsBought = async () => {
    const token = grabToken();
    const url = `http://localhost:8000/api/v1.0/items/mark-bought/${item._id}`;
    const response = await axios.put(
      url,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (response) {
      if (response.status === 200) buySharedItem(item._id);
    }
  };

  return (
    <StyledSharedItem onClick={markAsBought}>
      <p>{`${item.name}`}</p> <p>{`${item.quantity}`}</p>
    </StyledSharedItem>
  );
};

export default SharedItem;
