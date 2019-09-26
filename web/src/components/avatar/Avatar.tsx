import React from "react";
// Styled components
import { UserDetails, StyledUserAvatar, StyledUserName } from "./avatar-styles";
// Interfaces
import { User } from "../../hooks/get-user/interfaces";

interface AvatarProps {
  user: User;
  shared?: boolean;
  reversed?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  user,
  shared,
  reversed
}): JSX.Element => {
  const { firstName, lastName } = user;
  const avatarContent = lastName.charAt(0);

  return (
    <UserDetails reversed={reversed ? reversed : false}>
      <StyledUserAvatar
        reversed={reversed ? reversed : false}
        shared={shared ? shared : false}
      >
        <p>{avatarContent}</p>
      </StyledUserAvatar>
      <StyledUserName
        reversed={reversed ? reversed : false}
      >{`${firstName} ${lastName}`}</StyledUserName>
    </UserDetails>
  );
};

export default Avatar;
