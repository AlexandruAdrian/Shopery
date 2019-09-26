import React, { MouseEventHandler } from "react";
// Import styled components
import { IconWrapper, Text, Wrap } from "./icon-styles";
// Import FA Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import ThemeProps from "../../theme/theme-props.interface";

interface FAIcon extends ThemeProps {
  icon: IconProp;
  onClick?: MouseEventHandler;
  text?: string;
}

const Icon: React.SFC<FAIcon> = (props): JSX.Element => {
  if (props.footer) {
    return (
      <IconWrapper footer onClick={props.onClick}>
        <Wrap>
          <FontAwesomeIcon icon={props.icon} />
        </Wrap>
        <Text>{props.text}</Text>
      </IconWrapper>
    );
  } else if (props.liOption) {
    if (props.trash) {
      return (
        <IconWrapper trash liOption>
          <FontAwesomeIcon icon={props.icon} />
        </IconWrapper>
      );
    }
    return (
      <IconWrapper liOption>
        <FontAwesomeIcon icon={props.icon} />
      </IconWrapper>
    );
  } else {
    return (
      <IconWrapper>
        <FontAwesomeIcon icon={props.icon} />
      </IconWrapper>
    );
  }
};

export default Icon;
