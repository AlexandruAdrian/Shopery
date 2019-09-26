import React from "react";
// Components
import Friend from "./friend/Friend";
// Styled components
import {
  ResultContainer,
  ResultError
} from "../../../../../../../common-styled-components/common";

import { UserFriend } from "../../../../../../../../reducers/friendsReducer";
import { Item } from "../../../../../../../../reducers/itemsReducer";

interface Props {
  result: UserFriend[];
  resultError: string;
  usersData: UserFriend[];
  setUsersData: React.Dispatch<React.SetStateAction<UserFriend[]>>;
  item: Item;
}

const SearchResult: React.FC<Props> = ({
  result,
  resultError,
  usersData,
  item,
  setUsersData
}) => {
  return (
    <ResultContainer>
      {result.length > 0 ? (
        result.map((friend: UserFriend) => {
          return (
            <Friend
              key={friend._id}
              friend={friend}
              usersData={usersData}
              setUsersData={setUsersData}
              item={item}
            />
          );
        })
      ) : (
        <ResultError>{resultError}</ResultError>
      )}
    </ResultContainer>
  );
};

export default SearchResult;
