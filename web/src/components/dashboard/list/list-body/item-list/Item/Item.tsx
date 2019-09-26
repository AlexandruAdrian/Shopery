import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import grabToken from "../../../../../../util/grab-token";
// Components
import SharedWith from "../shared-with/SharedWith";
// Styled Components
import { NameWrapper, QtyWrapper } from "../../list-body-styles";
import { StyledItem, ItemDetails, ItemOptions } from "./item-styles";
// Import FA Icon
import Icon from "../../../../../icon/Icon";
import { IconWrapper } from "../../../../../icon/icon-styles";
// Interfaces
import { Item as ItemData } from "../../../../../../reducers/itemsReducer";
import { User } from "../../../../../../hooks/get-user/interfaces";
// Contexts
import {
  ListContext,
  ItemListContext
} from "../../../../../../contexts/listContext";
import { AuthContext, Auth } from "../../../../../../contexts/authContext";
import {
  EditContext,
  ItemEditContext
} from "../../../../../../contexts/editContext";
// Utilities
import {
  deleteFromDB,
  updateItemBoughtStatus,
  updateItemShareStatus
} from "./item-utils";

interface ItemProp {
  item: ItemData;
  displayOptions: boolean;
  historyItem: boolean;
}

const Item: React.FC<ItemProp> = ({ item, displayOptions, historyItem }) => {
  const { dispatch } = useContext<ItemListContext>(ListContext);
  const { showEdit, setItemData } = useContext<ItemEditContext>(EditContext);
  const { setLoggedIn } = useContext<Auth>(AuthContext);
  const [displaySharedWith, setDisplaySharedWith] = useState<boolean>(false);
  const [usersData, setUsersData] = useState<User[]>([]);
  const [sharedWith, setSharedWith] = useState<string[]>([]);

  // Click handler for edit.
  const handleEdit = () => {
    if (showEdit) showEdit();
    if (setItemData) setItemData(item);
  };

  const hideFromUserData = () => {
    if (usersData.length === 1) {
      if (dispatch && setLoggedIn) {
        updateItemShareStatus(
          `http://localhost:8000/api/v1.0/items/hide-item/${item._id}`
        );
        if (dispatch) dispatch({ type: "HIDE_ITEM", item: { _id: item._id } });
      }
    }
  };

  // Mark item as bought.
  const buyItem = () => {
    if (dispatch) {
      // Same action type as deleting because the result is the same.
      dispatch({
        type: "DELETE_ITEM",
        item: {
          _id: item._id
        }
      });
    }
    if (setLoggedIn)
      updateItemBoughtStatus(
        `http://localhost:8000/api/v1.0/items/mark-bought/${item._id}`
      );
  };

  // Deletes an item from item state also updates the DB.
  const deleteItem = () => {
    if (dispatch) {
      dispatch({
        type: "DELETE_ITEM",
        item: {
          _id: item._id
        }
      });

      if (setLoggedIn) deleteFromDB(item._id);
    }
  };
  // Updates an item shared status in the state also in the DB.
  const shareItem = () => {
    if (item.isShared && setLoggedIn) {
      updateItemShareStatus(
        `http://localhost:8000/api/v1.0/items/hide-item/${item._id}`
      );
      if (dispatch) dispatch({ type: "HIDE_ITEM", item: { _id: item._id } });
    } else {
      if (setLoggedIn)
        updateItemShareStatus(
          `http://localhost:8000/api/v1.0/items/share-with-all/${item._id}`
        ).then(response => {
          if (response) setSharedWith(response.data.sharedWith);
        });

      if (dispatch)
        dispatch({
          type: "SHARE_ITEM",
          item: { _id: item._id, sharedWith }
        });
    }
  };

  // Toggle display of sharedWith users tab
  const toggleDisplay = () => {
    setDisplaySharedWith(!displaySharedWith);
  };
  // Fetch user info for sharedWith tab
  useEffect(() => {
    let subscribed = true;
    const findUsers = async () => {
      try {
        const token = grabToken();

        const url = "http://localhost:8000/api/v1.0/users/shared-with";
        const response = await axios.get(url, {
          params: {
            users: sharedWith
          },
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (subscribed) setUsersData(response.data.users);
      } catch (err) {
        if (err.response) console.log(err.response.data.payload.message);
      }
    };

    if (sharedWith && sharedWith.length > 0) findUsers();

    return () => {
      subscribed = false;
    };
  }, [sharedWith, setLoggedIn]);
  // Update shared with tab if the user toggles the 'lock' option
  useEffect(() => {
    if (item.sharedWith && item.isShared && item.sharedWith.length > 0)
      setSharedWith(item.sharedWith);
    if (!item.isShared) setUsersData([]);
  }, [item.isShared, item.sharedWith]);

  return (
    <>
      <StyledItem>
        <ItemDetails historyList={historyItem} onClick={buyItem}>
          <NameWrapper>{item.name}</NameWrapper>
          <QtyWrapper itemQty>{item.quantity}</QtyWrapper>
        </ItemDetails>
        {displayOptions && (
          <ItemOptions>
            {item.isShared ? (
              <IconWrapper liOption onClick={shareItem}>
                <Icon liOption icon="lock-open" />
              </IconWrapper>
            ) : (
              <IconWrapper liOption onClick={shareItem}>
                <Icon liOption icon="lock" />
              </IconWrapper>
            )}

            <IconWrapper liOption onClick={handleEdit}>
              <Icon liOption icon="edit" />
            </IconWrapper>

            <IconWrapper liOption onClick={deleteItem}>
              <Icon trash liOption icon="trash-alt" />
            </IconWrapper>

            {displaySharedWith ? (
              <IconWrapper liOption onClick={toggleDisplay}>
                <Icon liOption icon="caret-down" />
              </IconWrapper>
            ) : (
              <IconWrapper liOption onClick={toggleDisplay}>
                <Icon liOption icon="caret-up" />
              </IconWrapper>
            )}
          </ItemOptions>
        )}
      </StyledItem>
      {displaySharedWith && (
        <SharedWith
          usersData={usersData}
          setUsersData={setUsersData}
          hideFromUserData={hideFromUserData}
          item={item}
        />
      )}
    </>
  );
};

export default Item;
