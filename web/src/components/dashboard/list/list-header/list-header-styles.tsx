import styled, { DefaultTheme } from "styled-components";
import ThemeProps from "../../../../theme/theme-props.interface";

export const StyledListHeader = styled.div<ThemeProps>`
  width: 100%;
  height: auto;
  padding: 5px;
  border-bottom: 1px solid
    ${props => (props.theme as DefaultTheme).colors.tertiary};

  &:: after {
    content: " ";
    clear: both;
    display: table;
  }

  input[type="checkbox"] {
    width: 15px;
    height: 15px;
    margin-left: 15px;
  }
`;
