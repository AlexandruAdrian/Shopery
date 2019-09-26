import styled, { DefaultTheme } from "styled-components";

import ThemeProps from "../../theme/theme-props.interface";

const StyledBackButton = styled.div<ThemeProps>`
  width: 100%;
  display: block;
  height: 35px;
  padding: 0.7em 0 0 0.7em;
  font-size: 1.2em;
  color: ${props => (props.theme as DefaultTheme).colors.secondary};
  position: absolute;
  top: 0;
`;

export default StyledBackButton;
