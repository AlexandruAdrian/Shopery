import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Components
import LandingPage from "./components/landing-page/Landing";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import ForgotPassword from "./components/password/Forgot-password";
import ResetPassword from "./components/password/Reset-password";
import ChangePassword from "./components/password/Change-password";
import Confirm from "./components/confirm/Confirm";
import FriendsList from "./components/friends-list/FriendsList";
import DashboardWContext from "./components/dashboard-w-context/DashboardWContext";
import History from "./components/history/History";
import NoMatch from "./components/no-match/NoMatch";
// Contexts
import AuthContextProvider from "./contexts/authContext";
import MenuContextProvider from "./contexts/menuContext";

const Routes: React.FC = (): JSX.Element => (
  <AuthContextProvider>
    <MenuContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={DashboardWContext} />
          <Route path="/landing" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/users/forgot-password" component={ForgotPassword} />
          <Route path="/users/reset-password" component={ResetPassword} />
          <Route path="/users/change-password" component={ChangePassword} />
          <Route path="/users/confirm" component={Confirm} />
          <Route path="/history" component={History} />
          <Route path="/friends" component={FriendsList} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </MenuContextProvider>
  </AuthContextProvider>
);

export default Routes;
