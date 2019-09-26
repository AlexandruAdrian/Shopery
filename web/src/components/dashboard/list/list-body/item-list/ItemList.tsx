import React from "react";
// Styled components
import { StyledItemList } from "./item-list-styles";
// Components
import Item from "./Item/Item";

// Interface
import { Item as ItemDetails } from "../../../../../reducers/itemsReducer";

interface ItemListProps {
  items: ItemDetails[];
  displayOptions: boolean;
  historyItem: boolean;
}

const ItemList: React.FC<ItemListProps> = ({
  items,
  displayOptions,
  historyItem
}) => {
  return (
    <StyledItemList>
      {items &&
        items.map(item => (
          <div key={item._id}>
            <Item
              item={item}
              displayOptions={displayOptions}
              historyItem={historyItem}
            />
          </div>
        ))}
    </StyledItemList>
  );
};

export default ItemList;
