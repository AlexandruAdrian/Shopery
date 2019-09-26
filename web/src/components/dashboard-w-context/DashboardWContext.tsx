import React from "react";
// Components
import Dashboard from "../dashboard/Dashboard";
// Context
import EditContextProvider from "../../contexts/editContext";
import ListContextProvider from "../../contexts/listContext";

const DashboardWContext: React.FC = () => {
  return (
    <EditContextProvider>
      <ListContextProvider>
        <Dashboard />
      </ListContextProvider>
    </EditContextProvider>
  );
};

export default DashboardWContext;
