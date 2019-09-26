import React, { useContext, MouseEventHandler } from "react";
// Styled components
import { ListOptionsWrapper, IconWrapper } from "./list-options-styles";
// Import FA Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Contexts
import {
  ItemListContext,
  ListContext
} from "../../../../../contexts/listContext";

interface ListOptionsProps {
  toggleShowAdd: MouseEventHandler;
}

const ListOptions: React.FC<ListOptionsProps> = ({
  toggleShowAdd
}): JSX.Element => {
  const { isShared, toggleShareStatus } = useContext<ItemListContext>(
    ListContext
  );
  return (
    <ListOptionsWrapper>
      <IconWrapper onClick={toggleShowAdd}>
        <FontAwesomeIcon icon="plus" />
      </IconWrapper>

      <IconWrapper onClick={toggleShareStatus}>
        {isShared ? (
          <FontAwesomeIcon icon="lock-open" />
        ) : (
          <FontAwesomeIcon icon="lock" />
        )}
      </IconWrapper>
    </ListOptionsWrapper>
  );
};

export default ListOptions;
