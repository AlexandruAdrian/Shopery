import styled, { DefaultTheme } from "styled-components";
import { device } from "../../../breakpoints/breakpoints";
import ThemeProps from "../../../theme/theme-props.interface";

export const Container = styled.div<ThemeProps>`
  width: 90%;
  height: auto;
  background-color: ${props => (props.theme as DefaultTheme).colors.secondary};
  color: ${props => (props.theme as DefaultTheme).colors.primary};
  font-family: ${props => (props.theme as DefaultTheme).fontFamily};
  border-radius: ${props =>
    (props.theme as DefaultTheme).dashboardBorderRadius};
  margin: 0 auto;

  @media ${device.customXL} {
    width: 75%;
  }

  @media ${device.tablet} {
    width: 400px;
    margin: 0 auto;
  }

  @media ${device.laptop} {
    width: 500px;
  }
`;

export const ContainerHeader = styled.div<ThemeProps>`
  width: 100%;
  height: auto;
  padding: 5px 5px 6px 20px;
  border-bottom: 1px solid
    ${props => (props.theme as DefaultTheme).colors.tertiary};

  h5 {
    display: block;
    width: 100px;
    height auto;
    margin: 0 auto;
    clear: both;
  }
`;
