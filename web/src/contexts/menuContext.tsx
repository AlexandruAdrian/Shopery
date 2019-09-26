import React, { createContext, useState } from "react";

export interface Menu_Context {
  showMenu: boolean;
  toggleMenu: () => void;
}

const init_context = {
  showMenu: false,
  toggleMenu: () => {}
};

export const MenuContext = createContext<Menu_Context>(init_context);

const MenuContextProvider: React.FC = props => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <MenuContext.Provider value={{ showMenu, toggleMenu }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
