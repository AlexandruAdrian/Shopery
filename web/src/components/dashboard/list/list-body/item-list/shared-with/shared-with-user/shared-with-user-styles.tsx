import styled from "styled-components";
import ThemeProps from "../../../../../../../theme/theme-props.interface";

export const UserContainer = styled.li<ThemeProps>`
  margin-top: 5px;
  font-size: 0.8em;
`;

export const IconWrapper = styled.div<ThemeProps>`
  float: right;
  margin-right: 5px;
  line-height: 25px;
  color: #dc143c;

  &: hover {
    cursor: pointer;
  }
`;
