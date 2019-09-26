import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
// Import styled components
import { DashboardWrapper } from "./dashboard-styles";
import { Container } from "../common-styled-components/common";
// Import components
import AppNav from "../app-nav/AppNav";
import AppHeader from "../app-header/AppHeader";
import List from "./list/List";
import Edit from "./edit-item/Edit";
import SharedItems from "./shared-items/SharedItems";
import Menu from "../menu/Menu";
// Import Context
import { AuthContext, Auth } from "../../contexts/authContext";
import { EditContext, ItemEditContext } from "../../contexts/editContext";
import { MenuContext, Menu_Context } from "../../contexts/menuContext";
import FriendsContextProvider from "../../contexts/friends-context/friendsContext";

const Dashboard: React.FC = (): JSX.Element => {
  const { isLoggedIn } = useContext<Auth>(AuthContext);
  const { displayEdit } = useContext<ItemEditContext>(EditContext);
  const { showMenu, toggleMenu } = useContext<Menu_Context>(MenuContext);

  return (
    <Container dashboard>
      {isLoggedIn ? (
        <>
          {displayEdit && <Edit />}
          <Menu visible={showMenu} toggleMenu={toggleMenu} />
          <AppHeader toggleMenu={toggleMenu} visible={showMenu} />
          <DashboardWrapper>
            <FriendsContextProvider>
              <List />
              <SharedItems />
            </FriendsContextProvider>
          </DashboardWrapper>
          <AppNav />
        </>
      ) : (
        <Redirect to="/landing" />
      )}
    </Container>
  );
};

export default Dashboard;
