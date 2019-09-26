import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
// Import styled components
import { ListWrapper } from "../list/list-styles";
// Import components
import ListHeader from "./list-header/ListHeader";
import ListBody from "./list-body/ListBody";
// Hooks
import useGetUser from "../../../hooks/get-user/useGetUser";
// Context
import { ListContext, ItemListContext } from "../../../contexts/listContext";

const List: React.FC = (): JSX.Element => {
  const { user, error } = useGetUser();
  const { items } = useContext<ItemListContext>(ListContext);

  return (
    <ListWrapper>
      {error ? (
        <Redirect to="/landing" />
      ) : (
        <>
          <ListHeader user={user} />
          <ListBody items={items ? items : []} />
        </>
      )}
    </ListWrapper>
  );
};

export default List;
