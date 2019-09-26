import styled, { DefaultTheme } from "styled-components";

import ThemeProps from "../../theme/theme-props.interface";

export const UserDetails = styled.div<ThemeProps>`
  width: ${props => (props.reversed ? "auto" : "75%")};
  display: ${props => (props.reversed ? "block" : "inline-block")};
  height: ${props => (props.reversed ? "auto" : "30px")};
  padding-left: ${props => (props.reversed ? "0px" : "2px")};
  text-align: ${props => (props.reversed ? "center" : "default")};
`;

export const StyledUserAvatar = styled.div<ThemeProps>`
  width: ${props => (props.shared ? "25px" : props.reversed ? "35px" : "30px")};
  height: ${props =>
    props.shared ? "25px" : props.reversed ? "35px" : "30px"};
  display: ${props => (props.reversed ? "block" : "inline-block")};
  margin: ${props => (props.reversed ? "0 auto 10px auto" : "0")};
  border-radius: 100%;
  background-color: ${props =>
    props.reversed
      ? (props.theme as DefaultTheme).colors.secondary
      : (props.theme as DefaultTheme).colors.primary};
  color: ${props =>
    props.reversed
      ? (props.theme as DefaultTheme).colors.primary
      : (props.theme as DefaultTheme).colors.secondary};
  text-align: center;
  line-height: ${props =>
    props.shared ? "25px" : props.reversed ? "35px" : "30px"};
  font-weight: bold;
  font-size: ${props => (props.reversed ? "1.2em" : "default")};
`;

export const StyledUserName = styled.p<ThemeProps>`
  font-size: 0.8em;
  display: inline-block;
  margin-left: 8px;
  font-weight: bold;
  margin-right: ${props => (props.reversed ? "6px" : "0")};
`;
