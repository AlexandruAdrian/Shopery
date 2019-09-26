import React, { useState, useEffect } from "react";
import axios from "axios";
import grabToken from "../../../../util/grab-token";
// Styled components
import { SharedListHeader as StyledListHeader } from "../shared-items-styles";
// Interface
import { User } from "../../../../hooks/get-user/interfaces";

const initialState: User = {
  _id: "",
  firstName: "",
  lastName: "",
  email: ""
};

interface SharedListHeaderProps {
  sharedUserID: string;
}

const SharedListHeader: React.FC<SharedListHeaderProps> = ({
  sharedUserID
}) => {
  const [itemOwner, setItemOwner] = useState<User>(initialState);

  useEffect(() => {
    let subscribed = true;
    const findItemOwner = async () => {
      const token = grabToken();
      const url = `http://localhost:8000/api/v1.0/users/user/${sharedUserID}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response && subscribed) setItemOwner(response.data);
    };

    findItemOwner();
    return () => {
      subscribed = false;
    };
  }, [sharedUserID]);

  return (
    <StyledListHeader shared>
      <p>
        Shared by <span>{`${itemOwner.firstName} ${itemOwner.lastName}`}</span>
      </p>
    </StyledListHeader>
  );
};

export default SharedListHeader;
