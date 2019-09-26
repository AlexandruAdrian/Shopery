import styled, { DefaultTheme } from "styled-components";
import ThemeProps from "../../../../../../theme/theme-props.interface";

export const SharedWithContainer = styled.div<ThemeProps>`
  width: 100%;
  height: auto;
  margin-top: 5px;
  padding: 5px 0;
  background-color: ${props => (props.theme as DefaultTheme).colors.tertiary};
  border-radius: ${props =>
    (props.theme as DefaultTheme).dashboardBorderRadius};
`;

export const Header = styled.div<ThemeProps>`
  width: 100%;
  height: auto;
  padding: 0px 8px 3px;
  border-bottom: 1px solid
    ${props => (props.theme as DefaultTheme).colors.secondary};
  text-align: center;
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const AddBtn = styled.div<ThemeProps>`
  float: right;
  margin-top: 3px;
  font-size: 0.8em;
  cursor: pointer;
`;

export const Title = styled.h6<ThemeProps>`
  width: 76px;
  font-size: 0.75em;
  display: inline-block;
`;

export const Users = styled.ul<ThemeProps>`
  width: 100%;
  height: auto;
  list-style-type: none;
  margin-top: 7px;
  padding: 0px 7px;
`;
