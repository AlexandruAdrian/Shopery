import React from "react";
import axios from "axios";
import grabToken from "../../../../../../../util/grab-token";
// Styled Components
import { IconWrapper, UserContainer } from "./shared-with-user-styles";
// Components
import Avatar from "../../../../../../avatar/Avatar";
// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Interfaces
import { User } from "../../../../../../../hooks/get-user/interfaces";

interface SharedWithUserProps {
  user: User;
  setUsersData: React.Dispatch<React.SetStateAction<User[]>>;
  itemID: string;
  hideFromUserData: Function;
}

// Async function to update item.sharedWith in the database
const updateItemSharedWithList = async (_itemID: string, userEmail: string) => {
  const token = grabToken();
  const url = `http://localhost:8000/api/v1.0/items/hide-from-user/${_itemID}`;
  await axios.put(
    url,
    { email: userEmail },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

const SharedWithUser: React.FC<SharedWithUserProps> = ({
  user,
  setUsersData,
  itemID,
  hideFromUserData
}) => {
  const removeAccessToItem = () => {
    setUsersData(usersData =>
      usersData.filter(_user => _user._id !== user._id)
    );

    hideFromUserData();
    updateItemSharedWithList(itemID, user.email);
  };

  return (
    <UserContainer>
      <Avatar shared user={user} />
      <IconWrapper onClick={removeAccessToItem}>
        <FontAwesomeIcon icon="ban" />
      </IconWrapper>
    </UserContainer>
  );
};

export default SharedWithUser;
