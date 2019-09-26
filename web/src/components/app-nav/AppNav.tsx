import React from "react";
import { Link } from "react-router-dom";
//Styled Components
import { AppNavContainer } from "./app-nav-styles";
import Icon from "../icon/Icon";

const AppNav: React.FC = () => {
  return (
    <AppNavContainer>
      <Link to="/friends">
        <Icon footer icon="user-friends" text="Friends"></Icon>
      </Link>
      <Link to="/">
        <Icon footer icon="clipboard-list" text="Dashboard" />
      </Link>
      <Link to="/history">
        <Icon footer icon="history" text="History" />
      </Link>
    </AppNavContainer>
  );
};

export default AppNav;
