import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
// Components
import AppHeader from "../app-header/AppHeader";
import AppNav from "../app-nav/AppNav";
import List from "./list/List";
import AddFriend from "./add-friend/AddFriend";
import Menu from "../menu/Menu";
// Styled Components
import { Container, Wrapper } from "../common-styled-components/common";
import { ListWrapper } from "../dashboard/list/list-styles";
import { FriendsListHead, FriendsIconWrapper } from "./friends-list-styles";
// Import FA Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Context
import { Auth, AuthContext } from "../../contexts/authContext";
import { MenuContext, Menu_Context } from "../../contexts/menuContext";
import FriendsContextProvider from "../../contexts/friends-context/friendsContext";

const FriendsList: React.FC = () => {
  const { isLoggedIn } = useContext<Auth>(AuthContext);
  const { showMenu, toggleMenu } = useContext<Menu_Context>(MenuContext);
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);

  const toggleAddFriend = () => {
    setShowAddFriend(!showAddFriend);
  };

  return (
    <Container dashboard>
      {isLoggedIn ? (
        <>
          <FriendsContextProvider>
            {showAddFriend && <AddFriend setShowAddFriend={setShowAddFriend} />}
            <Menu visible={showMenu} toggleMenu={toggleMenu} />
            <AppHeader toggleMenu={toggleMenu} visible={showMenu} />
            <Wrapper>
              <ListWrapper>
                <FriendsListHead>
                  <FriendsIconWrapper onClick={toggleAddFriend}>
                    <FontAwesomeIcon icon="user-plus" />
                  </FriendsIconWrapper>
                  <h4>Friends</h4>
                </FriendsListHead>
                <List />
              </ListWrapper>
            </Wrapper>
            <AppNav />
          </FriendsContextProvider>
        </>
      ) : (
        <Redirect to="/landing" />
      )}
    </Container>
  );
};

export default FriendsList;
