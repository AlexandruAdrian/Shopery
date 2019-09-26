import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction
} from "react";

export interface Auth {
  isLoggedIn?: boolean;
  setLoggedIn?: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<Auth>({});

const AuthContextProvider: React.FC = props => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(
    (): boolean => {
      const token = localStorage.getItem("token");
      return token ? true : false;
    }
  );

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
