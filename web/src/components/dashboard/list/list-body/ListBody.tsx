import React from "react";
// Styled Components
import {
  ListBodyWrapper,
  ListBodyHeader,
  FloatedContent,
  NameWrapper,
  QtyWrapper,
  NoItems
} from "./list-body-styles";
// Components
import ItemList from "./item-list/ItemList";
// Interface
import { Item } from "../../../../reducers/itemsReducer";

interface ListBodyProps {
  items: Item[];
}

const ListBody: React.FC<ListBodyProps> = ({ items }): JSX.Element => {
  return (
    <ListBodyWrapper>
      {items && items.length > 0 ? (
        <>
          <ListBodyHeader>
            <FloatedContent>
              <NameWrapper>Name</NameWrapper>
              <QtyWrapper>Qty</QtyWrapper>
            </FloatedContent>
          </ListBodyHeader>
          <ItemList items={items} displayOptions={true} historyItem={false} />
        </>
      ) : (
        <NoItems>No items added yet.</NoItems>
      )}
    </ListBodyWrapper>
  );
};

export default ListBody;
