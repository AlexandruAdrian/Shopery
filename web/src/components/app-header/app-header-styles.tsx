import styled, { DefaultTheme } from "styled-components";

import ThemeProps from "../../theme/theme-props.interface";

export const AppHeaderContainer = styled.div<ThemeProps>`
  width: 100%;
  height: 50px;
  padding: 5px 15px;
  position: fixed;
  background-color: ${props => (props.theme as DefaultTheme).colors.primary};
  color: ${props => (props.theme as DefaultTheme).colors.secondary};
  z-index: 15;
  & ::after {
    content: "",
    clear: both;
    display: table;
  }
`;
