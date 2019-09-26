import React from "react";

//Interfaces
import { UserFriend } from "../../../../reducers/friendsReducer";
// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Styled components
import { RemoveFriendBtn } from "../list-styles";
// Components
import Avatar from "../../../avatar/Avatar";

interface FriendProps {
  friend: UserFriend;
  removeFriend?: Function;
}

const Friend: React.FC<FriendProps> = ({ friend, removeFriend }) => {
  const removeFriendWrap = () => {
    if (removeFriend) removeFriend(friend._id);
  };

  return (
    <li>
      <Avatar user={friend} />
      <RemoveFriendBtn onClick={removeFriendWrap}>
        <FontAwesomeIcon icon="user-times" />
      </RemoveFriendBtn>
    </li>
  );
};

export default Friend;
