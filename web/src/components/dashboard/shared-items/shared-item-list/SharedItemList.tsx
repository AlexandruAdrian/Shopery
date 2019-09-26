import React, { useState, useEffect } from "react";
// Styled components
import { StyledItemList } from "../../list/list-body/item-list/item-list-styles";
import SharedBodyHeader from "../shared-body-header/SharedBodyHeader";
// Components
import SharedItem from "../shared-item/SharedItem";
// Interface
import { Item } from "../../../../reducers/itemsReducer";

interface SharedItemListProps {
  items: Item[];
}

const SharedItemList: React.FC<SharedItemListProps> = ({ items }) => {
  const [sharedItems, setSharedItems] = useState<Item[]>(items);

  const buySharedItem = (itemID: string) => {
    setSharedItems(items => items.filter(item => item._id !== itemID));
  };

  useEffect(() => {
    let subscribed = true;
    if (subscribed) setSharedItems(items);

    return () => {
      subscribed = false;
    };
  }, [items]);

  return (
    <StyledItemList>
      <SharedBodyHeader />
      {sharedItems.map(item => (
        <SharedItem key={item._id} item={item} buySharedItem={buySharedItem} />
      ))}
    </StyledItemList>
  );
};

export default SharedItemList;
