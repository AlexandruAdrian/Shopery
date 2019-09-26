import React, { useState } from "react";
import { User } from "../../../../../../hooks/get-user/interfaces";
// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Styled Components
import {
  SharedWithContainer,
  Header,
  Title,
  AddBtn,
  Users
} from "./shared-with-styles";
// Components
import SharedWithUser from "./shared-with-user/SharedWithUser";
import AddSharedWith from "../shared-with/add-shared-with/AddSharedWith";
import { NoItems } from "../../list-body-styles";
import { Item } from "../../../../../../reducers/itemsReducer";

interface SharedWithProps {
  usersData: User[];
  setUsersData: React.Dispatch<React.SetStateAction<User[]>>;
  hideFromUserData: Function;
  item: Item;
}

const SharedWith: React.FC<SharedWithProps> = ({
  usersData,
  setUsersData,
  hideFromUserData,
  item
}) => {
  const [showAddSharedWith, setShowAddSharedWith] = useState<boolean>(false);

  const toggleAddSharedWith = () => {
    setShowAddSharedWith(!showAddSharedWith);
  };

  return (
    <SharedWithContainer>
      <Header>
        <Title>Shared With</Title>
        <AddBtn onClick={toggleAddSharedWith}>
          <FontAwesomeIcon icon="user-plus" />
        </AddBtn>
      </Header>
      {usersData.length > 0 ? (
        <Users>
          {usersData.map(user => (
            <SharedWithUser
              key={user._id}
              user={user}
              setUsersData={setUsersData}
              itemID={item._id}
              hideFromUserData={hideFromUserData}
            />
          ))}
        </Users>
      ) : (
        <NoItems shared>This item is currently set as private.</NoItems>
      )}
      {showAddSharedWith && (
        <AddSharedWith
          usersData={usersData}
          setUsersData={setUsersData}
          item={item}
          toggleAddSharedWith={toggleAddSharedWith}
        />
      )}
    </SharedWithContainer>
  );
};

export default SharedWith;
