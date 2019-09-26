import React, { useContext } from "react";

// Styled Components
import {
  MenuContainer,
  Content,
  Options,
  Option,
  StyledLink
} from "./menu-styles";
// Hooks
import useGetUser from "../../hooks/get-user/useGetUser";
// Components
import Avatar from "../avatar/Avatar";
// Context
import { AuthContext, Auth } from "../../contexts/authContext";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  visible: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<Props> = ({ visible, toggleMenu }) => {
  const { user } = useGetUser();
  const { setLoggedIn } = useContext<Auth>(AuthContext);

  const logOut = () => {
    window.localStorage.removeItem("token");
    if (setLoggedIn) setLoggedIn(false);
    toggleMenu();
  };

  return (
    <MenuContainer visible={visible}>
      <Content>
        <Avatar reversed={true} user={user} />
        <Options>
          <Option onClick={toggleMenu}>
            <StyledLink to="/users/change-password">
              <FontAwesomeIcon icon="lock-open" />
              <p>Change Password</p>
            </StyledLink>
          </Option>
          <Option onClick={logOut}>
            <FontAwesomeIcon icon="sign-out-alt" />
            <p>Log Out</p>
          </Option>
        </Options>
      </Content>
    </MenuContainer>
  );
};

export default Menu;
