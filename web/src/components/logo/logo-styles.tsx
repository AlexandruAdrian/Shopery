import styled, { DefaultTheme } from "styled-components";
import ThemeProps from "../../theme/theme-props.interface";

export const StyledLogo = styled.div<ThemeProps>`
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;

  h1 {
    text-align: center;
    font-weight: 550;
    letter-spacing: 1.3px;
    font-size: 1.5em;
    color: ${props => (props.theme as DefaultTheme).colors.secondary};
    font-family: ${props => (props.theme as DefaultTheme).logoFont};
  }
`;
