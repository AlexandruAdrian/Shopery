import styled, { DefaultTheme } from "styled-components";
import ThemeProps from "../../../../theme/theme-props.interface";

export const StyledSharedItem = styled.li<ThemeProps>`
  width: 100%;
  height: auto;
  padding: 7px;
  font-size: 0.8em;
  font-weight: 600;
  margin-top: 5px;
  background-color: ${props => (props.theme as DefaultTheme).colors.tertiary};
  border-radius: ${props =>
    (props.theme as DefaultTheme).dashboardBorderRadius};

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  &:hover p {
    text-decoration: line-through;
  }

  p {
    display: inline-block;
  }

  p: last-child {
    float: right;
    margin-right: 10px;
  }
`;
