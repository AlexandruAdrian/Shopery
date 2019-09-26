import React from "react";
// Styled Components
import { StyledSharedBodyHeader } from "./shared-body-header-styles";

const SharedBodyHeader: React.FC = () => {
  return (
    <StyledSharedBodyHeader>
      <p>Name</p>
      <p>Qty</p>
    </StyledSharedBodyHeader>
  );
};

export default SharedBodyHeader;
