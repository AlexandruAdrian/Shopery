import React, { useContext } from "react";
// Components
import Friend from "./list-friend-item/Friend";
// Styled Componnts
import { StyledList } from "./list-styles";
// Interface
import { UserFriend } from "../../../reducers/friendsReducer";
// Context
import {
  FriendsContext,
  IFriendsContext
} from "../../../contexts/friends-context/friendsContext";

const List: React.FC = () => {
  const { friends, removeFriend } = useContext<IFriendsContext>(FriendsContext);

  return (
    <StyledList>
      {friends &&
        friends.map((friend: UserFriend) => {
          return (
            <Friend
              key={friend._id}
              friend={friend}
              removeFriend={removeFriend}
            />
          );
        })}
    </StyledList>
  );
};

export default List;
