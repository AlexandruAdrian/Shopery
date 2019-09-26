import styled, { DefaultTheme } from "styled-components";
import ThemeProps from "../../theme/theme-props.interface";

const StyledNotFound = styled.div<ThemeProps>`
  width: 100%;
  height: 100%;
  background-color: ${props => (props.theme as DefaultTheme).colors.primary};
  padding-top: 3em;

  h2 {
    text-align: center;
    margin-top: 7em;
    padding: 0 1.5em;
    font-size: 1em;
    color: ${props => (props.theme as DefaultTheme).colors.secondary};
    font-family: ${props => (props.theme as DefaultTheme).fontFamily};
  }
`;

export default StyledNotFound;
