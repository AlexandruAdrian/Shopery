import React, {
  createContext,
  useEffect,
  useReducer,
  useState,
  Dispatch,
  SetStateAction,
  MouseEventHandler
} from "react";
import axios from "axios";
// Reducers
import { itemsReducer, Item } from "../reducers/itemsReducer";
// Util
import grabToken from "../util/grab-token";
// Fetch friends
import { getFriendIDs } from "../contexts/friends-context/friends-context-utils";

export interface Action {
  type: string;
  item?: {
    _id?: string;
    name?: string;
    quantity?: number;
    isBought?: boolean;
    isShared?: boolean;
    sharedWith?: string[];
  };
}

export interface ItemListContext {
  items?: Item[];
  dispatch?: Dispatch<SetStateAction<Action>>;
  setIsShared?: Dispatch<SetStateAction<boolean>>;
  isShared?: boolean;
  toggleShareStatus?: MouseEventHandler;
}

export const ListContext = createContext<ItemListContext>({});

const ListContextProvider: React.FC = props => {
  const [items, dispatch] = useReducer(itemsReducer, []);
  const [isShared, setIsShared] = useState<boolean>();
  const [userFriends, setUserFriends] = useState<string[]>([]);

  // Updates items share status in the DB.
  const updateShareStatus = async (url: string) => {
    let token = grabToken();
    const response = await axios.put(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response;
  };

  const toggleShareStatus = () => {
    if (isShared) {
      updateShareStatus("http://localhost:8000/api/v1.0/items/hide-list");
      if (dispatch) dispatch({ type: "HIDE_LIST" });
    } else {
      updateShareStatus("http://localhost:8000/api/v1.0/items/share-list").then(
        response => {
          if (response) setUserFriends(response.data.userFriends);
        }
      );
      if (dispatch)
        dispatch({ type: "SHARE_LIST", item: { sharedWith: userFriends } });
    }

    setIsShared(!isShared);
  };

  useEffect(() => {
    let subscribed = true;
    // For setting the initial list state.
    const fetchItems = async (): Promise<Item[] | void> => {
      const url = "http://localhost:8000/api/v1.0/items/get-items";
      const token = grabToken();
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return response ? response.data.items : null;
    };

    fetchItems()
      .then(items => {
        if (subscribed) dispatch({ type: "SET_INITIAL", items });
      })
      .catch(err => console.log(err)); //FOR NOW

    return () => {
      subscribed = false;
    };
  }, []);

  useEffect(() => {
    let shared = false;
    let subscribed = true;
    items.forEach(item => {
      if (item.isShared) {
        shared = true;
      }
    });
    if (subscribed) setIsShared(shared);

    return () => {
      subscribed = false;
    };
  }, [items]);

  useEffect(() => {
    let subscribed = true;
    getFriendIDs("http://localhost:8000/api/v1.0/social/friends").then(
      response => {
        if (response && subscribed)
          setUserFriends(response.friendList.friendIDs);
      }
    );

    return () => {
      subscribed = false;
    };
  }, []);

  return (
    <ListContext.Provider
      value={{ items, dispatch, isShared, toggleShareStatus }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
