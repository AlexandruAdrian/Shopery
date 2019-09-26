import React, { useState, useContext, useEffect } from "react";
// Styled components
import {
  ResultContainer,
  ResultItem,
  ResultError,
  FloatedIconWrapper
} from "../../../common-styled-components/common";
// Components
import Avatar from "../../../avatar/Avatar";
// Context
import {
  FriendsContext,
  IFriendsContext
} from "../../../../contexts/friends-context/friendsContext";
// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Interface
import { User } from "../../../../hooks/get-user/interfaces";

interface ResultProps {
  user: User;
  resultError: string;
}

const SearchResult: React.FC<ResultProps> = ({ user, resultError }) => {
  const [isAlreadyFriend, setIsAlreadyFriend] = useState<boolean>(false);
  const { addFriend, friends } = useContext<IFriendsContext>(FriendsContext);
  const addFriendWrap = () => {
    if (addFriend) addFriend(user);
    setIsAlreadyFriend(true);
  };

  useEffect(() => {
    const checkIfFriend = (): boolean => {
      let isFriend = false;
      if (friends)
        friends.forEach(friend => {
          if (friend.email === user.email) isFriend = true;
        });

      return isFriend;
    };

    const isFriend = checkIfFriend();
    setIsAlreadyFriend(isFriend);
  }, [user, friends]);

  return (
    <ResultContainer>
      {user && user.email.length > 0 ? (
        <ResultItem>
          <>
            <Avatar user={user} />
            {isAlreadyFriend ? (
              <FloatedIconWrapper friendResult>
                <FontAwesomeIcon icon="user-check" />
              </FloatedIconWrapper>
            ) : (
              <FloatedIconWrapper onClick={addFriendWrap} friendResult>
                <FontAwesomeIcon icon="user-plus" />
              </FloatedIconWrapper>
            )}
          </>
        </ResultItem>
      ) : (
        <ResultError>{resultError}</ResultError>
      )}
    </ResultContainer>
  );
};

export default SearchResult;
