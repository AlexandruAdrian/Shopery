import React, { useState, useEffect, useContext } from "react";
import grabToken from "../../../../../../../../../util/grab-token";
import axios from "axios";
// Components
import Avatar from "../../../../../../../../avatar/Avatar";
// Styled Components
import {
  ResultItem,
  FloatedIconWrapper
} from "../../../../../../../../common-styled-components/common";
// Contexts
import {
  ListContext,
  ItemListContext
} from "../../../../../../../../../contexts/listContext";
// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Interface
import { UserFriend } from "../../../../../../../../../reducers/friendsReducer";
import { Item } from "../../../../../../../../../reducers/itemsReducer";

export interface Props {
  friend: UserFriend;
  usersData: UserFriend[];
  setUsersData: React.Dispatch<React.SetStateAction<UserFriend[]>>;
  item: Item;
}

const Friend: React.FC<Props> = ({ friend, usersData, setUsersData, item }) => {
  const [alreadySharedWith, setAlreadySharedWith] = useState<boolean>(false);
  const { dispatch } = useContext<ItemListContext>(ListContext);
  const updateItemSharedWithInDB = async (
    friendEmail: string,
    itemID: string
  ) => {
    const token = grabToken();
    const url = `http://localhost:8000/api/v1.0/items/share-with-user/${itemID}`;
    await axios.put(
      url,
      { email: friendEmail },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };

  const addFriend = () => {
    updateItemSharedWithInDB(friend.email, item._id);
    setUsersData([friend, ...usersData]);
    if (dispatch)
      dispatch({
        type: "SHARE_ITEM",
        item: { _id: item._id, sharedWith: item.sharedWith }
      });
  };

  useEffect(() => {
    usersData.forEach(user => {
      if (friend._id === user._id) setAlreadySharedWith(true);
    });
  }, [friend._id, usersData]);

  return (
    <ResultItem>
      <Avatar user={friend} />
      {alreadySharedWith ? (
        <FloatedIconWrapper friendResult>
          <FontAwesomeIcon icon="user-check" />
        </FloatedIconWrapper>
      ) : (
        <FloatedIconWrapper friendResult onClick={addFriend}>
          <FontAwesomeIcon icon="user-plus" />
        </FloatedIconWrapper>
      )}
    </ResultItem>
  );
};

export default Friend;
